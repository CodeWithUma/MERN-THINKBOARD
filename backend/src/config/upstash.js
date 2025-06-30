import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

/*
COPILOT SUGGESSSTION -> Magic numbers for rate limit count and window duration are hardcoded. 
Extract these into environment variables or config constants for flexibility.

Suggested change
// create a ratelimiter that allows 100 requests per minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
// create a ratelimiter with configurable rate limit count and window duration
const RATE_LIMIT_COUNT = process.env.RATE_LIMIT_COUNT || 100; // Default to 100 requests
const RATE_LIMIT_WINDOW = process.env.RATE_LIMIT_WINDOW || "60 s"; // Default to 60 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(RATE_LIMIT_COUNT, RATE_LIMIT_WINDOW),
*/

// create a ratelimiter that allows 100 requests per minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;