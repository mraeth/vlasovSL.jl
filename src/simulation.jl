struct simulationData
    dt :: Float64
    xaxes :: Vector{AbstractRange}
    vaxes :: Vector{AbstractRange}
    max:: Vector
    min:: Vector
    delta :: Vector

end


struct Simulation
    f::Distribution
    rho::vlasovSL.scalarField
    e::vlasovSL.VectorField
    grid::vlasovSL.simulationData
    diag::Array
end


function simulationData(etaMin::Vector{Float64}, etaMax::Vector{Float64}, deta::Vector{Float64}, dt::Float64, nx::Int64)
    return simulationData(dt, map(i-> etaMin[i]:deta[i]:(etaMax[i]-deta[i]),1:nx),map(i-> etaMin[i]:deta[i]:etaMax[i],nx+1:length(etaMin)), etaMax, etaMin, deta )
end



function timeStep!(sim::Simulation)
    vlasovSL.advectX!(sim.f,sim.grid)
    sim.rho.data .= vlasovSL.compute_density(sim.f, sim.grid).data
    sim.e.data .= vlasovSL.compute_e(sim.rho, sim.grid).data
    vlasovSL.advectV!(sim.f,sim.grid,sim.e.data[1])
end

function diagnostics(sim::Simulation, iTime :: Int64)
   push!(sim.diag[1], iTime *grid.dt)
   push!(sim.diag[2], sqrt(vlasovSL.mean(rho.data.^2)))
end