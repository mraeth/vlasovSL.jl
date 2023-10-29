
using vlasovSL, Plots, ProgressBars, DSP, FFTW, SpecialFunctions

println("Num Threads = ", Threads.nthreads())

Lx = 8pi;

vmax = 4
nv = 32
nx = 32


epsilon = 0.025

function timeStep!(sim::Simulation)
    advectX!(sim.f, sim.grid)
    compute_density!(sim.rho, sim.f, sim.grid)
    adiabatic!(sim.phi, sim.rho, sim.grid)
    compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, sim.e)
end


results = []

deltaT = [[1/(10*2^i) for i =1:5];1/(10*2^9)]

for B in [0.0,1.0]
    result= []
    for dt in deltaT

        nt = convert(Int,1/dt)
        grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, B;);

        f = Distribution(grid, epsilon;);

        sim = Simulation(f, grid)

        for grid.index[1]= ProgressBar(grid.itime)
            grid.index[1] = grid.index[1]
            timeStep!(sim)
            # diagnostics(sim, grid.index[1])
        end
        push!(result, sim.rho.data)
    end

push!(results, [maximum(abs.(last(result)-result[i])) for i = 1:length(result)-1])
end
plot(deltaT[1:length(deltaT)-1], results[1], xaxis=:log, yaxis=:log, label ="B=0")
plot!(deltaT[1:length(deltaT)-1], results[1], xaxis=:log, yaxis=:log, label ="B=1")

plot!([0.1^i for i=1:3],0.001*[0.1^i for i=1:3],line=(1,:black,:dash),label = "Δt^1")