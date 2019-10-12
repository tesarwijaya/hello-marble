import { r } from '@marblejs/core'
import { mapTo } from 'rxjs/operators'

const root$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    mapTo({ body: { message: 'Hello, world!!' } }),
  )),
)

export default root$
