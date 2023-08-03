


function advectX!(f::AbstractDistributionParticles1d1v, grid::Grid)
      @. f.x = mod(f.x +  grid.dt*f.v, grid.max[1]-1e-5)
end


function advectV!(f::DistributionParticles1d1v, grid::Grid, shiftArray::Array{Float64,1})
    itp = interpolate([shiftArray; shiftArray[1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
     @. f.v += grid.dt * sitp(f.x)

end

function advectV!(f::DeltaDistributionParticles1d1v, grid::Grid, shiftArray::Array{Float64,1})
    itp = interpolate([shiftArray; shiftArray[1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp = scale(itp,0:grid.delta[1]:grid.max[1])
     @. f.v += grid.dt * sitp(f.x)
     @. f.w += grid.dt * f.v * sitp(f.x)

end

function advectX!(f::DistributionParticles1d2v, grid::Grid)
    xdisp = @. R(-grid.time[grid.index[1]])[1,1]* f.v[1] +  R(-grid.time[grid.index[1]])[1,2]* f.v[2]
     @. f.x =mod(f.x +  grid.dt *xdisp, grid.max[1])
end


function advectV!(f::DistributionParticles1d2v, grid::Grid, shiftArray::Array{Float64,1})
    vdisp =[R(grid.time[grid.index[1]])[1,1] .* shiftArray,  R(grid.time[grid.index[1]])[2,1] .* shiftArray]
    itp1 = interpolate([vdisp[1]; vdisp[1][1]], BSpline(Cubic(Periodic(OnGrid()))))
    itp2 = interpolate([vdisp[2]; vdisp[2][1]], BSpline(Cubic(Periodic(OnGrid()))))
    sitp1 = scale(itp1,0:grid.delta[1]:grid.max[1])
    sitp2 = scale(itp2,0:grid.delta[1]:grid.max[1])
     @. f.v[1] +=  grid.dt*sitp1(f.x)
     @. f.v[2] +=  grid.dt*sitp2(f.x)
end




