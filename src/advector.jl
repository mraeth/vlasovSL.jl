

function advect1DFourier(data::Array{Float64,1}, shift, grid::Grid)
    sshift = 2pi * shift .* fftfreq(size(data)[1])
    return   real(ifft(fft(data) .*exp.(-sshift.*im)))
end


function advect1Dspline(data::Array{Float64,1}, shift, grid::Grid)
    itp = interpolate([[data[end]];data; [data[begin]]], BSpline(Quadratic(Periodic(OnGrid()))))
    sitp = scale(itp,0:length(data)+1)
    return  sitp((1:length(data)).-shift)
end




function advectX!(f::DistributionGrid, grid::Grid)
    for iv = 1:size(f.data)[2]
        fshift =  grid.dt*grid.vaxes[1][iv]/grid.delta[1]
        f.data[begin:end,iv] = advect1DFourier(f.data[begin:end,iv],fshift,grid)
    end
end

function advectX!(f::DistributionGrid, grid::Grid, func)
    for iv = 1:size(f.data)[2]
        fshift =  grid.dt*grid.vaxes[1][iv]/grid.delta[1]
        f.data[begin:end,iv] = func(f.data[begin:end,iv],fshift,grid)
    end
end

function advectX!(f::DistributionParticles, grid::Grid)
    @. f.x = mod(f.x +  grid.dt*f.v, grid.max[1])
end


function advectV!(f::DistributionGrid, grid::Grid, shiftArray::Array{Float64,1})
    for ix = 1:size(f.data)[1]
        fshift = grid.dt*shiftArray[ix]/grid.delta[2]
        f.data[ix,begin:end] = advect1DFourier(f.data[ix,begin:end],fshift,grid)
    end
end

function advectV!(f::DistributionGrid, grid::Grid, shiftArray::Array{Float64,1}, funct)
    for ix = 1:size(f.data)[1]
        fshift = grid.dt*shiftArray[ix]/grid.delta[2]
        f.data[ix,begin:end] = funct(f.data[ix,begin:end],fshift,grid)
    end
end

function advectV!(f::DistributionParticles, grid::Grid, shiftArray::Array{Float64,1})
    itp = interpolate([shiftArray; shiftArray[1]], BSpline(Quadratic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
    @. f.v += grid.dt * sitp(f.x)

end






