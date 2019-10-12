import { createContext } from '@marblejs/core'
import * as http from 'http'
import httpListener from './http.listener'

const httpServer = httpListener
  .run(createContext())

// eslint-disable-next-line import/prefer-default-export
export const server = http
  .createServer(httpServer)
  .listen(1337, '0.0.0.0')
