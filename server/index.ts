import {Server, ServerCredentials} from 'grpc'

import MeteoNookServer from './meteonook'

import {IMeteoNookServer, MeteoNookService} from './proto/meteonook_grpc_pb'

function startServer() {
  const server = new Server();
  server.addService<IMeteoNookServer>(MeteoNookService, new MeteoNookServer())
  server.bind('0.0.0.0:8080', ServerCredentials.createInsecure())
  server.start()
}

startServer()
