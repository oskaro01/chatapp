import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv() // << This line initializes a Redis client using the @upstash/redis library, with configuration values (such as the Redis URL and token) sourced from environment variables. This allows the application to interact with a Redis database for tasks such as caching, session management, or real-time data storage.