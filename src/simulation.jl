
struct Simulation
    f::Distribution
    fe::Distribution
    rho::ScalarField
    phi::ScalarField
    e::VectorField
    grid::Grid
    diag::Array
end

function Simulation(f::Distribution,grid::Grid)
    rho = ScalarField(zeros(length(grid.xaxes[1]))) 
    phi = ScalarField(zeros(length(grid.xaxes[1]))) 
    e = VectorField([zeros(length(grid.xaxes[1])) for _ in 1:length(grid.vaxes)])
    return Simulation(f,f, rho,phi, e,grid,[[],[],[],zeros(length(grid.itime), length(grid.xaxes[1]))]);
end

function Simulation(f::Distribution,fe::Distribution,grid::Grid)
    rho = ScalarField(zeros(length(grid.xaxes[1]))) 
    phi = ScalarField(zeros(length(grid.xaxes[1]))) 
    e = VectorField([zeros(length(grid.xaxes[1])) for _ in 1:length(grid.vaxes)])
    return Simulation(f,fe, rho,phi, e,grid,[[],[],[],zeros(length(grid.itime), length(grid.xaxes[1]))]);
end

function diagnostics(sim::Simulation, iTime :: Int64)
   push!(sim.diag[1], iTime *sim.grid.dt)
   push!(sim.diag[2], sqrt(vlasovSL.mean((sim.phi.data.-mean(sim.phi.data)).^2)))
   moments = [compute_moment!(Tuple((i,j)[1:length(sim.grid.vaxes)]),ScalarField(zeros(length(sim.grid.xaxes[1]))) , sim.f, sim.grid) for i=0:2, j=0:2]
   push!(sim.diag[3], moments)
   sim.diag[4][iTime,:] = sim.phi.data
end

