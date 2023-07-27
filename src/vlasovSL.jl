module vlasovSL
using LinearAlgebra, DataInterpolations, FFTW, Statistics, FHist, StatsBase,Plots, Interpolations,ProgressBars


include("grid.jl")
include("distribution.jl")
include("advectorSL.jl")
include("advectorPIC.jl")
include("fields.jl")
include("simulation.jl")


 
end
