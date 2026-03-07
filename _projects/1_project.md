---
layout: page
title: OPAL Evals
description: Production-grade AI evaluation framework using LLM-as-a-Judge for scoring conversational agent outputs across 5 quality dimensions.
img: assets/img/projects/opal-evals.jpg
importance: 1
category: optimizely
tech:
  - Python
  - FastAPI
  - Gemini
  - Claude
  - GitHub Actions
  - GKE
  - Datadog
---

## Overview

OPAL Evals is a production-grade AI evaluation framework that scores conversational agent outputs using multi-model **LLM-as-a-Judge (Gemini, Claude)** across **5 quality dimensions**.

## Architecture

- **Stateless evaluation engine API** for scalable, on-demand scoring
- **CI/CD pipeline integration** via GitHub Actions with threshold-based release gating
- **Internal experimentation UI** for prompt iteration and A/B testing of agent behaviors

## Tech Stack

`Python` `FastAPI` `Gemini` `Claude` `GitHub Actions` `GKE` `Datadog`

## Impact

- Reduced agent debugging time from **2-3 days to under 4 hours**
- Enabled **5x faster** prompt iteration cycles
- Tested across **50+ test scenarios**
- On the process of adoption by enterprise customers for AI compliance requirements
