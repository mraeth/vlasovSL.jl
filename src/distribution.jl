
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

struct DistributionParticles<:Distribution
    x :: Vector
    v :: Vector
end

function DistributionGrid(data ::Array{Float64,2})
    return DistributionGrid1d1v(data)
end
function DistributionGrid(data ::Array{Float64,3})
    return DistributionGrid1d2v(data)
end

function Distribution(grid::Grid, epsilon::Float64, initFunc = (x-> (1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))))
    fct_sp(x) = initFunc(x)
    fct_v(v) = exp(-v^2 / 2) / sqrt(2*pi)
    dx = map(x->fct_sp.(x), grid.xaxes)
    dv = map(x->fct_v.(x), grid.vaxes)
    
    da = vcat(dx,dv)
    outer_product(vs) =  .*([reshape(vs[d], (ntuple(Returns(1), d-1)..., :)) for d in 1:length(vs)]... )
    return DistributionGrid(outer_product(da))
end


function Distribution(grid::Grid, epsilon :: Float64 ,nParticles :: Int64)
    x = 0:0.00001:grid.max[1]-0.00001;
    P = 1. .+epsilon .*cos.(2pi/(grid.xaxes[1][end]+grid.delta[1]) .* x);
    r = StatsBase.sample(x, Weights(P),nParticles);

    return DistributionParticles(r,randn(nParticles))
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


function plotf(f::DistributionParticles,grid::Grid)
    h = Hist2D((f.x,f.v),(grid.min[1]:grid.delta[1]:grid.max[1],grid.min[2]:grid.delta[2]:grid.max[2])).sumw2;
    return heatmap(h/mean(h))
end

