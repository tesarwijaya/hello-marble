import { httpListener } from '@marblejs/core'
import { logger$ } from '@marblejs/middleware-logger'
import { bodyParser$ } from '@marblejs/middleware-body'

import root$ from './effects/root'
import user$ from './effects/user'

const middlewares = [
  logger$(),
  bodyParser$(),
  // ...
]

const effects = [
  root$,
  user$,
  // endpoint2$
  // ...
]

export default httpListener({ middlewares, effects })
