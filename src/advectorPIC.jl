
function fourierInterpolation(e::Vector{DT},x::DT, grid::Grid) where {DT}
    ef =fft(e)
    k = fftfreq(length(ef))*length(ef)

    real(ef'exp.(x/(2pi)*pi*im * k)/length(ef))
end

function splineInterpolation(data::Vector{DT}, x::DT, grid::Grid) where {DT}
    itp = interpolate([data;data[1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
    sitp(mod(x,grid.max[1]))

end

interpolator(data::Vector{DT}, x::DT, grid::Grid) where DT = splineInterpolation(data,x,grid);



function advectX!(f::DistributionParticles{T,1,1}, grid::Grid) where T
        @. f.x[1] =  mod(f.x[1]+  grid.dt*f.v[1], grid.max[1]-1e-5)
end


function advectV!(f::DistributionParticles{T,1,1,fullF}, grid::Grid, e::VectorField) where T
    # sitp(x::Float64) = interpolator(e.data[1],x, grid)
    itp = interpolate([e.data[1];e.data[1][1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])

     @. f.v[1] += grid.dt * sitp(f.x[1])

end

function advectV!(f::DistributionParticles{T,1,1,deltaF}, grid::Grid, e::VectorField) where T
    itp = interpolate([e.data[1];e.data[1][1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
     @. f.v[1] += grid.dt * sitp.(f.x[1])
     @. f.w += grid.dt * f.v[1] * sitp(f.x[1])

end

function advectX!(f::DistributionParticles{Float64,1,2}, grid::Grid)
    xdisp = @. R(-grid.time[grid.index[1]])[1,1]* f.v[1] +  R(-grid.time[grid.index[1]])[1,2]* f.v[2]
     @. f.x[1] =mod(f.x[1] +  grid.dt *xdisp, grid.max[1])
end


function advectV!(f::DistributionParticles{Float64,1,2,fullF}, grid::Grid, e::VectorField)
    vdisp = map(i->R(grid.time[grid.index[1]])*[e.data[1][i],e.data[2][i]],1:length(grid.xaxes[1]))


    itp = interpolate([first.(vdisp);first.(vdisp)[1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp1 = scale(itp,0:grid.delta[1]:grid.max[1])

    itp = interpolate([last.(vdisp);last.(vdisp)[1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp2 = scale(itp,0:grid.delta[1]:grid.max[1])
    
     @. f.v[1] +=  grid.dt*sitp1(f.x[1])
     @. f.v[2] +=  grid.dt*sitp2(f.x[1])
end


function advectV!(f::DistributionParticles{Float64,1,2,deltaF}, grid::Grid, e::VectorField)
    vdisp = map(i->R(grid.time[grid.index[1]])*[e.data[1][i],e.data[2][i]],1:length(grid.xaxes[1]))


    itp = interpolate([first.(vdisp);first.(vdisp)[1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp1 = scale(itp,0:grid.delta[1]:grid.max[1])

    itp = interpolate([last.(vdisp);last.(vdisp)[1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp2 = scale(itp,0:grid.delta[1]:grid.max[1])
    
     @. f.v[1] +=  grid.dt*sitp1(f.x[1])
     @. f.v[2] +=  grid.dt*sitp2(f.x[1])

     @. f.w += grid.dt * f.v[1] * sitp1(f.x[1]) +  grid.dt * f.v[2] * sitp2(f.x[1])

end

