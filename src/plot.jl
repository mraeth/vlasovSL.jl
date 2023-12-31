
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
    return heatmap(deltaf(f, grid),aspect_ratio = :equal)
end



# function plotf(f::DistributionGrid{Float64,1,2,3,Cart},grid::Grid)
#     return heatmap(f.data[:,:,convert(Int,round(length(grid.vaxes[2])/2))],aspect_ratio = :equal)
# end

function plotf(f::DistributionGrid{Float64,1,2,3,Cart},grid::Grid)
    return heatmap(reshape(mean(f.data,dims=3),size(f.data)[1:end-1]))
end




function plotfv(f::DistributionGrid{Float64,1,2,3,Cart},grid::Grid)
    return heatmap(f.data[1,:,:],aspect_ratio = :equal)
end


function plotfv(f::DistributionGrid{Float64,1,2,3, Polar},grid::Grid)
    return heatmap(grid.vaxes[2], grid.vaxes[1],f.data[1,:,:], proj=:polar)
end


function plotf(f::FullDistributionParticles1d,grid::Grid)
    h = vlasovSL.Hist2D((f.x[1],f.v[1]),(grid.min[1]:grid.delta[1]:grid.max[1],grid.min[2]:grid.delta[2]:grid.max[2])).sumw2;
    return heatmap(h)
end

function scatterf(f::DistributionParticles1d2v,grid::Grid)
    return vlasovSL.scatter(f.v[1][1:100:end],f.v[2][1:100:end],f.x[1][1:100:end], color =f.color[1:100:end]; ms=1, ma=abs.(f.w[1:100:end]./maximum(f.w[1:100:end])),msw=0)
end


function scatterf(f::DistributionParticles1d1v,grid::Grid)
    return vlasovSL.scatter(f.v[1][1:100:end],f.x[1][1:100:end], color =f.color[1:100:end]; ms=1, ma=abs.(f.w[1:100:end]./maximum(f.w[1:100:end])),msw=0)
end



function weightedHist2D(f::DeltaDistributionParticles1d,grid::Grid)
    fgrid = zeros(length(grid.xaxes[1]), length(grid.vaxes[1]));
    for i in  eachindex(f.x[1]) 
        fgrid[trunc(Int64,f.x[1][i]/grid.delta[1])+1,trunc.(Int64,mod.(f.v[1][i]-grid.min[2],grid.max[2]-grid.min[2])/grid.delta[2]).+1] += f.w[i]/length(f.x)*length(grid.xaxes[1]) end
    return fgrid
    end

function plotf(f::DeltaDistributionParticles1d,grid::Grid)
    return heatmap(weightedHist2D(f,grid))
end

