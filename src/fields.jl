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

function poisson!(phi::ScalarField{T}, rho::ScalarField{T},grid::Grid) where T
    k2 = -2pi/grid.max[1]*fftfreq(length(rho.data),length(rho.data)).^2
    k2[1] = 1
    phi.data .= -real(ifft(fft(rho.data)./k2))
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
