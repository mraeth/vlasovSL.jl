struct Grid{T, IT, IntIT}
    dt :: T
    xaxes :: Vector{IT}
    vaxes :: Vector{IT}
    max:: Vector{T}
    min:: Vector{T}
    delta :: Vector{T}
    time :: IT
    itime :: IntIT
    index :: Vector{Int}
end

function Grid(etaMin::Vector{Float64}, etaMax::Vector{Float64}, deta::Vector{Float64}, dt::Float64, nt::Int64,nx::Int64)
    return Grid(dt, 
            map(i-> etaMin[i]:deta[i]:(etaMax[i]-deta[i]),1:nx),
            map(i-> etaMin[i]:deta[i]:etaMax[i],nx+1:length(etaMin)), 
            etaMax, etaMin, deta, 0:dt:dt*nt, 1:nt, [1])
end
