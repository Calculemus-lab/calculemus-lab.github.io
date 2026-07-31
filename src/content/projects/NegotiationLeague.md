---
title: "Automated Negotiation League (ANL)"
description: "A Python agent for a bilateral negotiation against over multi-issue domains."
status: "Done"
framework: "NegMAS / Python"
startDate: "2026-06-14"
repository: "https://github.com/Calculemus-lab/ANL"
---

### Overview

This project focuses on building a bilateral negotiation agent for the [**Automated Negotiation League (ANL) 2026**](https://anac.cs.brown.edu/anl) competition. The challenge requires designing an agent that negotiates over multi-issue domains while actively concealing its true preferences from the opponent. The agent is scored based on the quality of the agreement reached and how well it keeps the opponent in the dark about its utility function.

### Competition Mechanics

* **Objective**: Maximize negotiation outcomes (normalized advantage) while successfully concealing true preferences to claim an extra point based on preference privacy.
* **Protocol**: Alternating Offers Protocol (AOP) over multi-issue domains with a fixed deadline.
* **Dynamic Elements**: Unknown opponent utility functions and reservation values, requiring real-time opponent modeling and strategic deception.
* **Evaluation**: Scores are calculated using the obtained advantage plus a normalized Kendall rank correlation coefficient ($\tau$-b statistic) measuring the distance between actual and estimated utility functions.

### Our Approach

* **Opponent Modeling**: We implemented mechanisms to estimate the opponent's utility function by observing their offers throughout the negotiation.
* **Preference Concealing**: We utilized a decoy utility function representing fake preferences to mislead the opponent and distort their estimates.
* **Hyperparameter Reliance**: Our agent architecture relied on multiple hyperparameters, making it sensitive to different opponent strategies and less robust across various unknown scenarios due to time constraints.

### Stack

* **Core**: *Python*
* **Framework**: *NegMAS*
* **Game Theory**: *Alternating Offers Protocol (AOP)*, *Kendall Rank Correlation Coefficient*