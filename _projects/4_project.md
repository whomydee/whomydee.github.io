---
layout: page
title: AI-Segments
description: LLM-driven segmentation platform leveraging RAG architecture and transformers for automated customer segmentation.
img: assets/img/projects/ai-segments.jpg
importance: 4
category: optimizely
tech:
  - Python
  - FastAPI
  - LangChain
  - RAG
  - Transformers
  - GKE
---

## Overview

AI-Segments is an LLM-driven segmentation platform leveraging **RAG architecture** and transformers, enabling Optimizely's AI Agents to interact with customer data for hyper-targeted segmentation.

## Architecture

Two-module architecture:
1. **Segment Generator Service** (FastAPI) — real-time, on-demand segment generation
2. **Kubernetes Cron Job** — daily pre-computed segment refresh

## Tech Stack

`Python` `FastAPI` `LangChain` `RAG` `Transformers` `GKE` `Kubernetes`

## Impact

- Automated manual workflows, reducing campaign prep time by **70%**
- Processing **5M+ user segments/month** for **20+ enterprise clients**
- Notable clients: Cortland Management, Daniel Defense, Voodoo Lunchbox, NextVault
