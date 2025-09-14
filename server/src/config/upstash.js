import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

import dotenv from 'dotenv'

dotenv.config()

// create a rate limiter that allows 50 requests per 60 seconds etc...
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(50, '60 s'),
})

export default ratelimit
