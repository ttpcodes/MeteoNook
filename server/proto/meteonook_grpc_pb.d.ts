// package: 
// file: meteonook.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as meteonook_pb from "./meteonook_pb";

interface IMeteoNookService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOverview: IMeteoNookService_IGetOverview;
}

interface IMeteoNookService_IGetOverview extends grpc.MethodDefinition<meteonook_pb.IslandInfo, meteonook_pb.Overview> {
    path: string; // "/.MeteoNook/GetOverview"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<meteonook_pb.IslandInfo>;
    requestDeserialize: grpc.deserialize<meteonook_pb.IslandInfo>;
    responseSerialize: grpc.serialize<meteonook_pb.Overview>;
    responseDeserialize: grpc.deserialize<meteonook_pb.Overview>;
}

export const MeteoNookService: IMeteoNookService;

export interface IMeteoNookServer {
    getOverview: grpc.handleUnaryCall<meteonook_pb.IslandInfo, meteonook_pb.Overview>;
}

export interface IMeteoNookClient {
    getOverview(request: meteonook_pb.IslandInfo, callback: (error: grpc.ServiceError | null, response: meteonook_pb.Overview) => void): grpc.ClientUnaryCall;
    getOverview(request: meteonook_pb.IslandInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meteonook_pb.Overview) => void): grpc.ClientUnaryCall;
    getOverview(request: meteonook_pb.IslandInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meteonook_pb.Overview) => void): grpc.ClientUnaryCall;
}

export class MeteoNookClient extends grpc.Client implements IMeteoNookClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOverview(request: meteonook_pb.IslandInfo, callback: (error: grpc.ServiceError | null, response: meteonook_pb.Overview) => void): grpc.ClientUnaryCall;
    public getOverview(request: meteonook_pb.IslandInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meteonook_pb.Overview) => void): grpc.ClientUnaryCall;
    public getOverview(request: meteonook_pb.IslandInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meteonook_pb.Overview) => void): grpc.ClientUnaryCall;
}
