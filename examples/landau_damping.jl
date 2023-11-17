using vlasovSL, Plots, ProgressBars

println("Num Threads = ", Threads.nthreads())

Lx = 4pi;
nx = 128;

vmax = 4;
nv = 128

nt = 5000
dt = 0.025
epsilon = 0.01

grid = Grid([0.0, -vmax], [Lx, vmax], [Lx / nx, 2 * vmax / nv], dt, nt, 1, 0);

initFuncx(x)= (1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))
initFuncv(v)= exp(-(v+1.5)^2 / 2) / sqrt(2*pi)+ exp(-(v-1.5)^2 / 2) / sqrt(2*pi)
initFuncv(v) =  v^2*exp(-v^2 / 2) / sqrt(2*pi)

f = Distribution(grid, epsilon);
fp = Distribution(grid, epsilon,1000000);

sim = Simulation(f, grid)
simp = Simulation(fp, grid); 

function timeStep!(sim::Simulation, dt::Float64)
     advectX!(sim.f, sim.grid, dt)
     compute_density!(sim.rho, sim.f, sim.grid)
     sim.rho.data .= -1 .*sim.rho.data
     poisson!(sim.phi, sim.rho, sim.grid)
    #  adiabatic!(sim.phi, sim.rho, sim.grid)
     compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, dt, sim.e)
end

println("Performance SL")
@time timeStep!(sim, sim.grid.dt)
println("Performance PIC")
@time timeStep!(simp, simp.grid.dt)
println(" ")
println("Performance Diag SL")
@time     diagnostics(sim, grid.index[1])
println("Performance Diag PIC")
@time     diagnostics(simp, grid.index[1])
println(" ")

println("Performance SL")
@time timeStep!(sim, sim.grid.dt)
println("Performance PIC")
@time timeStep!(simp, simp.grid.dt)
println("Performance Diag SL")
@time     diagnostics(sim, grid.index[1])
println("Performance Diag PIC")
@time     diagnostics(simp, grid.index[1])
println(" ")

for grid.index[1]= ProgressBar(grid.itime)
    grid.index[1] = grid.index[1]
    timeStep!(sim, sim.grid.dt)
    diagnostics(sim, grid.index[1])
    timeStep!(simp, sim.grid.dt)


    if(mod(grid.index[1],10)==0)
        p1 = plotf(sim.f, sim.grid)
        p2 = scatterf(simp.f, simp.grid)
        diagnostics(simp, grid.index[1])


        p3 = plot(sim.diag[1], sim.diag[2], yscale=:log10)
        p3 = plot!(simp.diag[1], simp.diag[2], yscale=:log10)
        
        p4 = plot(sim.e.data[1])
        p4 = plot!(simp.e.data[1])
        
        display(plot(p1, p2, p3, p4, layout=(1,4), size=(1800, 500)))
    end 

end


