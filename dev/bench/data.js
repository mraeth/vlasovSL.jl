window.BENCHMARK_DATA = {
  "lastUpdate": 1691071453680,
  "repoUrl": "https://github.com/mraeth/vlasovSL.jl",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "m.raeth@gmail.com",
            "name": "mraeth",
            "username": "mraeth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcdfeee0c52959d86eb420f98f73bde90f03a91e",
          "message": "Update and rename main.yml to Performance.yml",
          "timestamp": "2023-08-03T15:43:32+02:00",
          "tree_id": "c2f4f7ea9532f58f7a8a91163c64745fb23f73a2",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/fcdfeee0c52959d86eb420f98f73bde90f03a91e"
        },
        "date": 1691071453192,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 69994961,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 57594911,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040816\nallocs=114\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v",
            "value": 6305306766,
            "unit": "ns",
            "extra": "gctime=54241943\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v",
            "value": 11799774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4409745,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8353884,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v",
            "value": 10863705.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v",
            "value": 13300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6558669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 6693872,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v",
            "value": 2364869811,
            "unit": "ns",
            "extra": "gctime=95940020\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v",
            "value": 3747940,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4955936\nallocs=5931\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}