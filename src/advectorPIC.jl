
function fourierInterpolation(f::Vector{CDT},x::DT) where {CDT,DT}
    k = fftfreq(length(f))*length(f)
    real(f'exp.(x/(2pi)*pi*im * k)/length(f))
end


function advectX!(f::DistributionParticles{T,1,1}, grid::Grid) where T
        @. f.x[1] =  mod(f.x[1]+  grid.dt*f.v[1], grid.max[1]-1e-5)
end


function advectV!(f::DistributionParticles{T,1,1,fullF}, grid::Grid, e::VectorField) where T
    sitp(x::Float64) = fourierInterpolation(fft(e.data[1]),x)
     @. f.v[1] += grid.dt * sitp(f.x[1])

end

function advectV!(f::DistributionParticles{T,1,1,deltaF}, grid::Grid, e::VectorField) where T
    sitp(x) = fourierInterpolation(fft(e.data[1]),x)
     @. f.v[1] += grid.dt * sitp.(f.x[1])
     @. f.w += grid.dt * f.v[1] * sitp(f.x[1])

end

function advectX!(f::DistributionParticles{Float64,1,2}, grid::Grid)
    xdisp = @. R(-grid.time[grid.index[1]])[1,1]* f.v[1] +  R(-grid.time[grid.index[1]])[1,2]* f.v[2]
     @. f.x[1] =mod(f.x[1] +  grid.dt *xdisp, grid.max[1])
end


function advectV!(f::DistributionParticles{Float64,1,2,fullF}, grid::Grid, e::VectorField)
    vdisp = map(i->R(grid.time[grid.index[1]])*[e.data[1][i],e.data[2][i]],1:length(grid.xaxes[1]))


    sitp1(x) = fourierInterpolation(fft(fist.(vdisp)),x)
    sitp2(x) = fourierInterpolation(fft(fist.(vdisp)),x)
    
     @. f.v[1] +=  grid.dt*sitp1(f.x[1])
     @. f.v[2] +=  grid.dt*sitp2(f.x[1])
end




