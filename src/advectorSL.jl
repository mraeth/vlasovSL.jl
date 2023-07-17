

function R(omega)
    return [[cos(omega) ,sin(omega)] [-sin(omega), cos(omega)]]
end

function advect1DFourier!(data::AbstractArray{Float64,1}, shift, grid::Grid)
    sshift = 2pi * shift .* fftfreq(size(data)[1])
    data .= real(ifft(fft(data) .* exp.(-sshift .* im)))
end


function advect1Dspline!(data::AbstractArray{Float64,1}, shift, grid::Grid)
    itp = interpolate([[data[end]]; data; [data[begin]]], BSpline(Quadratic(Periodic(OnGrid()))))
    sitp = scale(itp, 0:length(data)+1)
    data = sitp((1:length(data)) .- shift)
end


function advectX!(f::DistributionGrid1d1v, grid::Grid, advector=advect1DFourier!)
    for iv = 1:size(f.data)[2]
        fshift = grid.dt * grid.vaxes[1][iv] / grid.delta[1]
        advector(view(f.data, :, iv), fshift, grid)
    end
end


function advectX!(f::DistributionGrid1d2v, grid::Grid, advector=advect1DFourier!)
    xdisp = map(i->R(-grid.time[grid.index[1]])*[ grid.dt * grid.vaxes[1][i] / grid.delta[1],  grid.dt * grid.vaxes[2][i] / grid.delta[1]] , 1:length(grid.vaxes[1]))
    for iv1 = 1:size(f.data)[2]
        for iv2 = 1:size(f.data)[3]
            fshift = grid.dt * first.(xdisp)[iv1] / grid.delta[1]
            advector(view(f.data, :,iv1, iv2), fshift, grid)
        end
    end
end


function advectV!(f::DistributionGrid1d1v, grid::Grid, shiftArray::Array{Float64,1}, advector=advect1DFourier!)
    for ix = 1:size(f.data)[1]
        fshift = grid.dt * shiftArray[ix] / grid.delta[2]
        advector(view(f.data, ix, :), fshift, grid)
    end
end

function advectV!(f::DistributionGrid1d2v, grid::Grid, shiftArray::Array{Float64,1}, advector=advect1DFourier!)
    vdisp = map(i->R(grid.time[grid.index[1]])*[grid.dt*shiftArray[i]/grid.delta[2],0],1:length(shiftArray))
    for iv1 = 1:size(f.data)[2]
        advectV!(DistributionGrid1d1v(view(f.data,:,iv1,:)), grid, first.(vdisp), advector)
    end

    for iv2 = 1:size(f.data)[3]
        advectV!(DistributionGrid1d1v(view(f.data,:,:,iv2)), grid, first.(vdisp), advector)
    end

end


