using vlasovSL
using Test


Lx = 16pi;
nx = 16;

vmax = 4
nv = 16

Tfinal = 2π
dt = Tfinal/100
nt = convert(Int,round(Tfinal/dt))
epsilon = 0.0

grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, 1;);


function compute_moments(f::Distribution)
    sim = Simulation(f, grid)

    diagnostics(sim, grid.index[1])
    [round(sum(diag.data)/length(diag.data),digits = 2) for diag in sim.diag[3][1]]
    
end
f = Distribution(grid, epsilon);
compute_moments(f)


f = Distribution(grid, epsilon; initFuncv = v-> exp(-(v-1)^2 / 2) / sqrt(2*pi));
compute_moments(f)

f = Distribution(grid, epsilon; initFuncv1 = v->  exp(-(v-1)^2 / 2) / sqrt(2*pi));
compute_moments(f)

grid.index[1] = 25
f = Distribution(grid, epsilon; initFuncv1 = v->  exp(-(v-1)^2 / 2) / sqrt(2*pi));
compute_moments(f)
