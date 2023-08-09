using vlasovSL, BenchmarkTools, Test

println("Num Threads = ", Threads.nthreads())

Lx = 4pi;
nx = 256;

vmax = 4;
nv = 256

nt = 5000
dt = 0.05

epsilon = 0.3   

grid1d1v = Grid([0.0, -vmax], [Lx, vmax], [Lx / nx, 2 * vmax / nv], dt, nt, 1);
grid1d2v = Grid([0.,-vmax,-vmax],[Lx,vmax,vmax],[Lx/nx,2*vmax/nv, 2*vmax/nv],dt,nt,1);


initFuncx(x)= (1 .+ epsilon * cos(2pi/(grid.xaxes[1][end]+grid.delta[1])*x ))
initFuncv(v)= exp(-(v+1.5)^2 / 2) / sqrt(2*pi)+ exp(-(v-1.5)^2 / 2) / sqrt(2*pi)
initFuncv(v) = (v-> v^2*exp(-v^2 / 2) / sqrt(2*pi))

f1d1v = Distribution(grid1d1v, epsilon; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));
fp1d1vDelta = DeltaDistribution(grid1d1v, epsilon, 1000000; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));
fp1d1vFull = Distribution(grid1d1v, epsilon, 1000000; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));

f1d2v = Distribution(grid1d2v, epsilon; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));
fp1d2vDelta = DeltaDistribution(grid1d2v, epsilon, 1000000; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));
fp1d2vFull = Distribution(grid1d2v, epsilon, 1000000; initFuncv=(v-> v^2*exp(-v^2 / 2) / sqrt(2*pi)));

fs = [(f1d1v,grid1d1v), (f1d2v,grid1d2v), (fp1d1vDelta,grid1d1v), (fp1d1vFull,grid1d1v)]
#, (fp1d2vDelta,grid1d2v), (fp1d2vFull,grid1d2v)];


suite = BenchmarkGroup()
suite["AdvectX"] = BenchmarkGroup()
suite["AdvectV"] = BenchmarkGroup()
suite["computeRho"] = BenchmarkGroup()
rho1d1v = ScalarField(zeros(nx))
e = VectorField([ones(nx)])

for f in fs
    suite["AdvectX"][string(typeof(f[1]))] = @benchmarkable advectX!($f[1], $f[2])
    suite["AdvectV"][string(typeof(f[1]))] = @benchmarkable advectV!($f[1], $f[2], $e)
    suite["computeRho"][string(typeof(f[1]))] = @benchmarkable compute_density!($rho1d1v, $f[1], $f[2])
end

tune!(suite)
results = run(suite, verbose = true)
BenchmarkTools.save("output.json", median(results))




for f in fs 
    print("Performance Advect x for ")
    print(typeof(f[1]), ": ")
    println(@elapsed advectX!(f[1], f[2])) end

println()
for f in fs
    print("Performance Compute Density for ")
    print(typeof(f[1]), ": ")
    println(@elapsed compute_density!(rho1d1v, f[1], f[2])) end

println()
for f in fs
    print("Performance Advect v for ")
    print(typeof(f[1]), ": ")
    println(@elapsed advectV!(f[1], f[2], e)) end