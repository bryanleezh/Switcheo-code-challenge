import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Resource } from "./resource";
export declare const protobufPackage = "bryanchain.bryanchain";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetResourceRequest {
    id: number;
}
export interface QueryGetResourceResponse {
    Resource: Resource | undefined;
}
export interface QueryAllResourceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllResourceResponse {
    Resource: Resource[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryGetResourceRequest: {
    encode(message: QueryGetResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceRequest;
    fromJSON(object: any): QueryGetResourceRequest;
    toJSON(message: QueryGetResourceRequest): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): QueryGetResourceRequest;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): QueryGetResourceRequest;
};
export declare const QueryGetResourceResponse: {
    encode(message: QueryGetResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceResponse;
    fromJSON(object: any): QueryGetResourceResponse;
    toJSON(message: QueryGetResourceResponse): unknown;
    create<I extends {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        };
    } & {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & { [K in Exclude<keyof I["Resource"], keyof Resource>]: never; };
    } & { [K_1 in Exclude<keyof I, "Resource">]: never; }>(base?: I): QueryGetResourceResponse;
    fromPartial<I_1 extends {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        };
    } & {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & { [K_2 in Exclude<keyof I_1["Resource"], keyof Resource>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "Resource">]: never; }>(object: I_1): QueryGetResourceResponse;
};
export declare const QueryAllResourceRequest: {
    encode(message: QueryAllResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllResourceRequest;
    fromJSON(object: any): QueryAllResourceRequest;
    toJSON(message: QueryAllResourceRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryAllResourceRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryAllResourceRequest;
};
export declare const QueryAllResourceResponse: {
    encode(message: QueryAllResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllResourceResponse;
    fromJSON(object: any): QueryAllResourceResponse;
    toJSON(message: QueryAllResourceResponse): unknown;
    create<I extends {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[] & ({
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & { [K in Exclude<keyof I["Resource"][number], keyof Resource>]: never; })[] & { [K_1 in Exclude<keyof I["Resource"], keyof {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof QueryAllResourceResponse>]: never; }>(base?: I): QueryAllResourceResponse;
    fromPartial<I_1 extends {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        Resource?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[] & ({
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        } & { [K_4 in Exclude<keyof I_1["Resource"][number], keyof Resource>]: never; })[] & { [K_5 in Exclude<keyof I_1["Resource"], keyof {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof QueryAllResourceResponse>]: never; }>(object: I_1): QueryAllResourceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Resource items. */
    Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
    ResourceAll(request: QueryAllResourceRequest): Promise<QueryAllResourceResponse>;
}
export declare const QueryServiceName = "bryanchain.bryanchain.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
    ResourceAll(request: QueryAllResourceRequest): Promise<QueryAllResourceResponse>;
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
