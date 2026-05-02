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