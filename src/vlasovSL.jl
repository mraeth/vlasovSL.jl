module vlasovSL
using LinearAlgebra, DataInterpolations, FFTW, Statistics, FHist, StatsBase,Plots, Interpolations,ProgressBars

include("simulation.jl")
include("distribution.jl")
include("advector.jl")
include("fields.jl")
    
end
