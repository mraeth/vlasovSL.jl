


function advectX!(f::DistributionParticles, grid::Grid)
    @. f.x = mod(f.x +  grid.dt*f.v, grid.max[1])
end


function advectV!(f::DistributionParticles, grid::Grid, shiftArray::Array{Float64,1})
    itp = interpolate([shiftArray; shiftArray[1]], BSpline(Quadratic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
    @. f.v += grid.dt * sitp(f.x)

end


