
abstract type Distribution end

struct DistributionGrid<:Distribution
    data :: Array
end

struct DistributionParticles<:Distribution
    x :: Vector
    v :: Vector


end

function Distribution(grid::Grid, epsilon::Float64)
    fct_sp(x) =1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ) 
    fct_v(v) = exp(-v^2 / 2) / sqrt(2*pi)
    dx = map(x->fct_sp.(x), grid.xaxes)
    dv = map(x->fct_v.(x), grid.vaxes)
    
    da = hcat(dx,dv)
    outer_product(vs) =  .*([reshape(vs[d], (ntuple(Returns(1), d-1)..., :)) for d in 1:length(vs)]... )
    return DistributionGrid(outer_product(da))
end


function Distribution(grid::Grid, epsilon :: Float64 ,nParticles :: Int64)
    x = 0:0.00001:grid.max[1]-0.00001;
    P = 1. .+epsilon .*cos.(2pi/(grid.xaxes[1][end]+grid.delta[1]) .* x);
    r = StatsBase.sample(x, Weights(P),nParticles);

    return DistributionParticles(r,randn(nParticles))
end

function deltaf(f::DistributionGrid)
    return reduce(vcat, transpose.(map(i->f.data[i,begin:end] - reshape(mean(f.data, dims = 1),size(f.data)[2]),1:size(f.data)[1])))
end


function plotf(f::DistributionGrid,grid::Grid)
    return heatmap(f.data)
end


function plotf(f::DistributionParticles,grid::Grid)
    h = Hist2D((f.x,f.v),(grid.min[1]:grid.delta[1]:grid.max[1],grid.min[2]:grid.delta[2]:grid.max[2])).sumw2;
    return heatmap(h/mean(h))
end

