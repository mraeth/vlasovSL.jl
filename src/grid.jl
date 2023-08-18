struct Grid{T, IT, IntIT, ID}
    dt :: T
    xaxes :: Vector{IT}
    vaxes :: Vector{IT}
    max:: Vector{T}
    min:: Vector{T}
    delta :: Vector{T}
    time :: IT
    b0 :: T
    itime :: IntIT
    index :: Vector{Int}
end



abstract type Cart end
abstract type Polar end



const CartGrid{T,IT,IntIT} = Grid{T,IT,IntIT,Cart} 
const PolarGrid{T,IT,IntIT}   = Grid{T,IT,IntIT,Polar}

function Grid(etaMin::Vector{Float64}, etaMax::Vector{Float64}, delta::Vector{Float64}, dt::Float64, nt::Int64,nx::Int64, b0=1.0::Float64; type = Cart)

    if type == Cart

        return Grid{Float64,Vector{Float64}, Vector{Int}, Cart}(dt, 
                map(i-> etaMin[i]:delta[i]:(etaMax[i]-delta[i]),1:nx),
                map(i-> etaMin[i]:delta[i]:etaMax[i],nx+1:length(etaMin)), 
                etaMax, etaMin, delta, 0:dt:dt*nt, b0,1:nt, [1])
    else
        return Grid{Float64,Vector{Float64}, Vector{Int}, Polar}(dt, 
                map(i-> etaMin[i]:delta[i]:(etaMax[i]-delta[i]),1:nx),
                [0:delta[nx+1]:etaMax[nx+1], 0:delta[nx+2]:2pi-delta[nx+2]], 
                etaMax, etaMin, delta, 0:dt:dt*nt,b0, 1:nt, [1])
    end
end

outer_product(vs) =  .*([reshape(vs[d], (ntuple(Returns(1), d-1)..., :)) for d in 1:length(vs)]... )