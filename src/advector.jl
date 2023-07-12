
function advect1D(data::Array{Float64,1}, shift)
    return  real(ifft(fft(data).*exp.(-shift*im.*sign.(fftfreq(size(data)[1])))))
end


function advectX!(f::DistributionGrid, grid::simulationData)
    for iv = 1:size(f.data)[2]
        fshift =  grid.dt*grid.vaxes[1][iv]/grid.max[1]*pi
        f.data[begin:end,iv] = advect1D(f.data[begin:end,iv],fshift)
    end
end

function advectX!(f::DistributionParticles, grid::simulationData)
    f.x .= mod.(f.x +  grid.dt.*f.v, grid.max[1])
end


function advectV!(f::DistributionGrid, grid::simulationData, shiftArray::Array{Float64,1})
    for ix = 1:size(f.data)[1]
        fshift = grid.dt*shiftArray[ix]/grid.max[2]*2pi/2
        f.data[ix,begin:end] = advect1D(f.data[ix,begin:end],fshift)
    end
end

function advectV!(f::DistributionParticles, grid::simulationData, shiftArray::Array{Float64,1})
    itp = interpolate([shiftArray; shiftArray[1]], BSpline(Quadratic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
    f.v .+ grid.dt * sitp.(f.x)

end






