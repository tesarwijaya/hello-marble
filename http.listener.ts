import { httpListener } from '@marblejs/core';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { root$ } from './effects/root';

const middlewares = [
  logger$(),
  bodyParser$(),
  // ...
];

const effects = [
  root$,
  // endpoint2$
  // ...
];

export default httpListener({ middlewares, effects });
