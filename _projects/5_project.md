---
layout: page
title: AI-Backend (Eleanor)
description: Production-grade multi-tenant API gateway serving Optimizely's AI platform across Azure OpenAI, Vertex AI, and Replicate.
img: assets/img/projects/ai-backend.jpg
importance: 5
category: optimizely
tech:
  - Python
  - FastAPI
  - Azure OpenAI
  - Vertex AI
  - Replicate
  - GKE
  - Terraform
---

## Overview

AI-Backend (Eleanor) is a production-grade multi-tenant API gateway that powers most of Optimizely's AI initiatives, routing requests across **Azure OpenAI, Google Vertex AI/Gemini, and Replicate**.

## Architecture

- **3-layer API architecture** with streaming support
- **Token-bucket rate limiting** for fair multi-tenant usage
- **GKE deployment** with 10 replica pods and auto-scaling
- Per-customer usage tracking and **Datadog APM** observability

## Tech Stack

`Python` `FastAPI` `Azure OpenAI` `Vertex AI` `Replicate` `GKE` `Datadog` `Docker` `Terraform`

## Impact

- Serves multiple Optimizely products as the core AI infrastructure
- Abstracts LLM complexity, enabling teams to integrate AI without deep technical expertise
- Per-customer usage tracking for billing and compliance
