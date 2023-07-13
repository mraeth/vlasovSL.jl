
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



function diagnostics(sim::Simulation, iTime :: Int64)
   push!(sim.diag[1], iTime *sim.grid.dt)
   push!(sim.diag[2], sqrt(vlasovSL.mean(sim.rho.data.^2)))
end