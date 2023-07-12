struct scalarField
    data :: Array
end

struct VectorField
    data :: Array{Array}
end

function compute_density(f :: DistributionGrid, grid)
    rho = reshape(sum(f.data, dims =2)*grid.delta[2], size(f.data)[1])
    return scalarField(rho .- mean(rho))
end

function compute_density(f :: DistributionParticles,grid)
    hist=Hist1D(f.x,0:grid.delta[1]:grid.max[1]).sumw2
    return scalarField(hist/mean(hist).-1)
end


function compute_e(rho::scalarField,grid)
    return VectorField([real(ifft(-2pi/grid.max[1]*fftfreq(length(rho.data),length(rho.data)).*im.*fft(rho.data)))])
end


