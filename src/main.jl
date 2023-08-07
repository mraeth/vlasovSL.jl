
using vlasovSL, Plots, ProgressBars

println("Num Threads = ", Threads.nthreads())

Lx = 4pi;
nx = 64;

vmax = 4;
nv = 64

nt = 5000
dt = 0.05

epsilon = 0.3   

grid = Grid([0.0, -vmax], [Lx, vmax], [Lx / nx, 2 * vmax / nv], dt, nt, 1);
grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1);


initFuncx(x)= (1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))
initFuncv(v)= exp(-(v+1.5)^2 / 2) / sqrt(2*pi)+ exp(-(v-1.5)^2 / 2) / sqrt(2*pi)
initFuncv(v) = (v-> v^2*exp(-v^2 / 2) / sqrt(2*pi))

f = Distribution(grid, epsilon; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));
fp = Distribution(grid, epsilon, 1000000; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));

sim = Simulation(f, grid)
simp = Simulation(fp, grid);


function timeStep!(sim::Simulation)
     advectX!(sim.f, sim.grid)
     compute_density!(sim.rho, sim.f, sim.grid)
     poisson!(sim.phi, sim.rho, sim.grid)
     compute_e!(sim.e, sim.phi, sim.grid)
     advectV!(sim.f, sim.grid, -1 .*sim.e.data[1])
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
    timeStep!(sim)
    diagnostics(sim, grid.index[1])
    timeStep!(simp)
    diagnostics(simp, grid.index[1])


    if(mod(grid.index[1],1)==0)
        p1 = plotDeltaf(sim.f, sim.grid)
        p2 = scatterf(simp.f, sim.grid)
        p3 = plot(sim.diag[1], sim.diag[2], yscale=:log10)
        p3 = plot!(simp.diag[1], simp.diag[2], yscale=:log10)
        
        p4 = plot(sim.rho.data)
        p4 = plot!(simp.rho.data)
        
        display(plot(p1, p2, p3, p4, layout=(1,4), size=(1800, 500)))
    end 

end



# p1 = plotf(sim.f, sim.grid)
# p2 = plotf(simp.f, sim.grid)
# p3 = plot(simp.diag[1], simp.diag[2], yscale=:log10)
# p3 = plot!(sim.diag[1], sim.diag[2], yscale=:log10)

# p4 = plot(simp.rho.data)
# p4 = plot!(sim.rho.data)

# display(plot(p1, p2, p3, p4, layout=(1, 4), size=(1800, 400)))



