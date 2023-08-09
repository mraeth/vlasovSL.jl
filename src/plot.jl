
function deltaf(f::DistributionGrid1d1v, grid::Grid)
    return reduce(vcat, LinearAlgebra.transpose.(map(i->f.data[i,begin:end] - reshape(mean(f.data, dims = 1),size(f.data)[2]),1:size(f.data)[1])))
end

function deltaf(f::DistributionGrid1d2v, grid::Grid)
    return reduce(vcat, LinearAlgebra.transpose.(map(i->f.data[i,begin:end,convert(Int64,(length(grid.vaxes[2])-1)/2)] - reshape(mean(f.data[:,:,convert(Int64,(length(grid.vaxes[2])-1)/2)], dims = 1),size(f.data)[2]),1:size(f.data)[1])))
end


function plotf(f::DistributionGrid1d1v,grid::Grid)
    return heatmap(f.data)
end


function plotDeltaf(f::DistributionGrid,grid::Grid)
    return heatmap(deltaf(f, grid))
end



function plotf(f::DistributionGrid1d2v,grid::Grid)
    return heatmap(vlasovSL.mean(f.data,vlasovSL.weights(ones(length(grid.vaxes[2]))),3)[:,:,1])
end


function plotf(f::DistributionParticles{Float64,1},grid::Grid)
    h = Hist2D((f.v[1],f.x[1]),(grid.min[1]:grid.delta[1]:grid.max[1],grid.min[2]:grid.delta[2]:grid.max[2])).sumw2;
    return heatmap(vlasovSL.Hist2D((f.x[1],f.v[1]),(grid.min[1]:grid.delta[1]:grid.max[1],grid.min[2]:grid.delta[2]:grid.max[2])).sumw2)
end

function scatterf(f::DistributionParticles1d2v,grid::Grid)
    return vlasovSL.scatter(f.v[1][1:100:end],f.v[2][1:100:end],f.x[1][1:100:end], color =f.color[1:100:end]; ms=1, ma=abs.(f.w[1:100:end]./maximum(f.w[1:100:end])),msw=0)
end


function scatterf(f::DistributionParticles1d1v,grid::Grid)
    return vlasovSL.scatter(f.v[1][1:100:end],f.x[1][1:100:end], color =f.color[1:100:end]; ms=1, ma=abs.(f.w[1:100:end]./maximum(f.w[1:100:end])),msw=0)
end



function weightedHist2D(f::DistributionParticles{Float64,1,1,deltaF},grid::Grid) where T
    fgrid = zeros(length(grid.xaxes[1]), length(grid.vaxes[1]));
    for i in  eachindex(f.x[1]) 
        fgrid[trunc(Int64,f.x[1][i]/grid.delta[1])+1,trunc.(Int64,mod.(f.v[1][i]-grid.min[2],grid.max[2]-grid.min[2])/grid.delta[2]).+1] += f.w[i]/length(f.x)*length(grid.xaxes[1]) end
    return fgrid
    end

function plotf(f::DistributionParticles{Float64,1,1,deltaF},grid::Grid)
    return heatmap(weightedHist2D(f,grid))
end

