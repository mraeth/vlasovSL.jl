
using vlasovSL, Plots, ProgressBars, DSP, FFTW, SpecialFunctions

println("Num Threads = ", Threads.nthreads())

Lx = 8pi;
nx = 128;

vmax = 4
nv = 32

Tfinal = 100
dt = 0.05
nt = convert(Int,Tfinal/dt)
epsilon = 0.0

grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, 1;);

f = Distribution(grid, epsilon;);
p(t) = (exp(-10*(t-2)^2)*sinc(250*(t-2)))
amp = 1e-8*rand(length(grid.xaxes[1]))

sim = Simulation(f, grid)


function timeStep!(sim::Simulation)
     advectX!(sim.f, sim.grid)
     compute_density!(sim.rho, sim.f, sim.grid)
     sim.phi.data .= amp*p(sim.grid.time[sim.grid.index[1]])
     compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, sim.e)
end



for grid.index[1]= ProgressBar(grid.itime)
    grid.index[1] = grid.index[1]
    timeStep!(sim)
    diagnostics(sim, grid.index[1])
end

ikx = 15
k = 2*pi/grid.max[1]*(ikx-1)
fftamp = (fft(amp))/32


dens_res(t,kx) = - exp(-2kx^2*sin(t/2)^2)kx^2 *sin(t)

plot_list = []

for imom in 1:length(sim.diag[3][1])
    

    mom = [sim.diag[3][i][imom].data[j] for i =1:nt, j=1:nx]

    p1 = plot(sim.grid.time[3:end],real(fft(mom,2)[2:end,ikx]/fftamp[ikx]), xlims=(0,40))
    p1 = plot!(sim.grid.time[3:end],imag(fft(mom,2)[2:end,ikx]/fftamp[ikx]), xlims=(0,40))
    p1 = plot!(sim.grid.time,1.66*dens_res.(sim.grid.time.-2,k))

    push!(plot_list,p1)

end

plot(plot_list..., layout = size(sim.diag[3][1]),size=(800,800))