import { r } from '@marblejs/core'
import { mapTo } from 'rxjs/operators'

const del$ = r.pipe(
  r.matchPath('/'),
  r.matchType('DELETE'),
  r.useEffect(req$ => req$.pipe(
    mapTo({ body: { message: 'del user' } }),
  )),
)

export default del$
