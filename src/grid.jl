struct Grid
    dt :: Float64
    xaxes :: Vector{AbstractRange}
    vaxes :: Vector{AbstractRange}
    max:: Vector
    min:: Vector
    delta :: Vector

end




function Grid(etaMin::Vector{Float64}, etaMax::Vector{Float64}, deta::Vector{Float64}, dt::Float64, nx::Int64)
    return Grid(dt, map(i-> etaMin[i]:deta[i]:(etaMax[i]-deta[i]),1:nx),map(i-> etaMin[i]:deta[i]:etaMax[i],nx+1:length(etaMin)), etaMax, etaMin, deta )
end
