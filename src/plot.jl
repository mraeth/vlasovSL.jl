
function deltaf(f::DistributionGrid1d1v)
    return reduce(vcat, LinearAlgebra.transpose.(map(i->f.data[i,begin:end] - reshape(mean(f.data, dims = 1),size(f.data)[2]),1:size(f.data)[1])))
end


function plotf(f::DistributionGrid1d1v,grid::Grid)
    return heatmap(f.data)
end


function plotDeltaf(f::DistributionGrid1d1v,grid::Grid)
    # subract Maxwellian from f
    deltaf = reduce(vcat, LinearAlgebra.transpose.(map(i->f.data[i,begin:end] - reshape(mean(f.data, dims = 1),size(f.data)[2]),1:size(f.data)[1])))
    return heatmap(deltaf)
end

function plotf(f::DistributionGrid1d2v,grid::Grid)
    return heatmap(f.data[:,:,convert(Int64,(length(grid.vaxes[2])-1)/2)])
end


function plotf(f::DistributionParticles1d1v,grid::Grid)
    h = Hist2D((f.v,f.x),(grid.min[1]:grid.delta[1]:grid.max[1],grid.min[2]:grid.delta[2]:grid.max[2])).sumw2;
    return heatmap(h/mean(h))
end

function scatterf(f::AbstractDistributionParticles1d1v,grid::Grid)
    return vlasovSL.scatter(f.v[1:100:end],f.x[1:100:end], color =f.color[1:100:end]; ms=1, ma=abs.(f.w[1:100:end]./maximum(f.w[1:100:end])),msw=0)
end



function weightedHist2D(f::vlasovSL.DeltaDistributionParticles1d1v{T},grid::Grid) where T
    fgrid = zeros(length(grid.xaxes[1]), length(grid.vaxes[1]));
    for i in  eachindex(f.x) 
        fgrid[trunc(Int64,f.x[i]/grid.delta[1])+1,trunc.(Int64,mod.(f.v[i]-grid.min[2],grid.max[2]-grid.min[2])/grid.delta[2]).+1] += f.w[i]/length(f.x)*length(grid.xaxes[1]) end
    return fgrid
    end

function plotf(f::DeltaDistributionParticles1d1v,grid::Grid)
    return heatmap(weightedHist2D(f,grid))
end

