
using vlasovSL

Lx = 4pi;
nx = 32;

vmax = 4;
nv = 32;

nt = 10000
dt = 0.1

epsilon = 0.1

grid = vlasovSL.Grid([0.0, -vmax], [Lx, vmax], [Lx / nx, 2 * vmax / nv], 0.1, nt, 1);
grid = vlasovSL.Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],0.1,nt,1);

f = vlasovSL.Distribution(grid, epsilon, x->rand());
fp = vlasovSL.Distribution(grid, epsilon, 100000);

sim = vlasovSL.Simulation(f, grid)
simp = vlasovSL.Simulation(fp, grid);


function timeStep!(sim::vlasovSL.Simulation)
    vlasovSL.advectX!(sim.f, sim.grid)
    sim.rho.data .= vlasovSL.compute_density(sim.f, sim.grid).data
    sim.e.data .= vlasovSL.compute_e(sim.rho, sim.grid).data
    vlasovSL.advectV!(sim.f, sim.grid, sim.e.data[1])
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


for grid.index[1]= vlasovSL.ProgressBar(grid.itime)
    timeStep!(sim)
    vlasovSL.diagnostics(sim, grid.index[1])
    timeStep!(simp)
    vlasovSL.diagnostics(simp, grid.index[1])



end



p1 = vlasovSL.plotf(sim.f, sim.grid)
p2 = vlasovSL.plotf(simp.f, sim.grid)
p3 = vlasovSL.plot(simp.diag[1], simp.diag[2], yscale=:log10)
p3 = vlasovSL.plot!(sim.diag[1], sim.diag[2], yscale=:log10)

p4 = vlasovSL.plot(simp.rho.data)
p4 = vlasovSL.plot!(sim.rho.data)

vlasovSL.display(vlasovSL.plot(p1, p2, p3, p4, layout=(1, 4), size=(1800, 400)))



