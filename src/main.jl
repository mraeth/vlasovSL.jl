
using vlasovSL

Lx = 4pi;
nx = 32;

vmax = 4;
nv = 32;

nt = 50000
dt = 0.1

epsilon = 0.1

# grid = vlasovSL.Grid([0.0, -vmax], [Lx, vmax], [Lx / nx, 2 * vmax / nv], dt, nt, 1);
grid = vlasovSL.Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],0.1,nt,1);

f = vlasovSL.Distribution(grid, epsilon);
# fc = vlasovSL.Distribution(grid, epsilon,[true, false]);
fp = vlasovSL.Distribution(grid, epsilon, 10000000);

sim = vlasovSL.Simulation(f, grid)
# simc = vlasovSL.Simulation(fc, grid)
simp = vlasovSL.Simulation(fp, grid);


function timeStep!(sim::vlasovSL.Simulation, advector = vlasovSL.advect1DFourier!)
    vlasovSL.advectX!(sim.f, sim.grid, advector)
    sim.rho.data .= vlasovSL.compute_density(sim.f, sim.grid).data
    sim.e.data .= vlasovSL.compute_e(sim.rho, sim.grid).data
    vlasovSL.advectV!(sim.f, sim.grid, sim.e.data[1])
end


println("Performance SL")
@time timeStep!(sim)
println("Performance SL Compled")
# @time timeStep!(simc, vlasovSL.advect1DFourierC!)
println("Performance PIC")
# @time timeStep!(simp)


println("Performance SL")
@time timeStep!(sim)
println("Performance SL Compled")
# @time timeStep!(simc, vlasovSL.advect1DFourierC!)
println("Performance PIC")
# @time timeStep!(simp)


function plotSim()

    p1 = vlasovSL.plotf(sim.f, sim.grid)
    p2 = vlasovSL.plotf(simc.f, sim.grid)

    p3 = vlasovSL.plot(sim.diag[1], sim.diag[2], yscale=:log10)
    p3 = vlasovSL.plot!(simc.diag[1], simc.diag[2], yscale=:log10)
    p3 = vlasovSL.plot!(simp.diag[1], simp.diag[2], yscale=:log10)

    p4 = vlasovSL.plot(simp.rho.data)
    p4 = vlasovSL.plot!(sim.rho.data)
    p4 = vlasovSL.plot!(simc.rho.data)

    vlasovSL.display(vlasovSL.plot(p1,p2, p3, p4, layout=(1, 4), size=(1800, 400)))

end

plotSim()

for grid.index[1]= vlasovSL.ProgressBar(grid.itime)
    timeStep!(sim)
    vlasovSL.diagnostics(sim, grid.index[1])
    timeStep!(simc)
    # vlasovSL.diagnostics(simc, grid.index[1])



end


