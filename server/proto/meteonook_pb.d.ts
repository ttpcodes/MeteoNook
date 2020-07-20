// package: 
// file: meteonook.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class IslandInfo extends jspb.Message { 
    getSeed(): number;
    setSeed(value: number): IslandInfo;

    getHemisphere(): Hemisphere;
    setHemisphere(value: Hemisphere): IslandInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IslandInfo.AsObject;
    static toObject(includeInstance: boolean, msg: IslandInfo): IslandInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IslandInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IslandInfo;
    static deserializeBinaryFromReader(message: IslandInfo, reader: jspb.BinaryReader): IslandInfo;
}

export namespace IslandInfo {
    export type AsObject = {
        seed: number,
        hemisphere: Hemisphere,
    }
}

export class Overview extends jspb.Message { 
    getForecast(): string;
    setForecast(value: string): Overview;

    getPattern(): string;
    setPattern(value: string): Overview;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Overview.AsObject;
    static toObject(includeInstance: boolean, msg: Overview): Overview.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Overview, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Overview;
    static deserializeBinaryFromReader(message: Overview, reader: jspb.BinaryReader): Overview;
}

export namespace Overview {
    export type AsObject = {
        forecast: string,
        pattern: string,
    }
}

export enum Hemisphere {
    NORTH = 0,
    SOUTH = 1,
}
