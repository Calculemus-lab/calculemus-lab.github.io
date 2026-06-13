---
title: "OrbitWars"
description: "A fast, JAX-accelerated reinforcement learning agent for the OrbitWars Kaggle competition."
status: "Active"
framework: "JAX / Gymnax / PyTorch"
startDate: "2026-06-13"
repository: "https://github.com/Calculemus-lab/OrbitWars"
---

### Overview

This project is about building a high-performance reinforcement learning agent for the **Kaggle OrbitWars** competition. The competition tasks participants with controlling a fleet of ships to conquer a solar system on a 100x100 2D board. Our implementation focuses on leveraging *Jax* for parallelization of environment steps to accelerate agent training.

### Kaggle Competition Mechanics

- **Objective**: Conquer planets by launching fleets. The player with the most ships at the end of 500 turns wins.
- **Environment**: A 100x100 continuous space with a central sun (destructive to fleets) and rotating planets.
- **Dynamic Elements**: Inner planets orbit the sun, and elliptical comets pass through the board, acting as temporary capture points.
- **Combat**: Continuous collision detection where the largest force on a planet survives the encounter.

### Our Approach

- **JAX-Native Implementation**: We developed a specialized environment wrapper using *gymnax* and *jaxtyping* to enable hardware-accelerated training.
- **Abstraction & Simulation**: The agent shall receive abstracted informations that focus on current and future shipcounts of planets. To this end, we leverage *Jax* for fast simulation of the environment. 


### Tech Stack

- **Core**: *Python*, *JAX*, *jaxlib*
- **Simulation**: *kaggle-environments*, *gymnax*
- **Deep Learning**: *PyTorch*
