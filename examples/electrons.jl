using vlasovSL, Plots, ProgressBars, DSP, FFTW, SpecialFunctions

println("Num Threads = ", Threads.nthreads())

Lx = 16pi;
nx = 16;

vmax = 4
nv = 16

Tfinal = 10
dt = 0.025
nt = convert(Int,Tfinal/dt)
epsilon = 0.3

grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, 1;);

f = Distribution(grid, epsilon);

sim = Simulation(f, grid)

function timeStep!(sim::Simulation, dt::Float64)
    advectX!(sim.f, sim.grid, dt)
    compute_density!(sim.rho, sim.f, sim.grid)
    sim.rho.data .= -1 .*sim.rho.data
    poisson!(sim.phi, sim.rho, sim.grid)
    compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, dt, sim.e)
end


for grid.index[1]= ProgressBar(grid.itime)
    timeStep!(sim, sim.grid.dt)
    display(plot([plotfv(sim.f, sim.grid), plotfv(simp.f, simp.grid)]..., layout=(1,2), size=(1800, 500), label = string(grid.index[1])))
end

disp(ko) = sqrt(2*exp(ko^2) - besseli(0,ko^2))/sqrt(2*exp(ko^2) - besseli(0,ko^2) - 2*besseli(1,ko^2))
nteval = round(Int,length(grid.time)/4)

k = fftfreq(length(grid.xaxes[1]))*2pi/grid.max[1]*nx
ω = fftfreq(nteval+1)/dt*2pi

win = vlasovSL.outer_product([DSP.kaiser(nteval+1,1),ones(length(grid.xaxes[1]))])
spect = log.(abs.(fft(sim.diag[4][end-nteval:end,:].*win)))
heatmap(k[2:convert(Int,nx/2)],ω[20:100], spect[20:100,2:convert(Int,nx/2)])
plot!(k[2:convert(Int,nx/2)],disp.(k[2:convert(Int,nx/2)]),line=(3,:green,:dash))