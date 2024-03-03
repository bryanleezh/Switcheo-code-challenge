import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "bryanchain.bryanchain";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgCreateResource {
    creator: string;
    title: string;
    body: string;
}
export interface MsgCreateResourceResponse {
    id: number;
}
export interface MsgUpdateResource {
    creator: string;
    id: number;
    title: string;
    body: string;
}
export interface MsgUpdateResourceResponse {
}
export interface MsgDeleteResource {
    creator: string;
    id: number;
}
export interface MsgDeleteResourceResponse {
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(base?: I): MsgUpdateParams;
    fromPartial<I_1 extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never; }>(object: I_1): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateParamsResponse;
};
export declare const MsgCreateResource: {
    encode(message: MsgCreateResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource;
    fromJSON(object: any): MsgCreateResource;
    toJSON(message: MsgCreateResource): unknown;
    create<I extends {
        creator?: string;
        title?: string;
        body?: string;
    } & {
        creator?: string;
        title?: string;
        body?: string;
    } & { [K in Exclude<keyof I, keyof MsgCreateResource>]: never; }>(base?: I): MsgCreateResource;
    fromPartial<I_1 extends {
        creator?: string;
        title?: string;
        body?: string;
    } & {
        creator?: string;
        title?: string;
        body?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateResource>]: never; }>(object: I_1): MsgCreateResource;
};
export declare const MsgCreateResourceResponse: {
    encode(message: MsgCreateResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse;
    fromJSON(object: any): MsgCreateResourceResponse;
    toJSON(message: MsgCreateResourceResponse): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): MsgCreateResourceResponse;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): MsgCreateResourceResponse;
};
export declare const MsgUpdateResource: {
    encode(message: MsgUpdateResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResource;
    fromJSON(object: any): MsgUpdateResource;
    toJSON(message: MsgUpdateResource): unknown;
    create<I extends {
        creator?: string;
        id?: number;
        title?: string;
        body?: string;
    } & {
        creator?: string;
        id?: number;
        title?: string;
        body?: string;
    } & { [K in Exclude<keyof I, keyof MsgUpdateResource>]: never; }>(base?: I): MsgUpdateResource;
    fromPartial<I_1 extends {
        creator?: string;
        id?: number;
        title?: string;
        body?: string;
    } & {
        creator?: string;
        id?: number;
        title?: string;
        body?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdateResource>]: never; }>(object: I_1): MsgUpdateResource;
};
export declare const MsgUpdateResourceResponse: {
    encode(_: MsgUpdateResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResourceResponse;
    fromJSON(_: any): MsgUpdateResourceResponse;
    toJSON(_: MsgUpdateResourceResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateResourceResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateResourceResponse;
};
export declare const MsgDeleteResource: {
    encode(message: MsgDeleteResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteResource;
    fromJSON(object: any): MsgDeleteResource;
    toJSON(message: MsgDeleteResource): unknown;
    create<I extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof MsgDeleteResource>]: never; }>(base?: I): MsgDeleteResource;
    fromPartial<I_1 extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDeleteResource>]: never; }>(object: I_1): MsgDeleteResource;
};
export declare const MsgDeleteResourceResponse: {
    encode(_: MsgDeleteResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteResourceResponse;
    fromJSON(_: any): MsgDeleteResourceResponse;
    toJSON(_: MsgDeleteResourceResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgDeleteResourceResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgDeleteResourceResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
    UpdateResource(request: MsgUpdateResource): Promise<MsgUpdateResourceResponse>;
    DeleteResource(request: MsgDeleteResource): Promise<MsgDeleteResourceResponse>;
}
export declare const MsgServiceName = "bryanchain.bryanchain.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
    UpdateResource(request: MsgUpdateResource): Promise<MsgUpdateResourceResponse>;
    DeleteResource(request: MsgDeleteResource): Promise<MsgDeleteResourceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
