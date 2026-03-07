---
layout: page
title: CMAB Recommendation Engine
description: Contextual multi-armed bandit recommendation engine with XGBoost, handling 5K requests/second for real-time ML predictions.
img: assets/img/projects/cmab.jpg
importance: 3
category: optimizely
tech:
  - Python
  - XGBoost
  - FastAPI
  - GKE
  - BigQuery
  - Datadog
---

## Overview

A contextual multi-armed bandit recommendation engine powering Optimizely's experimentation platform with **XGBoost**, enabling personalized A/B test variations based on individual user context.

## How It Works

- **Contextual Bandits** personalize user experience by considering context-specific factors
- **XGBoost** powers the prediction layer for real-time decision making
- **Large-scale data feed** with regular interval training
- Context-aware bandit system that reduces regret and improves experiment outcomes

## Tech Stack

`Python` `XGBoost` `FastAPI` `GKE` `BigQuery` `Datadog`

## Impact

- Handling **5,000 requests/second** for real-time ML predictions
- Reduced regret by **15%** and boosted conversions by **8%**
- Secured a major US financial services client with tens of millions of customers
- Notable clients: Discovery, Atlassian, IBM, Salesforce, Capital One
