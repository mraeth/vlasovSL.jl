# vlasovSL

![Build Status](https://github.com/mraeth/vlasovSL.jl/actions/workflows/CI.yml/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/mraeth/vlasovSL.jl/badge.svg?branch=main)](https://coveralls.io/github/mraeth/vlasovSL.jl?branch=main)


# vlasovSL.jl - Semi-Lagrangian Solver for the Vlasov Equation and PIC Solver

## Overview

vlasovSL.jl is a Julia project that provides a Semi-Lagrangian solver for the Vlasov equation, a partial differential equation used in plasma physics to model the evolution of a distribution function of charged particles in a plasma. Additionally, this project also includes a simple Particle-In-Cell (PIC) solver for verification of the simulation results.

The Semi-Lagrangian method is employed as a numerical technique to efficiently and accurately handle the advection of particles in phase space, making it well-suited for long-time simulations. The PIC solver, on the other hand, serves as a reference for comparing the results obtained from the Semi-Lagrangian solver.

## Requirements

To utilize vlasovSL.jl, make sure you have the following software installed:

- Julia (Version 1.6 or later)

## Installation

Follow these steps to set up the project:

1. Install Julia if you haven't already. You can download it from the official website: https://julialang.org/downloads/

2. Clone this repository to your local machine:

```bash
git clone https://github.com/your_username/vlasovSL.jl.git
```

3. Change the working directory to the project folder:

```bash
cd vlasovSL.jl
```

4. Install the required Julia packages by running the following command in the Julia REPL:

```julia
using Pkg
Pkg.activate(".")
Pkg.instantiate()
```

## Contributing

Contributions to vlasovSL.jl are welcome! If you'd like to contribute, fork the repository, make your changes, and submit a pull request. Please ensure your code adheres to the project's coding style and passes all tests.

## License

This project is licensed under the MIT License. Refer to the `LICENSE` file for more details.

## Contact

For any questions or suggestions regarding this project, please feel free to contact us!

Happy simulating!
