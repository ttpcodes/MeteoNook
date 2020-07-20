// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var meteonook_pb = require('./meteonook_pb.js');

function serialize_IslandInfo(arg) {
  if (!(arg instanceof meteonook_pb.IslandInfo)) {
    throw new Error('Expected argument of type IslandInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_IslandInfo(buffer_arg) {
  return meteonook_pb.IslandInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Overview(arg) {
  if (!(arg instanceof meteonook_pb.Overview)) {
    throw new Error('Expected argument of type Overview');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Overview(buffer_arg) {
  return meteonook_pb.Overview.deserializeBinary(new Uint8Array(buffer_arg));
}


var MeteoNookService = exports.MeteoNookService = {
  getOverview: {
    path: '/MeteoNook/GetOverview',
    requestStream: false,
    responseStream: false,
    requestType: meteonook_pb.IslandInfo,
    responseType: meteonook_pb.Overview,
    requestSerialize: serialize_IslandInfo,
    requestDeserialize: deserialize_IslandInfo,
    responseSerialize: serialize_Overview,
    responseDeserialize: deserialize_Overview,
  },
};

exports.MeteoNookClient = grpc.makeGenericClientConstructor(MeteoNookService);
