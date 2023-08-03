
abstract type Distribution end

struct DistributionGrid<:Distribution
    data :: AbstractArray
end

struct DistributionGrid1d1v<:Distribution
    data :: AbstractArray{Float64,2}
end
struct DistributionGrid1d2v<:Distribution
    data :: AbstractArray{Float64,3}
end

abstract type deltaF end
abstract type fullF end

struct DistributionParticles{DT,NX,NV,ID}<:Distribution
    x :: Vector{Vector{DT}}
    v :: Vector{Vector{DT}}
    w :: Vector{DT}
    color :: Vector{String}
end

function DistributionGrid(data ::Array{T,2}) where T
    return DistributionGrid1d1v(data)
end
function DistributionGrid(data ::Array{Float64,3})
    return DistributionGrid1d2v(data)
end

function Distribution(grid::Grid, epsilon;  
                initFuncx = (x-> (01. .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
                initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi)))
    fct_sp(x) = initFuncx(x)
    fct_v(v) = initFuncv(v)
    dx = map(x->fct_sp.(x), grid.xaxes)
    dv = map(x->fct_v.(x), grid.vaxes)
    
    da = vcat(dx,dv)
    outer_product(vs) =  .*([reshape(vs[d], (ntuple(Returns(1), d-1)..., :)) for d in 1:length(vs)]... )
    return DistributionGrid(outer_product(da))
end


function Distribution(grid::Grid, epsilon :: Float64 ,nParticles :: Int64;  
    initFuncx = (x-> (1. + epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
    initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi))) 
    sx = 0:0.00001:grid.max[1]-0.00001;
    x = StatsBase.sample(sx, Weights(initFuncx.(sx)),nParticles);
    sv = grid.min[2]:0.00001:grid.max[2]-0.00001;
    v1 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    v2 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    if length(grid.vaxes) == 1
        return DistributionParticles{Float64, 1,1,fullF}([x],[v1],ones(length(x)),["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    elseif length(grid.vaxes) == 2
        return DistributionParticles{Float64, 1,2,fullF}([x],[v1,v2],["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    end
    
end

function DeltaDistribution(grid::Grid, epsilon :: Float64 ,nParticles :: Int64;  
    initFuncx = (x-> (1+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
    initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi)))
    sx = 0:0.00001:grid.max[1]-0.00001;
    r = StatsBase.sample(sx, Weights(initFuncx.(sx)),nParticles);
    sv = grid.min[2]:0.00001:grid.max[2]-0.00001;
    v1 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    v2 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    w = @.  (initFuncx(r)-1)/(initFuncx(r));
    if length(grid.vaxes) == 1
        return DistributionParticles{Float64, 1,1,deltaF}([r], [v1], w,["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    elseif length(grid.vaxes) == 2
        return DistributionParticles{Float64, 1,2,deltaF}([r],[v1,v2],  ["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    end
end

