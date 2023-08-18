

function R(omega)
    return [[cos(omega) ,sin(omega)] [-sin(omega), cos(omega)]]
end



function advect1DFourier!(data::AbstractArray{Float64,1}, shift::Float64, grid::Grid)
    sshift = 2pi * shift .* fftfreq(size(data)[1])
    data .= real(ifft(fft(data) .* exp.(-sshift .* im)))
end


function advect1DFourier!(data::AbstractArray{Float64,1}, shift::AbstractArray{Float64,1}, grid::Grid)
    k = fftfreq(length(data))*2pi
    ff = fft(data)
    data .= real(ff'exp.(-vlasovSL.outer_product((k,(0:length(data)-1).-shift))*im))'/length(data)
end

function advect1Dspline!(data::AbstractArray{Float64,1}, shift, grid::Grid)
    itp = interpolate([[data[end]]; data; [data[begin]]], BSpline(Quadratic(Periodic(OnGrid()))))
    sitp = scale(itp, 0:length(data)+1)
    data = sitp((1:length(data)) .- shift)
end

function advectX!(f::DistributionGrid1d1v, grid::Grid)
    ff = fft(f.data,1)
    sshift =grid.dt / grid.delta[1]*2pi  .* outer_product([fftfreq(size(f.data)[1]),grid.vaxes[1]])
    f.data .= real(ifft(ff.*exp.(-sshift .* im),1))
end

function advectX!(f::DistributionGrid1d2v{DT,Cart}, grid::Grid, advector=advect1DFourier!) where DT
    xdisp = @. R(-grid.b0*grid.time[grid.index[1]])[1,1]* grid.vaxes[1] +  R(-grid.b0*grid.time[grid.index[1]])[1,2]*  grid.vaxes[2]
    for iv1 = 1:size(f.data)[2]
        for iv2 = 1:size(f.data)[3]
            xdisp = R(-grid.b0*grid.time[grid.index[1]])[1,1]* grid.vaxes[1][iv1] +  R(-grid.b0*grid.time[grid.index[1]])[1,2]*  grid.vaxes[2][iv2]
            fshift =  grid.dt * xdisp/ grid.delta[1]
            advector(view(f.data, :,iv1, iv2), fshift, grid)
        end
    end
end

function advectX!(f::DistributionGrid1d2v{DT,Polar}, grid::PolarGrid, advector=advect1DFourier!) where DT
    for iv1 = 2 :size(f.data)[2]
        for iv2 = 1:size(f.data)[3]
            xdisp = grid.vaxes[1][iv1] * cos(grid.vaxes[2][iv2] + grid.b0 * grid.time[grid.index[1]])
            fshift =  grid.dt * xdisp/ grid.delta[1]
            advector(view(f.data, :,iv1, iv2), fshift, grid)
        end
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

function advectV!(f::DistributionGrid1d2v, grid::CartGrid, e::VectorField, advector=advect1DFourier!)
    vdisp = map(i->R(grid.b0*grid.time[grid.index[1]])*[e.data[1][i],e.data[2][i]],1:length(grid.xaxes[1]))
    ff = fft(f.data,(2,3))

    Threads.@threads for ix = 1:size(ff)[1] 
        sshift = outer_product((exp.(-im *grid.dt * first.(vdisp)[ix] / grid.delta[2]*2pi  .* fftfreq(size(f.data)[2])) ,exp.(-im* grid.dt * last.(vdisp)[ix] / grid.delta[2]*2pi  .* fftfreq(size(f.data)[3]))))
         @. ff[ix,:,:]*=sshift
    end 
    f.data .= real(ifft(ff,(2,3)))

end

function advectV!(f::DistributionGrid1d2v, grid::PolarGrid{T,IT,IntIT}, e::VectorField) where {T,IT,IntIT}
    ff = fft(f.data,2)
    k = fftfreq(size(f.data)[2])*2pi

for ix = 1:size(ff)[1] for iv2 = 1:size(ff)[3]
        M = outer_product((k,grid.vaxes[1] .- grid.dt*cos(grid.vaxes[2][iv2])*e.data[1][ix]))
        shift = M/ grid.delta[2]
        f.data[ix,:,iv2] .= real(ff[ix,:,iv2]'exp.(-shift*im))'/length(k)
    end end
    ff = fft(f.data,3)
    k  = fftfreq(size(f.data)[3])*2pi
    ivper = 1 ./ copy(grid.vaxes[1])
    ivper[1] = 0

    for ix = 1:size(ff)[1] for iv1 = 1:size(ff)[2]
        M = outer_product((k,grid.vaxes[2] .+ grid.dt*sin.(grid.vaxes[2])*e.data[1][ix]*ivper[iv1]))
        shift = M/ grid.delta[3]
        f.data[ix,iv1,:] .= real(ff[ix,iv1,:]'exp.(-shift*im))'/length(k)
    end end

end
