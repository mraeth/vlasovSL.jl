using vlasovSL

Lx = 16pi;
nx = 32;

vmax = 4
nv = 16

Tfinal = 1000
dt = 0.025
nt = convert(Int,Tfinal/dt)
epsilon = 0.01

grid = Grid([0.,0.,-vmax,-vmax],[Lx,Lx,vmax,vmax],[Lx/nx,Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,2, 1;);

f = Distribution(grid, epsilon; initFuncx = (x->1+epsilon*rand()));

sim = Simulation(f, grid)


function timeStep!(sim::Simulation, dt::Float64)
    advectX!(sim.f, sim.grid, dt)
    compute_density!(sim.rho, sim.f, sim.grid)
    sim.rho.data .= -1 .*sim.rho.data
    adiabatic!(sim.phi, sim.rho, sim.grid)
    compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, dt, sim.e)
end

println("Performance SL")
@time timeStep!(sim, sim.grid.dt)
println("Performance Diag SL")
@time     diagnostics(sim, grid.index[1])


println("Performance SL")
@time timeStep!(sim, sim.grid.dt)
println("Performance Diag SL")
@time     diagnostics(sim, grid.index[1])
