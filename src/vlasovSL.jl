module vlasovSL
using LinearAlgebra, DataInterpolations, FFTW, Statistics, FHist, StatsBase,Plots, Interpolations, LoopVectorization


include("grid.jl")
include("distribution.jl")
include("fields.jl")
include("advectorSL.jl")
include("advectorPIC.jl")
include("velocity_moments.jl")
include("simulation.jl")
include("plot.jl")


export Grid, Distribution, DistributionGrid1d1v, DistributionGrid1d2v, DistributionParticles1d1v, DistributionParticles1d2v, DeltaDistributionParticles1d1v, DeltaDistributionParticles1d2v, Simulation, advectX!, advectV!, compute_density!, compute_e!, poisson!, diagnostics, plotf, scatterf, DeltaDistribution, plotDeltaf, advectX2!, advectV2!, ScalarField,VectorField, plotfv, adiabatic!, compute_moment!

 
end
