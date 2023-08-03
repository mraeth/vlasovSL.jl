using vlasovSL
using Test

function testComputeDensity()
    Lx = 4pi;
    nx = 32;
    vmax = 6;
    nv = 32;
    epsilon = 0.3

    grid = vlasovSL.Grid([0.,-vmax],[Lx,vmax],[Lx/nx,2*vmax/nv],0.05,100,1);
    f = vlasovSL.Distribution(grid,epsilon);

    rho = vlasovSL.ScalarField(zeros(nx))
    rho.data .= vlasovSL.compute_density!(rho, f, grid).data
    fct_sp(x) =epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ) 
    fcomp = zeros(nx)
    for ix=1:nx
        fcomp[ix] = fct_sp(grid.xaxes[1][ix])
    end
    return  maximum(@.abs(rho.data - fcomp))
end

function testComputeE(k0)
    Lx = 2pi
    nx = 64
    grid = vlasovSL.Grid([0.,-3.],[Lx,3.],[Lx/nx,0.05],0.05,100,1)
    e = vlasovSL.VectorField([zeros(nx)])
    rho = vlasovSL.ScalarField(sin.(k0*grid.xaxes[1]))
    ecom = -k0*cos.(k0*grid.xaxes[1])
    return  maximum((ecom - vlasovSL.compute_e!(e,rho,grid).data[1]))
end

function testPoisson(k0)
    Lx = 2pi
    nx = 64
    grid = vlasovSL.Grid([0.,-3.],[Lx,3.],[Lx/nx,0.05],0.05,100,1)
    phi = vlasovSL.ScalarField(zeros(nx))
    rho = vlasovSL.ScalarField(sin.(k0*grid.xaxes[1]))
    phicom = -sin.(k0*grid.xaxes[1])
    return  maximum((phicom - vlasovSL.poisson!(phi,rho,grid).data.*k0^2))
end

function testAdiabatic(k0)
    Lx = 2pi
    nx = 64
    grid = vlasovSL.Grid([0.,-3.],[Lx,3.],[Lx/nx,0.05],0.05,100,1)
    phi = vlasovSL.ScalarField(zeros(nx))
    rho = vlasovSL.ScalarField(sin.(k0*grid.xaxes[1]))
    phicom = sin.(k0*grid.xaxes[1])
    return  maximum((phicom - vlasovSL.adiabatic!(phi,rho,grid).data))
end



function testxAdvectorSL(advector)
    Lx = 4pi;
    nx = 32;
    vmax = 6;
    nv = 32;
    epsilon = 0.3
    grid = vlasovSL.Grid([0.,-vmax],[Lx,vmax],[Lx/nx,2*vmax/nv],0.05,100,1);

    f = vlasovSL.Distribution(grid,epsilon);
    vlasovSL.advectX!(f,grid, advector)

    fct_sp(x) =1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ) 
    fct_v(v) = exp(-v^2 / 2) / sqrt(2*pi)
    fcomp = zeros(nx,nv+1)
    for ix=1:nx
        for iv=1:nv+1
            fcomp[ix,iv] = fct_sp(grid.xaxes[1][ix]-grid.dt*grid.vaxes[1][iv]) * fct_v(grid.vaxes[1][iv])
        end
    end
    return  maximum(@.abs(f.data - fcomp))
end



function testvAdvectorSL(avector)
    Lx = 4pi;
    nx = 32;
    vmax = 6;
    nv = 32;
    epsilon = 0.3
    grid = vlasovSL.Grid([0.,-vmax],[Lx,vmax],[Lx/nx,2*vmax/nv],0.05,100,1);

    f = vlasovSL.Distribution(grid,epsilon);
    rho = vlasovSL.compute_density(f, grid)
    e = vlasovSL.compute_e(rho, grid)
    vlasovSL.advectV!(f,grid,e.data[1], avector)


    fct_sp(x) =1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ) 
    fct_v(v) = exp(-v^2 / 2) / sqrt(2*pi)
    fcomp = zeros(nx,nv+1)
    for ix=1:nx
        for iv=1:nv+1
            fcomp[ix,iv] = fct_sp(grid.xaxes[1][ix]) * fct_v(grid.vaxes[1][iv]-grid.dt*e.data[1][ix])
        end
    end



    return  maximum(@.abs(f.data - fcomp))
end




@testset "vlasovSL.jl" begin
    @test testxAdvectorSL(vlasovSL.advect1Dspline!) < 1e-2
    @test testxAdvectorSL(vlasovSL.advect1DFourier!) < 1e-13
    @test testxAdvectorSL(vlasovSL.advect1Dspline!) < 1e-2
    @test testxAdvectorSL(vlasovSL.advect1DFourier!) < 1e-13

    for k0 = 0:10
        @test testComputeE(k0)<1e-12
        @test testPoisson(k0)<1e-12
        @test testAdiabatic(k0)<1e-12
    end
    @test testComputeDensity()<1e-9


end


