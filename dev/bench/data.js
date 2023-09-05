window.BENCHMARK_DATA = {
  "lastUpdate": 1693905339712,
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
          "id": "9af96cc92edc18a47a02a78943bca39e6cb24649",
          "message": "Perf test for old advector",
          "timestamp": "2023-08-03T17:18:05+02:00",
          "tree_id": "7915ca3cea3e270500b6bebd61afcedb89ee8ad9",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/9af96cc92edc18a47a02a78943bca39e6cb24649"
        },
        "date": 1691076527326,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 69795580,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 56786219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040816\nallocs=114\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v",
            "value": 17311504823,
            "unit": "ns",
            "extra": "gctime=205605046\nmemory=2966390464\nallocs=2511661\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v",
            "value": 30903824,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5760288\nallocs=4877\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4378057,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8363542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v",
            "value": 10934820,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v",
            "value": 13500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6601942,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 6708909,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v",
            "value": 2384109008,
            "unit": "ns",
            "extra": "gctime=100401152\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v",
            "value": 7449019,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5684080\nallocs=4896\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "6c8d7180ea99eda25c4a8bf18f784df72010a707",
          "message": "Merge branch 'main' of https://github.com/mraeth/vlasovSL.jl",
          "timestamp": "2023-08-03T17:16:32+02:00",
          "tree_id": "ff32e5b68ccd922e710d9051755d191a9587d39b",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/6c8d7180ea99eda25c4a8bf18f784df72010a707"
        },
        "date": 1691076527391,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 79108268,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40544\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 63103164,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040688\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v",
            "value": 9525910619,
            "unit": "ns",
            "extra": "gctime=81093772\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v",
            "value": 17907037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 5160066,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 9700132,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v",
            "value": 16503749,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v",
            "value": 29200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 8606326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8833232,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v",
            "value": 3469215443,
            "unit": "ns",
            "extra": "gctime=143021295\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v",
            "value": 5580214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4955936\nallocs=5931\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "committer": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "distinct": true,
          "id": "16a3e2a5163d1dba47e79e81c84994c42bbb1f9b",
          "message": "Remove 1d2v Deltaf PIC from performance test",
          "timestamp": "2023-08-07T16:03:07+02:00",
          "tree_id": "6747eaf8a6006643b761b8b49b6b541630cc021b",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/16a3e2a5163d1dba47e79e81c84994c42bbb1f9b"
        },
        "date": 1691417584298,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 83663188.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 68908889,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040816\nallocs=114\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 7433593833,
            "unit": "ns",
            "extra": "gctime=51530225\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 13860567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4991110.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 10037719,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 11081328.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 16600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 7769487,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 7879087,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 2832333898.5,
            "unit": "ns",
            "extra": "gctime=95947314\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 3128638,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6318256\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "committer": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "distinct": true,
          "id": "066379f89b3ec033b9e3fe651f9ceb86c92e88c7",
          "message": "Move outer_product to grid",
          "timestamp": "2023-08-07T16:22:00+02:00",
          "tree_id": "8ad248e45fc8181492692669b9b734e23cd117e8",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/066379f89b3ec033b9e3fe651f9ceb86c92e88c7"
        },
        "date": 1691418618050,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 64918925,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 64157185.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040816\nallocs=114\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 4666714762,
            "unit": "ns",
            "extra": "gctime=38802664\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 8673371,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 3564645.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 7338972.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 9783212.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 13400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6398674,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 6500474,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 2115983305,
            "unit": "ns",
            "extra": "gctime=79137378\nmemory=1618070192\nallocs=1653284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 2679589.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6318256\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "committer": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "distinct": true,
          "id": "db754a012d8f284a7e7315b58a364a10abe61e8c",
          "message": "Speedup 1d2v X advection for Grid Distribution",
          "timestamp": "2023-08-07T18:25:57+02:00",
          "tree_id": "c8f86a67f91a3ceedd26f31cb298aba3efdabbf7",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/db754a012d8f284a7e7315b58a364a10abe61e8c"
        },
        "date": 1691426193785,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 75565846,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40544\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 58559005,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24040688\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 9538658690,
            "unit": "ns",
            "extra": "gctime=72696797\nmemory=2546094720\nallocs=2908983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 17795714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950848\nallocs=5650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4997460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 9502110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 16931801,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6864\nallocs=15\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 26000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4592\nallocs=12\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 8355900,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8408401,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionGrid{Float64, 1, 2, 3}",
            "value": 1387786424,
            "unit": "ns",
            "extra": "gctime=17242306.5\nmemory=1623226000\nallocs=67\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionGrid{Float64, 1, 1, 2}",
            "value": 3619643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6318256\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "committer": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "distinct": true,
          "id": "b085ac9422d8dcd81f08a2105b412ee2b63dfa48",
          "message": "Fixed performance test",
          "timestamp": "2023-08-17T17:19:47+02:00",
          "tree_id": "148af765574ad1294de0c993fd8d7f9b4463c1df",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/b085ac9422d8dcd81f08a2105b412ee2b63dfa48"
        },
        "date": 1692286464428,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/DistributionGrid1d1v{Float64}",
            "value": 13909053,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4951008\nallocs=5653\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 84872701,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40544\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 41833757.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40544\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v{Float64}",
            "value": 8357130102,
            "unit": "ns",
            "extra": "gctime=63848707\nmemory=2794990384\nallocs=1581375\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v{Float64}",
            "value": 16901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4832\nallocs=17\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4937756,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 10004271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v{Float64}",
            "value": 10911085,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v{Float64}",
            "value": 3084622,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6318112\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 9535888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 10273241,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v{Float64}",
            "value": 3003727106,
            "unit": "ns",
            "extra": "gctime=110029832\nmemory=1518623856\nallocs=2510641\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "committer": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "distinct": true,
          "id": "4993ff795cfa37c26f00254b331dfa0717a764e1",
          "message": "Faster 1d2V advect v2 routine",
          "timestamp": "2023-08-17T17:37:25+02:00",
          "tree_id": "7c063510985b1a82c3297247ae2c48da1a511f27",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/4993ff795cfa37c26f00254b331dfa0717a764e1"
        },
        "date": 1692287220798,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 57632028,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40544\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 28409977,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40544\nallocs=102\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 15006481.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4951008\nallocs=5653\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 8251863636,
            "unit": "ns",
            "extra": "gctime=13589090\nmemory=1354234432\nallocs=8993\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 3911618.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 7524440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 24000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4832\nallocs=17\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 15491076,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6769546,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 7492640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 3129525,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6318112\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 2888643810.5,
            "unit": "ns",
            "extra": "gctime=122994357.5\nmemory=1518623856\nallocs=2510641\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "committer": {
            "email": "you@example.com",
            "name": "Your Name"
          },
          "distinct": true,
          "id": "373579f543fb5b154a14503022c3578cb76fdc77",
          "message": "Fixed advectV for 1d2V",
          "timestamp": "2023-08-17T17:57:10+02:00",
          "tree_id": "755b241568ee5c90fe11669e8b2cbc79492de0ab",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/373579f543fb5b154a14503022c3578cb76fdc77"
        },
        "date": 1692288321510,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 65802647,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 32965684,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 8846707,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4951008\nallocs=5653\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 3392146075,
            "unit": "ns",
            "extra": "gctime=9614807.5\nmemory=1491577408\nallocs=7201\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 3530392,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 7330606,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 13400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4832\nallocs=17\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 9555460.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6421857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 7175605.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 2604202,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6318112\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 2051787738,
            "unit": "ns",
            "extra": "gctime=79985159\nmemory=1518623856\nallocs=2510641\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "c1f4eadbc21470ee8d8ace6730d284215006b55b",
          "message": "First attempt of polar v grid",
          "timestamp": "2023-08-18T15:58:22+02:00",
          "tree_id": "1fb719b969b7715e13a4be68728a24ac9d4caeab",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/c1f4eadbc21470ee8d8ace6730d284215006b55b"
        },
        "date": 1692367753449,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 70128434,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 34889548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 12685141,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950976\nallocs=5653\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 5074772519,
            "unit": "ns",
            "extra": "gctime=13379839\nmemory=1491577216\nallocs=7201\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4477512,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8341421,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 15200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4832\nallocs=17\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 10940127,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6577167.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8698523,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 2727807,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6317888\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 2374680308,
            "unit": "ns",
            "extra": "gctime=114132301\nmemory=1508058256\nallocs=2378544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "807a48ba7df654003849d7bf414c058ce9d7ecc6",
          "message": "Fixed Polar Advect X",
          "timestamp": "2023-08-18T17:41:20+02:00",
          "tree_id": "aebdb364460f76f77ae35c8a0336c1fe3fc8640b",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/807a48ba7df654003849d7bf414c058ce9d7ecc6"
        },
        "date": 1692373950742,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 78388760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 38261817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40672\nallocs=108\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 13544384,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950976\nallocs=5653\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 5618654284,
            "unit": "ns",
            "extra": "gctime=12288267\nmemory=1491577216\nallocs=7201\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 4524061.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 9580031,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 15100,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4832\nallocs=17\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 10980650,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 9261726,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8204312,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 3139392.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6317888\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 2686580175,
            "unit": "ns",
            "extra": "gctime=111428105.5\nmemory=1508058256\nallocs=2378544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mraeth@NB-SD-01.ipp.mpg.de",
            "name": "Mario"
          },
          "committer": {
            "email": "mraeth@NB-SD-01.ipp.mpg.de",
            "name": "Mario"
          },
          "distinct": true,
          "id": "6d17de31907ea4c02f776b67ff5343d5c472dd07",
          "message": "Create Example folder",
          "timestamp": "2023-09-05T10:54:18+02:00",
          "tree_id": "685f653c0fd7e4edec00493d701cf4803251100d",
          "url": "https://github.com/mraeth/vlasovSL.jl/commit/6d17de31907ea4c02f776b67ff5343d5c472dd07"
        },
        "date": 1693905338849,
        "tool": "julia",
        "benches": [
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 69884831.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40064\nallocs=79\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 35077943,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40064\nallocs=79\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 14216595.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4950976\nallocs=5653\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectV/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 5392155951,
            "unit": "ns",
            "extra": "gctime=17730578\nmemory=1491577216\nallocs=7201\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 5335069,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8000048\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8404309,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8816\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 15000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4832\nallocs=17\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "computeRho/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 10932424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4928\nallocs=18\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.deltaF}",
            "value": 6724686,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/vlasovSL.DistributionParticles{Float64, 1, 1, vlasovSL.fullF}",
            "value": 8779412,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d1v{Float64, vlasovSL.Cart}",
            "value": 2992039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6317888\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "AdvectX/DistributionGrid1d2v{Float64, vlasovSL.Cart}",
            "value": 2654700446.5,
            "unit": "ns",
            "extra": "gctime=136092504.5\nmemory=1508058256\nallocs=2378544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}