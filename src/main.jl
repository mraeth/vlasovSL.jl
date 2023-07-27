
using vlasovSL

Lx = 4pi;
nx = 64;

vmax = 4;
nv = 64

nt = 1000
dt = 0.02

epsilon = 0.5

grid = vlasovSL.Grid([0.0, -vmax], [Lx, vmax], [Lx / nx, 2 * vmax / nv], dt, nt, 1);
# grid = vlasovSL.Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1);


initFuncx(x)= (1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))
initFuncv(v)= exp(-(v+1.5)^2 / 2) / sqrt(2*pi)+ exp(-(v-1.5)^2 / 2) / sqrt(2*pi)
initFuncv(v) = (v-> v^2*exp(-v^2 / 2) / sqrt(2*pi))

f = vlasovSL.Distribution(grid, epsilon);
fp = vlasovSL.DeltaDistribution(grid, epsilon, 500000);

sim = vlasovSL.Simulation(f, grid)
simp = vlasovSL.Simulation(fp, grid);


function timeStep!(sim::vlasovSL.Simulation)
      vlasovSL.advectX!(sim.f, sim.grid)
      vlasovSL.compute_density!(sim.rho, sim.f, sim.grid)
      vlasovSL.poisson!(sim.phi, sim.rho, sim.grid)
      vlasovSL.compute_e!(sim.e, sim.phi, sim.grid)
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


    if(mod(grid.index[1],10)==0)
        p1 = vlasovSL.plotf(sim.f, sim.grid)
        p2 = vlasovSL.plotf(simp.f)
        p3 = vlasovSL.plot(sim.diag[1], sim.diag[2], yscale=:log10)
        p3 = vlasovSL.plot!(simp.diag[1], simp.diag[2], yscale=:log10)
        
        p4 = vlasovSL.plot(sim.rho.data)
        p4 = vlasovSL.plot!(simp.rho.data)
        
        vlasovSL.display(vlasovSL.plot(p1, p2, p3, p4, layout=(1, 4), size=(1800, 400)))
    end 

end



# p1 = vlasovSL.plotf(sim.f, sim.grid)
# p2 = vlasovSL.plotf(simp.f, sim.grid)
# p3 = vlasovSL.plot(simp.diag[1], simp.diag[2], yscale=:log10)
# p3 = vlasovSL.plot!(sim.diag[1], sim.diag[2], yscale=:log10)

# p4 = vlasovSL.plot(simp.rho.data)
# p4 = vlasovSL.plot!(sim.rho.data)

# vlasovSL.display(vlasovSL.plot(p1, p2, p3, p4, layout=(1, 4), size=(1800, 400)))



