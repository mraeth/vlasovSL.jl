
using vlasovSL


Lx = 4pi;
nx = 64;

vmax = 5;
nv = 64;

grid = vlasovSL.simulationData([0.,-vmax],[Lx,vmax],[Lx/nx,2*vmax/nv],0.1,1);
f = vlasovSL.Distribution(grid,0.1);
fp = vlasovSL.Distribution(grid,0.1,1000000);

rho = vlasovSL.compute_density(f,grid);
e = vlasovSL.compute_e(rho,grid);

sim = Simulation(f, rho, e,grid,[[],[]]);
simp = Simulation(fp, rho, e,grid,[[],[]]);

println("Performance SL")
@time timeStep!(sim)
println("Performance PIC")
@time timeStep!(simp)

println(" ")
println(" ")
println(" ")
println(" ")

println("Performance SL")
@time timeStep!(sim)
println("Performance PIC")
@time timeStep!(simp)

for i = vlasovSL.ProgressBar(1:1000)
    timeStep!(sim)
    diagnostics(sim,i)
    timeStep!(simp)
    diagnostics(simp,i)

    p1 =vlasovSL.plotf(sim.f,sim.grid)
    p2 =vlasovSL.plotf(simp.f,sim.grid)
    p3 = vlasovSL.plot(simp.diag[1],simp.diag[2], yscale=:log10)
    p3 = vlasovSL.plot!(sim.diag[1],sim.diag[2], yscale=:log10)
    
    vlasovSL.display(vlasovSL.plot(p1,p2,p3, layout = (1,3), size = (1500,500)))


end






