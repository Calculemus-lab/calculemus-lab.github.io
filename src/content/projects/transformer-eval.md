---
title: "Distributed Transformer Evaluation"
description: "A pipeline for benchmarking open-weight language models across LIACS cluster nodes."
status: "Active"
repository: "https://github.com/calculemus/transformer-eval"
framework: "PyTorch / Ray"
modelSize: "7B - 70B Params"
compute: "8x NVIDIA A100 (80GB)"
startDate: "2026-05-10"
---

### System Architecture

This project maps out the efficiency of running large-scale evaluation tasks distributed across multiple GPU nodes. Rather than relying on standard benchmark wrappers, we built a custom routing layer to handle batching asynchronously.

#### Current Progress
* Integrated DeepSpeed for inference optimization.
* Set up node-to-node communication over Ray.
* Currently running baseline MMLU evaluations.