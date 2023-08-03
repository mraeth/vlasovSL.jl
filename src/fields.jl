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

function compute_density!(rho::ScalarField{Float64}, f :: DistributionGrid1d1v, grid::Grid)
    rho.data .= reshape(sum(f.data, dims =2)*grid.delta[2], size(f.data)[1])
     rho.data .= rho.data .- mean(rho.data)
    return rho
end



function compute_density!(rho::ScalarField{T}, f :: DistributionGrid1d2v, grid::Grid) where T
    rho.data .= reshape(sum(f.data, dims =(2,3))*grid.delta[2]*grid.delta[3], size(f.data)[1])
    return rho
end

function compute_density!(rho::ScalarField{T}, f :: DistributionParticles{Float64,1,1,fullF},grid::Grid) where T
    hist=Hist1D(f.x[1],0:grid.delta[1]:grid.max[1]).sumw2
    rho.data .= hist/mean(hist).-1 
    return rho
end

function compute_density!(rho::ScalarField{T}, f :: DistributionParticles{Float64,1},grid::Grid) where T
    @assert length(rho.data) == length(grid.xaxes[1])
    frac = 1/length(f.x[1])*length(grid.xaxes[1])
    idx = zeros(Int,length(f.x[1]))
    rho.data .= zero(T)
    @. idx = trunc(Int,f.x[1]/grid.delta[1])+1
    for i in eachindex(f.w) 
        rho.data[idx[i]] += f.w[i] *frac
    end
    rho.data .= rho.data .- mean(rho.data)
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
