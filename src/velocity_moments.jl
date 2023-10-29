
function compute_density!(rho::ScalarField{T}, f :: DistributionGrid, grid::CartGrid) where T
    dim = Tuple(i for i=length(grid.xaxes)+1:length(grid.xaxes)+length(grid.vaxes))
    dv = prod(grid.delta[1+length(grid.xaxes):end])
    rho.data .= reshape(sum(f.data, dims =dim)*dv, size(f.data)[1])
    return rho
end

function compute_moment!(exp::Tuple,rho::ScalarField{T}, f :: DistributionGrid, grid::CartGrid) where {T,N}
    fac = vlasovSL.outer_product([[ones(length(grid.xaxes[1]))];[grid.vaxes[i].^exp[i] for i = 1:length(exp)]])
    dim = Tuple(i for i=length(grid.xaxes)+1:length(grid.xaxes)+length(grid.vaxes))
    dv = prod(grid.delta[1+length(grid.xaxes):end])
    rho.data .= reshape(sum(f.data.*fac, dims =dim)*dv, size(f.data)[1])
    return rho
end


function compute_moment!(exp::Tuple,rho::ScalarField{T}, f :: DistributionParticles, grid::CartGrid) where {T,N}
    @assert length(rho.data) == length(grid.xaxes[1])
    frac = 1/length(f.x[1])*length(grid.xaxes[1])
    idx = zeros(Int,length(f.x[1]))
    rho.data .= zero(T)
    @. idx = trunc(Int,f.x[1]/grid.delta[1])+1
    for i in eachindex(f.w) 
        rho.data[idx[i]] += f.w[i] *frac *prod([v[i]^exp[iv] for (iv,v) in enumerate(f.v)])
    end
    return rho
end


function compute_density!(rho::ScalarField{T}, f :: DistributionGrid, grid::PolarGrid) where T
    dim = Tuple(i for i=length(grid.xaxes)+1:length(grid.xaxes)+length(grid.vaxes))
    dv = prod(grid.delta[1+length(grid.xaxes):end]) * outer_product((ones(length(grid.xaxes[1])),grid.vaxes[1],ones(length(grid.vaxes[2]))))
    rho.data .= reshape(sum(f.data.*dv, dims =dim), size(f.data)[1])
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
