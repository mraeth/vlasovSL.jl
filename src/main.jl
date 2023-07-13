
using vlasovSL

Lx = 4pi;
nx = 32;

vmax = 6;
nv = 64;

epsilon = 0.2

grid = vlasovSL.Grid([0.,-vmax],[Lx,vmax],[Lx/nx,2*vmax/nv],0.05,1);

f = vlasovSL.Distribution(grid,epsilon);
fp = vlasovSL.Distribution(grid,epsilon,10000000);

sim = vlasovSL.Simulation(f,grid)
simp =vlasovSL.Simulation(fp,grid);

println("Performance SL")
@time vlasovSL.timeStep!(sim)
println("Performance PIC")
@time vlasovSL.timeStep!(simp)
println(" ")
println("Performance SL")
@time vlasovSL.timeStep!(sim)
println("Performance PIC")
@time vlasovSL.timeStep!(simp)

for i = vlasovSL.ProgressBar(1:2000)
    vlasovSL.timeStep!(sim)
    vlasovSL.diagnostics(sim,i)
    vlasovSL.timeStep!(simp)
    vlasovSL.diagnostics(simp,i)

    p1 =vlasovSL.plotf(sim.f,sim.grid)
    p2 =vlasovSL.plotf(simp.f,sim.grid)
    p3 = vlasovSL.plot(simp.diag[1],simp.diag[2], yscale=:log10)
    p3 = vlasovSL.plot!(sim.diag[1],sim.diag[2], yscale=:log10)

    p4 = vlasovSL.plot(simp.rho.data)
    p4 = vlasovSL.plot!(sim.rho.data)
    
    vlasovSL.display(vlasovSL.plot(p1,p2,p3,p4, layout = (1,4), size = (1800,400)))


end

sleep(100)





