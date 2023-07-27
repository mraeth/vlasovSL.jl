
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
abstract type DistributionParticles <:Distribution end
abstract type AbstractDistributionParticles1d1v <:DistributionParticles end

struct DistributionParticles1d1v<:AbstractDistributionParticles1d1v
    x :: Vector
    v :: Vector
    color :: Vector
end

struct DeltaDistributionParticles1d1v{DT}<:AbstractDistributionParticles1d1v
    x :: Vector{DT}
    v :: Vector{DT}
    w :: Vector{DT}
    color :: Vector{String}

    function DeltaDistributionParticles1d1v(x::Vector{DT}, v::Vector{DT}, w::Vector{DT}, color::Vector{String}) where DT
        return new{DT}(x,v,w,color)
    end
end

struct DistributionParticles1d2v<:DistributionParticles
    x :: Vector
    v :: Vector   
    color :: Vector

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
        return DistributionParticles1d1v(x,v1,["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    elseif length(grid.vaxes) == 2
        return DistributionParticles1d2v(x,[v1,v2],["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    end
end

function DeltaDistribution(grid::Grid, epsilon :: Float64 ,nParticles :: Int64;  
    initFuncx = (x-> ( epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
    initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi)))
    r = rand(nParticles)*grid.max[1]
    sv = grid.min[2]:0.00001:grid.max[2]-0.00001;
    v1 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    v2 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    w = @.  initFuncx(r);
    if length(grid.vaxes) == 1
        return DeltaDistributionParticles1d1v(r, v1, w,["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    elseif length(grid.vaxes) == 2
        return DistributionParticles1d2v(r,[v1,v2],  ["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    end
end


function deltaf(f::DistributionGrid1d1v)
    return reduce(vcat, transpose.(map(i->f.data[i,begin:end] - reshape(mean(f.data, dims = 1),size(f.data)[2]),1:size(f.data)[1])))
end


function plotf(f::DistributionGrid1d1v,grid::Grid)
    return heatmap(f.data)
end

function plotf(f::DistributionGrid1d2v,grid::Grid)
    return heatmap(f.data[:,:,convert(Int64,(length(grid.vaxes[2])-1)/2)])
end


function plotf(f::DistributionParticles1d1v,grid::Grid)
    h = Hist2D((f.v,f.x),(grid.min[1]:grid.delta[1]:grid.max[1],grid.min[2]:grid.delta[2]:grid.max[2])).sumw2;
    return heatmap(h/mean(h))
end

function plotf(f::AbstractDistributionParticles1d1v)
    return vlasovSL.scatter(f.v[1:100:end],f.x[1:100:end], color =f.color[1:100:end]; ms=1, ma=0.3,msw=0)
end



function weightedHist2D(f::vlasovSL.DeltaDistributionParticles1d1v,grid::Grid)
    fgrid = zeros(length(grid.xaxes[1]), length(grid.vaxes[1]));
    for i in  eachindex(f.x) fgrid[trunc(Int64,f.x[i]/grid.delta[1])+1,trunc.(Int64,mod.(f.v[i]-grid.min[2],grid.max[2]-grid.min[2])/grid.delta[2]).+1] += f.w[i]/length(f.x)*length(grid.xaxes[1]) end
    return fgrid
    end

function plotf(f::DeltaDistributionParticles1d1v,grid::Grid)
    return heatmap(weightedHist2D(f,grid))
end

