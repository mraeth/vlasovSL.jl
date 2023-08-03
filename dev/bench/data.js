window.BENCHMARK_DATA = {
  "lastUpdate": 1691076507836,
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
      },
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
          "id": "0401cc80e35489310c5da387a174da0f139390ad",
          "message": "Update README.md",
          "timestamp": "2023-08-03T16:35:58+02:00",
          "tree_id": "21f29f3c183f6ab48479b9a74ed6cd67422db367",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/0401cc80e35489310c5da387a174da0f139390ad"
        },
        "date": 1691073869230,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 69805574.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 56615810,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040816\nallocs=114\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v",
            "value": 6436933019,
            "unit": "ns",
            "extra": "gctime=57009466\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v",
            "value": 12052747,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4322853,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8341702.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v",
            "value": 10600684,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v",
            "value": 13501,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6607883,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 6697788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v",
            "value": 2388819384,
            "unit": "ns",
            "extra": "gctime=98612395\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v",
            "value": 4019400.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4955936\nallocs=5931\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "d428bf6970d3f6f9509473d9d7cc894c772667ef",
          "message": "Update README.md",
          "timestamp": "2023-08-03T16:36:33+02:00",
          "tree_id": "a046a90cd5af77845419d6fa97e1bbea2ce88895",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/d428bf6970d3f6f9509473d9d7cc894c772667ef"
        },
        "date": 1691074027248,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 88041515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 65854235,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040816\nallocs=114\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v",
            "value": 9372792978,
            "unit": "ns",
            "extra": "gctime=80487045\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v",
            "value": 17561444.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 8598670,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 10193081,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v",
            "value": 10913185,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v",
            "value": 25100,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 9070971,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8936931,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v",
            "value": 3114732125.5,
            "unit": "ns",
            "extra": "gctime=132787380\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v",
            "value": 9581382,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4955936\nallocs=5931\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.raeth@ipp.mpg.de",
            "name": "Mario Raeth"
          },
          "committer": {
            "email": "mario.raeth@ipp.mpg.de",
            "name": "Mario Raeth"
          },
          "distinct": true,
          "id": "bda0ed3a333bfe03d98fb5095d8908890f567214",
          "message": "Reimplementation of new SL advector",
          "timestamp": "2023-08-03T17:18:34+02:00",
          "tree_id": "ff32e5b68ccd922e710d9051755d191a9587d39b",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/bda0ed3a333bfe03d98fb5095d8908890f567214"
        },
        "date": 1691076507376,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 70020175,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 57903691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040816\nallocs=114\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v",
            "value": 6259104897,
            "unit": "ns",
            "extra": "gctime=46117473\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v",
            "value": 11752453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4156269,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8354494,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v",
            "value": 10813740,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v",
            "value": 13601,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 8064384,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8375139,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v",
            "value": 2338624881,
            "unit": "ns",
            "extra": "gctime=86913529\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v",
            "value": 3870697.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4955936\nallocs=5931\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}