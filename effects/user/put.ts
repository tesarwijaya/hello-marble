import { r } from '@marblejs/core'
import { mapTo } from 'rxjs/operators'

const put$ = r.pipe(
  r.matchPath('/'),
  r.matchType('PUT'),
  r.useEffect(req$ => req$.pipe(
    mapTo({ body: { message: 'put user' } }),
  )),
)

export default put$
