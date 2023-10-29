
abstract type Distribution end



struct DistributionGrid{DT,NX,NV,NXNV,ID}  <: Distribution
    data :: AbstractArray{DT,NXNV}
end

const DistributionGrid1d1v{T} = DistributionGrid{T,1,1,2}
const DistributionGrid1d2v{T} = DistributionGrid{T,1,2,3}



abstract type deltaF end
abstract type fullF end

struct DistributionParticles{DT,NX,NV,ID}<:Distribution
    x :: Vector{Vector{DT}}
    v :: Vector{Vector{DT}}
    w :: Vector{DT}
    color :: Vector{String}
end

const DistributionParticles1d{T,NV,D} = DistributionParticles{T,1,NV,D}
const DeltaDistributionParticles1d{T,NV} = DistributionParticles{T,1,NV,deltaF}
const FullDistributionParticles1d{T,NV} = DistributionParticles{T,1,NV,fullF}


function Distribution(grid::CartGrid, epsilon; 
    initFuncx = (x-> (01. .+ epsilon * sin(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
    initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi)))
fct_sp(x) = initFuncx(x)
fct_v(v) = initFuncv(v)
dx = map(x->fct_sp.(x), grid.xaxes)
dv = map(x->fct_v.(x), grid.vaxes)
da = vcat(dx,dv)
return DistributionGrid{Float64,length(grid.xaxes),length(grid.vaxes),length(grid.xaxes)+length(grid.vaxes), Cart }(outer_product(da))
end


function Distribution(grid::PolarGrid, epsilon; 
    initFuncx = (x-> (01. .+ epsilon * sin(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
    initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi)))
fct_sp(x) = initFuncx(x)
fct_v(v) = initFuncv(v)
dx = map(x->fct_sp.(x), grid.xaxes)
dv = [fct_v.(grid.vaxes[1]), 1/sqrt(2pi)*ones(length(grid.vaxes[2]))]
da = vcat(dx,dv)
return DistributionGrid{Float64,length(grid.xaxes),length(grid.vaxes),length(grid.xaxes)+length(grid.vaxes), Polar }(outer_product(da))
end


DistributionParticles1d1v = DistributionParticles{Float64,1,1}
DistributionParticles1d2v = DistributionParticles{Float64,1,2}

function Distribution(grid::Grid, epsilon :: Float64 ,nParticles :: Int64;  
    initFuncx = (x-> (1. + epsilon * sin(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
    initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi))) 
    sx = 0:0.00001:grid.max[1]-0.00001;
    x = StatsBase.sample(sx, Weights(initFuncx.(sx)),nParticles);
    sv = grid.min[2]+0.00001:0.00001:grid.max[2]-0.00001;
    v1 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    v2 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    w = ones(length(x))
    if length(grid.vaxes) == 1
        return DistributionParticles{Float64, 1,1,fullF}([x],[v1],w,["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    elseif length(grid.vaxes) == 2
        return DistributionParticles{Float64, 1,2,fullF}([x],[v1,v2],w,["red","blue"][trunc.(Int64,sign.(v1.*v2)./2 .+1.5)])
    end
    
end

function DeltaDistribution(grid::Grid, epsilon :: Float64 ,nParticles :: Int64;  
    initFuncx = (x-> (1+ epsilon * sin(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))),
    initFuncv = (v-> exp(-v^2 / 2) / sqrt(2*pi)))
    sx = 0:0.00001:grid.max[1]-0.00001;
    r = StatsBase.sample(sx, Weights(initFuncx.(sx)),nParticles);
    sv = grid.min[2]+0.00001:00001:grid.max[2]-0.00001;
    v1 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    v2 = StatsBase.sample(sv, Weights(initFuncv.(sv)),nParticles);
    w = @.  (initFuncx(r)-1)/(initFuncx(r));
    if length(grid.vaxes) == 1
        return DistributionParticles{Float64, 1,1,deltaF}([r], [v1], w,["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    elseif length(grid.vaxes) == 2
        return DistributionParticles{Float64, 1,2,deltaF}([r],[v1,v2],w,["red","blue"][trunc.(Int64,sign.(v1)./2 .+1.5)])
    end
end

