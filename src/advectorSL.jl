

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


function advectX!(f::DistributionGrid1d1v, grid::Grid, advector)
    Threads.@threads for iv = 1:size(f.data)[2]
        fshift = grid.dt * grid.vaxes[1][iv] / grid.delta[1]
        advector(view(f.data, :, iv), fshift, grid)
    end
end


function advectX!(f::DistributionGrid1d1v, grid::Grid)
    ff = fft(f.data,1)
    sshift =grid.dt / grid.delta[1]*2pi  .* outer_product([fftfreq(size(f.data)[1]),grid.vaxes[1]])
    f.data .= real(ifft(ff.*exp.(-sshift .* im),1))
end



function advectX!(f::DistributionGrid1d2v, grid::Grid, advector=advect1DFourier!)
    xdisp = @. R(-grid.time[grid.index[1]])[1,1]* grid.vaxes[1] +  R(-grid.time[grid.index[1]])[1,2]*  grid.vaxes[2]
    for iv1 = 1:size(f.data)[2]
        for iv2 = 1:size(f.data)[3]
            xdisp = R(-grid.time[grid.index[1]])[1,1]* grid.vaxes[1][iv1] +  R(-grid.time[grid.index[1]])[1,2]*  grid.vaxes[2][iv2]
             fshift =  grid.dt * xdisp/ grid.delta[1]
            advector(view(f.data, :,iv1, iv2), fshift, grid)
        end
    end
end


function advectX2!(f::DistributionGrid1d2v, grid::Grid, advector=advect1DFourier!)
    xdisp = map(i->R(-grid.time[grid.index[1]])*[ grid.vaxes[1][i] ,  grid.vaxes[2][i]] , 1:length(grid.vaxes[1]))

    ff = fft(f.data,1)
    sshift =grid.dt / grid.delta[1]*2pi  .* outer_product([fftfreq(size(f.data)[1]),xdisp, ones(size(f.data)[3])])
    f.data .= real(ifft(ff.*exp.(-sshift .* im),1))

end


function advectV2!(f::DistributionGrid1d1v, grid::Grid, shiftArray::Array{Float64,1}, advector=advect1DFourier!)
    Threads.@threads for ix = 1:size(f.data)[1]
        fshift = grid.dt * shiftArray[ix] / grid.delta[2]
        advector(view(f.data, ix, :), fshift, grid)
    end
end




function advectV!(f::DistributionGrid1d1v, grid::Grid, e::VectorField, advector=advect1DFourier!)
    ff = fft(f.data,2)
    for ix = 1:size(ff)[1]
        sshift = grid.dt * e.data[1][ix] / grid.delta[2]*2pi  .* fftfreq(size(f.data)[2])
         @. ff[ix,:]*=exp.(-sshift .* im)
    end
    f.data .= real(ifft(ff,2))
end


function advectV2!(f::DistributionGrid1d2v, grid::Grid, e::VectorField, advector=advect1DFourier!)
    vdisp = map(i->R(grid.time[grid.index[1]])*[e.data[1][i],e.data[2][i]],1:length(grid.xaxes[1]))
    for iv1 = 1:size(f.data)[2]
        advectV!(DistributionGrid1d1v(view(f.data,:,iv1,:)), grid, first.(vdisp), advector)
    end

    for iv2 = 1:size(f.data)[3]
        advectV!(DistributionGrid1d1v(view(f.data,:,:,iv2)), grid, last.(vdisp), advector)
    end

end


function advectV!(f::DistributionGrid1d2v, grid::Grid, e::VectorField, advector=advect1DFourier!)
    vdisp = map(i->R(grid.time[grid.index[1]])*[e.data[1][i],e.data[2][i]],1:length(grid.xaxes[1]))
    ff = fft(f.data,2)

    Threads.@threads for ix = 1:size(ff)[1] for iv2 = 1:size(ff)[3]
        sshift = grid.dt * first.(vdisp)[ix] / grid.delta[2]*2pi  .* fftfreq(size(f.data)[2])
         @. ff[ix,:,iv2]*=exp.(-sshift .* im)
    end end
    f.data .= real(ifft(ff,2))
    ff = fft(f.data,3)

    Threads.@threads for ix = 1:size(ff)[1] for iv1 = 1:size(ff)[2]
        sshift = grid.dt * last.(vdisp)[ix] / grid.delta[2]*2pi  .* fftfreq(size(f.data)[3])
         @. ff[ix,iv1,:]*=exp.(-sshift .* im)
    end end
    f.data .= real(ifft(ff,3))

end


