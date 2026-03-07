---
layout: page
title: Synapse
description: Hybrid AI agent memory system enabling personalized AI experiences through long-term memory and contextual intelligence.
img: assets/img/projects/synapse.jpg
importance: 2
category: optimizely
tech:
  - Python 3.13
  - FastAPI
  - Cloud Spanner
  - Vertex AI
  - GKE
  - Pub/Sub
---

## Overview

Synapse is a hybrid AI agent memory system for **OPAL (Optimizely's agent orchestration platform)**, enabling personalized AI experiences through long-term memory and contextual intelligence.

## Architecture

- **Async microservices** using FastAPI + Python 3.13
- **Real-time webhook ingestion** for capturing agent interactions
- **Hybrid memory** combining Google Cloud Spanner and Vertex AI Memory Bank
- Adaptive response formatting based on user context

## Tech Stack

`Python 3.13` `FastAPI` `Cloud Spanner` `Vertex AI` `GKE` `Pub/Sub`

## Impact

- Processing **10K+ agent interactions/day**
- Improved user continuity across conversations
- Eliminated repetitive context-setting, reducing cognitive overhead
