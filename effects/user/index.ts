import { combineRoutes } from '@marblejs/core'

import del$ from './del'
import get$ from './get'
import post$ from './post'
import put$ from './put'

const user$ = combineRoutes(
  '/user',
  [del$, get$, post$, put$],
)

export default user$
