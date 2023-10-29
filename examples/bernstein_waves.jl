
using vlasovSL, Plots, ProgressBars, DSP, FFTW, SpecialFunctions

println("Num Threads = ", Threads.nthreads())

Lx = 8pi;
nx = 32;

vmax = 4
nv = 32

Tfinal = 1000
dt = 0.025
nt = convert(Int,Tfinal/dt)
epsilon = 0.025

grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, 1;);

f = Distribution(grid, epsilon; initFuncx = (x->1+epsilon*rand()));
fp = Distribution(grid, epsilon,100000; initFuncx = (x->1+epsilon*rand()));


# f = Distribution(grid, epsilon;);
# fp = Distribution(grid, epsilon,100000;);



sim = Simulation(f, grid)
simp = Simulation(fp, grid);


function timeStep!(sim::Simulation)
     advectX!(sim.f, sim.grid)
     compute_density!(sim.rho, sim.f, sim.grid)
     adiabatic!(sim.phi, sim.rho, sim.grid)
     compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, sim.e)
end

println("Performance SL")
@time timeStep!(sim)
println("Performance PIC")
@time timeStep!(simp)
println(" ")

println("Performance SL")
@time timeStep!(sim)
println("Performance PIC")
@time timeStep!(simp)


for grid.index[1]= ProgressBar(grid.itime)
    grid.index[1] = grid.index[1]
    timeStep!(sim)
    diagnostics(sim, grid.index[1])
end




disp(ko) = sqrt(2*exp(ko^2) - besseli(0,ko^2))/sqrt(2*exp(ko^2) - besseli(0,ko^2) - 2*besseli(1,ko^2))
nteval = round(Int,length(grid.time)/4)

k = fftfreq(length(grid.xaxes[1]))*2pi/grid.max[1]*32
ω = fftfreq(nteval+1)/dt*2pi

win = vlasovSL.outer_product([DSP.kaiser(nteval+1,1),ones(length(grid.xaxes[1]))])
spect = log.(abs.(fft(sim.diag[4][end-nteval:end,:].*win)))
heatmap(k[2:16],ω[20:100], spect[20:100,2:16])
plot!(k[2:16],disp.(k[2:16]),line=(3,:green,:dash))