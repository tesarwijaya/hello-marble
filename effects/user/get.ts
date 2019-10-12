import { r } from '@marblejs/core'
import { mapTo } from 'rxjs/operators'

const get$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    mapTo({ body: { message: 'get user' } }),
  )),
)

export default get$
