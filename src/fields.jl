struct ScalarField{DT}
    data :: Vector{DT}

    function ScalarField(data::Vector{DT}) where DT
        return new{DT}(data)
    end
end

struct VectorField{DT}
    data :: Vector{Vector{DT}}

    function VectorField(data::Vector{Vector{DT}}) where DT
        return new{DT}(data)
    end
end

function compute_density!(rho::ScalarField{T}, f :: DistributionGrid, grid::Grid) where T
    dim = Tuple(i for i=length(grid.xaxes)+1:length(grid.xaxes)+length(grid.vaxes))
    dv = prod(grid.delta[1+length(grid.xaxes):end])
    rho.data .= reshape(sum(f.data, dims =dim)*dv, size(f.data)[1])
    return rho
end


function compute_density!(rho::ScalarField{T}, f ::DistributionParticles1d{T},grid::Grid) where {T}
    hist=Hist1D(f.x[1],0:grid.delta[1]:grid.max[1]).sumw2
    rho.data .= hist/mean(hist)
    return rho
end

function compute_density!(rho::ScalarField{T}, f :: DeltaDistributionParticles1d,grid::Grid) where T
    @assert length(rho.data) == length(grid.xaxes[1])
    frac = 1/length(f.x[1])*length(grid.xaxes[1])
    idx = zeros(Int,length(f.x[1]))
    rho.data .= zero(T)
    @. idx = trunc(Int,f.x[1]/grid.delta[1])+1
    for i in eachindex(f.w) 
        rho.data[idx[i]] += f.w[i] *frac
    end
    return rho
end

function poisson!(phi::ScalarField{T}, rho::ScalarField{T},grid::Grid) where T
    k2 = -2pi/grid.max[1]*fftfreq(length(rho.data),length(rho.data)).^2
    k2[1] = 1
    phi.data .= real(ifft(fft(rho.data)./k2))
    return phi
end

function adiabatic!(phi::ScalarField{T}, rho::ScalarField{T},grid::Grid) where T
    phi.data .= rho.data
    return phi
end


function compute_e!(e::VectorField{T}, rho::ScalarField{T},grid::Grid) where T
    e.data[1] .= real(ifft(-2pi/grid.max[1]*fftfreq(length(rho.data),length(rho.data)).*im.*fft(rho.data)))
    return e
end
