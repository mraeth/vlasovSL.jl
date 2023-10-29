
using vlasovSL, Plots, ProgressBars, DSP, FFTW, SpecialFunctions

println("Num Threads = ", Threads.nthreads())

Lx = 8pi;

vmax = 4
nv = 32
nx = 32
B=1

epsilon = 0.025

function timeStep!(sim::Simulation, dt::Float64)
    advectX!(sim.f, sim.grid,dt)
    compute_density!(sim.rho, sim.f, sim.grid)
    adiabatic!(sim.phi, sim.rho, sim.grid)
    compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, dt, sim.e)
end


function timeStepStrang!(sim::Simulation, dt::Float64)
    compute_density!(sim.rho, sim.f, sim.grid)
    adiabatic!(sim.phi, sim.rho, sim.grid)
    compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, dt/2, sim.e)
    sim.grid.curr_time[1] += 0.5*dt

    advectX!(sim.f, sim.grid,dt)
    sim.grid.curr_time[1] += dt

    compute_density!(sim.rho, sim.f, sim.grid)
    adiabatic!(sim.phi, sim.rho, sim.grid)
    compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, dt/2, sim.e)
    sim.grid.curr_time[1] += 0.5*dt
end

results = []

deltaT = [[1/(10*2^i) for i =1:4];1/(10*2^7)]

for tS in [timeStep!,timeStepStrang!]
    result= []
    for dt in deltaT

        nt = convert(Int,1/dt)
        grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, B;);

        f = Distribution(grid, epsilon;);

        sim = Simulation(f, grid)

        for grid.index[1]= ProgressBar(grid.itime)
            grid.index[1] = grid.index[1]
            tS(sim, sim.grid.dt)
            # diagnostics(sim, grid.index[1])
        end
        push!(result, sim.rho.data)
    end

push!(results, [maximum(abs.(last(result)-result[i])) for i = 1:length(result)-1])
end
plot(deltaT[1:length(deltaT)-1], results[1], xaxis=:log, yaxis=:log, label ="w/o Strang Splitting")
plot!(deltaT[1:length(deltaT)-1], results[2], xaxis=:log, yaxis=:log, label ="w/ Strang Splitting")

plot!([0.1^i for i=1:3],0.001*[0.1^i for i=1:3],line=(1,:black,:dash),label = "Δt^1")
plot!([0.1^i for i=1:3],0.0002*[0.1^(2*i) for i=1:3],line=(1,:black,:dash),label = "Δt^2")