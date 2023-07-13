
struct Simulation
    f::Distribution
    rho::vlasovSL.scalarField
    e::vlasovSL.VectorField
    grid::vlasovSL.Grid
    diag::Array
end

function Simulation(f::Distribution,grid::Grid)

    rho = vlasovSL.compute_density(f,grid);
    e = vlasovSL.compute_e(rho,grid);
    return Simulation(f, rho, e,grid,[[],[]]);
end

function timeStep!(sim::Simulation)
    vlasovSL.advectX!(sim.f,sim.grid)
    sim.rho.data .= vlasovSL.compute_density(sim.f, sim.grid).data
    sim.e.data .= vlasovSL.compute_e(sim.rho, sim.grid).data
    vlasovSL.advectV!(sim.f,sim.grid,sim.e.data[1])
end



function diagnostics(sim::Simulation, iTime :: Int64)
   push!(sim.diag[1], iTime *sim.grid.dt)
   push!(sim.diag[2], sqrt(vlasovSL.mean(sim.rho.data.^2)))
end