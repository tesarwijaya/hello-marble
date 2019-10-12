import { r } from '@marblejs/core'
import { mapTo } from 'rxjs/operators'

const post$ = r.pipe(
  r.matchPath('/'),
  r.matchType('POST'),
  r.useEffect(req$ => req$.pipe(
    mapTo({ body: { message: 'post user' } }),
  )),
)

export default post$
