using vlasovSL
using Test


function testAdvection1D()
    x=0:0.1:(10-0.1)
    f = sin.(x/10*2pi)
    f2 = sin.(x/10*2pi .- 1)
    return maximum(vlasovSL.advect1D(f,1)-f2)
end

function testComputeE(k0)

    Lx = 2pi
    nx = 64
    grid = vlasovSL.simulationData([0.,-3.],[Lx,3.],[Lx/nx,0.05],0.05,1)
    f = sin.(k0*grid.xaxes[1])

    ecom = k0*cos.(k0*grid.xaxes[1])

    return maximum(ecom - vlasovSL.compute_e(f,grid).data[1])

end
@testset "vlasovSL.jl" begin
    @test testAdvection1D() < 1e-14

    for k0 = 0:10
        @test testComputeE(k0)<1e-12
    end
end


