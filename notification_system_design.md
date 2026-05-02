# Notification System Design

## Overview
System sends notifications when events occur.

## Components
- Backend Service
- Logging Middleware
- Notification Service

## Flow
1. User sends request
2. Backend processes data
3. Logging middleware logs event
4. Notification triggered

## Scalability
- Use message queues (Kafka/RabbitMQ)
- Horizontal scaling

## Failure Handling
- Retry failed notifications
- Log all failures

## Implementation

- Used weighted priority scoring
- Priority = Type Weight + Recency
- Sorted using custom comparator
- Extracted Top 10 notifications

Time Complexity:
- O(n log n)