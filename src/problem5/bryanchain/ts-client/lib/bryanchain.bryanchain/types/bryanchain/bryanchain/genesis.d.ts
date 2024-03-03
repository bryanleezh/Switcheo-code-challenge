import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Resource } from "./resource";
export declare const protobufPackage = "bryanchain.bryanchain";
/** GenesisState defines the bryanchain module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    resourceList: Resource[];
    resourceCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {};
        resourceList?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[];
        resourceCount?: number;
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
        resourceList?: {
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
        } & { [K_1 in Exclude<keyof I["resourceList"][number], keyof Resource>]: never; })[] & { [K_2 in Exclude<keyof I["resourceList"], keyof {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[]>]: never; };
        resourceCount?: number;
    } & { [K_3 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I): GenesisState;
    fromPartial<I_1 extends {
        params?: {};
        resourceList?: {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[];
        resourceCount?: number;
    } & {
        params?: {} & {} & { [K_4 in Exclude<keyof I_1["params"], never>]: never; };
        resourceList?: {
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
        } & { [K_5 in Exclude<keyof I_1["resourceList"][number], keyof Resource>]: never; })[] & { [K_6 in Exclude<keyof I_1["resourceList"], keyof {
            id?: number;
            title?: string;
            body?: string;
            creator?: string;
        }[]>]: never; };
        resourceCount?: number;
    } & { [K_7 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
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
