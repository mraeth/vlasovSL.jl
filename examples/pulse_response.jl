
using vlasovSL, Plots, ProgressBars, DSP, FFTW, SpecialFunctions, Polynomials, SpecialPolynomials, Calculus

println("Num Threads = ", Threads.nthreads())

Lx = 4pi;
nx = 32;

vmax = 4
nv = 32

Tfinal = 20
dt = 0.05
nt = convert(Int,Tfinal/dt)
epsilon = 0.0

grid = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1, 1;);

f = Distribution(grid, epsilon;);
p(t) = (exp(-10*(t-2)^2)*sinc(250*(t-2)))
amp = 1e-8*rand(length(grid.xaxes[1]))

sim = Simulation(f, grid)


function timeStep!(sim::Simulation)
     advectX!(sim.f, sim.grid, sim.grid.dt)
     compute_density!(sim.rho, sim.f, sim.grid)
     sim.phi.data .= amp*p(sim.grid.time[sim.grid.index[1]])
     compute_e!(sim.e, sim.phi, sim.grid)
    advectV!(sim.f, sim.grid, sim.grid.dt, sim.e)
    sim.grid.curr_time[1] += sim.grid.dt
end

for grid.index[1]= ProgressBar(grid.itime)
    timeStep!(sim)
    diagnostics(sim, grid.index[1])
end

ikx = 20
k = 2*pi/grid.max[1]*(ikx-1)
fftamp = (fft(amp))/32


dens_res(t,kx) = - exp(-2kx^2*sin(t/2)^2)kx^2 *sin(t)



function response(expo::Tuple, ko, kz)
    α(t) = √2/2* im* ko* sin(t)
    β(t) = -√2 *ko* im* sin(t/2)^2
    γ(t) = √2/2* im *kz *t

    H1(t) = basis(Hermite, expo[1])(α(t) * im)
    H2(t) = basis(Hermite, expo[2])(β(t) * im)
    H3(t) = basis(Hermite, expo[3])(γ(t) * im)
    θ(x) =  if(x>0) return 1; else return 0; end

    t-> θ(t)* Calculus.derivative(t->(im*pi/2)^sum(expo) * exp(α(t)^2+β(t)^2+γ(t)^2) * H1(t)*H2(t)*H3(t),t)
end

plot_list = []

for imom1 in 1:convert(Int,sqrt(length(sim.diag[3][1])))
    for imom2 in 1:convert(Int,sqrt(length(sim.diag[3][1])))

    index = (imom1-1)*convert(Int,sqrt(length(sim.diag[3][1]))) + imom2
    
    mom = [sim.diag[3][i][index].data[j] for i =1:nt, j=1:nx]
    norm(a) = a/maximum(abs.(a))
        p1 = plot()
    if (false )
        p1 = plot(sim.grid.time[2:end-1],norm(imag(fft(mom,2)[2:end,ikx]/fftamp[ikx])), xlims=(0,20), xlabel="t", title="∫v_x^"*string(imom1-1)*"v_y^"*string(imom2-1)*"fd³v", label = "Code")
        plot!(sim.grid.time,-norm(imag(response((imom1-1,imom2-1,0),k,0).(sim.grid.time.-2))), label = "Analytica")
    else
        p1 = plot(sim.grid.time[2:end-1],norm(real(fft(mom,2)[2:end,ikx]/fftamp[ikx])), xlims=(0,20), xlabel="t", title="∫v_x^"*string(imom1-1)*"v_y^"*string(imom2-1)*"d^3v")
        # plot!(sim.grid.time,norm(real(response((imom1-1,imom2-1,0),k,0).(sim.grid.time.-2))))
    end
    push!(plot_list,p1)

    end
end

plot(plot_list..., layout = size(sim.diag[3][1]),size=(800,800))

