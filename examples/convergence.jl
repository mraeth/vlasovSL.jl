using vlasovSL, Plots, ProgressBars, DSP, FFTW, SpecialFunctions

println("Num Threads = ", Threads.nthreads())

Lx = 8pi;

vmax = 4
nv = 32
nx = 32
B=0

epsilon = 0.025

function computeVadvection(sim::Simulation, dt::Float64)
    compute_density!(sim.rho, sim.f, sim.grid)
    adiabatic!(sim.phi, sim.rho, sim.grid)
    compute_e!(sim.e, sim.phi, sim.grid)
    # sim.e.data[1].=0.01
    advectV!(sim.f, sim.grid, dt, sim.e)
end

function computeXadvection(sim::Simulation, dt::Float64)
    advectX!(sim.f, sim.grid,dt)
end

function timeStep!(sim::Simulation, dt::Float64)
    computeXadvection(sim, dt)
    computeVadvection(sim, dt)
    sim.grid.curr_time[1]+=dt
end

function timeStepStrang1!(sim::Simulation, dt::Float64)
    computeVadvection(sim, dt/2)
    computeXadvection(sim,dt)
    computeVadvection(sim,dt/2)
    sim.grid.curr_time[1]+=dt
end

function timeStepStrang2!(sim::Simulation, dt::Float64)
    if sim.grid.index[1]==1
        computeVadvection(sim, dt/2)
        println("First half timestep in v")
    end
    computeXadvection(sim,dt)
    if sim.grid.index[1]==sim.grid.itime[end]
        computeVadvection(sim, dt/2)
        println("Last half timestep in v")
    else
        computeVadvection(sim,dt)
        sim.grid.curr_time[1]+=dt
    end
end

function timeStepStrang3!(sim::Simulation, dt::Float64)
    if sim.grid.index[1]==1
        computeVadvection(sim, dt/2)
        println("First half timestep in v")
    end
    computeXadvection(sim,dt)
    if sim.grid.index[1]==sim.grid.itime[end]
        computeVadvection(sim, dt/2)
        println("Last half timestep in v")
    else
        computeVadvection(sim,dt/2)
        sim.grid.curr_time[1]+=dt
        computeVadvection(sim,dt/2)
    end
end



results = []
deltaT = [[1/(10*2^i) for i =1:4];1/(10*2^7)]

for tS in [timeStep!,timeStepStrang1!,timeStepStrang2!,timeStepStrang3!]
    result= []
    for dt in deltaT

        println(tS, ", ΔT=",dt)

        nt = convert(Int,1/dt)
        grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, B;);

        f = Distribution(grid, epsilon;);

        sim = Simulation(f, grid)

        for sim.grid.index[1]= sim.grid.itime
            # println(sim.grid.index[1])
            tS(sim, sim.grid.dt)
            # diagnostics(sim, grid.index[1])
        end
        push!(result, sim.rho.data)
    end

push!(results, [maximum(abs.(last(result)-result[i])) for i = 1:length(result)-1])
end

comp_order(delta, data) = (log(last(data))-log(first(data)))/(log(last(delta)) - log(first(delta)))

order = [comp_order(deltaT[1:end-1], result) for result in results]
 


plot(deltaT[1:length(deltaT)-1], results[1],legend=:bottomright, xaxis=:log, yaxis=:log, label ="w/o Strang Splitting, Δt^"*string(round(order[1],digits=2)))
for i in 2:length(results)
plot!(deltaT[1:length(deltaT)-1], results[i], xaxis=:log, yaxis=:log, label ="w/ Strang Splitting"*string(i-1)*", Δt^"*string(round(order[i],digits=2)))
end
plot!([0.1^i for i=1:3],0.00005*[0.1^i for i=1:3],line=(1,:black,:dash),label = "Δt^1")
plot!([0.1^i for i=1:3],0.0001*[0.1^(2*i) for i=1:3],line=(1,:black,:dash),label = "Δt^2")