


function advectX!(f::DistributionParticles{T,1,1}, grid::Grid) where T
        @. f.x[1] =  mod(f.x[1]+  grid.dt*f.v[1], grid.max[1]-1e-5)
end


function advectV!(f::DistributionParticles{T,1,1,fullF}, grid::Grid, e::VectorField) where T
    itp = interpolate([e.data[1];e.data[1][1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
     @. f.v += grid.dt * sitp(f.x)

end

function advectV!(f::DistributionParticles{T,1,1,deltaF}, grid::Grid, e::VectorField) where T
    itp = interpolate([e.data[1];e.data[1][1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
     @. f.v[1] += grid.dt * sitp(f.x[1])
     @. f.w += grid.dt * f.v[1] * sitp(f.x[1])

end

function advectX!(f::DistributionParticles{Float64,1,2}, grid::Grid)
    xdisp = @. R(-grid.time[grid.index[1]])[1,1]* f.v[1] +  R(-grid.time[grid.index[1]])[1,2]* f.v[2]
     @. f.x[1] =mod(f.x[1] +  grid.dt *xdisp, grid.max[1])
end


function advectV!(f::DistributionParticles{Float64,1,2,fullF}, grid::Grid, e::VectorField)
    vdisp = map(i->R(grid.time[grid.index[1]])*[e.data[1][i],e.data[2][i]],1:length(grid.xaxes[1]))
    itp1 = interpolate([first.(vdisp); vdisp[1][1]], BSpline(Cubic(Periodic(OnGrid()))))
    itp2 = interpolate([last.(vdisp); vdisp[2][1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp1 = scale(itp1,0:grid.delta[1]:grid.max[1])
    sitp2 = scale(itp2,0:grid.delta[1]:grid.max[1])
     @. f.v[1] +=  grid.dt*sitp1(f.x[1])
     @. f.v[2] +=  grid.dt*sitp2(f.x[1])
end




