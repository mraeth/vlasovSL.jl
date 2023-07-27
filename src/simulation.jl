
struct Simulation
    f::Distribution
    rho::ScalarField
    phi::ScalarField
    e::VectorField
    grid::Grid
    diag::Array
end

function Simulation(f::Distribution,grid::Grid)
    rho = ScalarField(zeros(length(grid.xaxes[1]))) 
    phi = ScalarField(zeros(length(grid.xaxes[1]))) 
    e = VectorField([zeros(length(grid.xaxes[1]))])
    return Simulation(f, rho,phi, e,grid,[[],[],zeros(length(grid.itime), length(grid.xaxes[1]))]);
end

function diagnostics(sim::Simulation, iTime :: Int64)
   push!(sim.diag[1], iTime *sim.grid.dt)
   push!(sim.diag[2], sqrt(vlasovSL.mean(sim.rho.data.^2)))
   sim.diag[3][iTime,:] = sim.rho.data
end

