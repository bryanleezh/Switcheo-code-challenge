import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "bryanchain.bryanchain";
export interface Resource {
    id: number;
    title: string;
    body: string;
    creator: string;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    create<I extends {
        id?: number;
        title?: string;
        body?: string;
        creator?: string;
    } & {
        id?: number;
        title?: string;
        body?: string;
        creator?: string;
    } & { [K in Exclude<keyof I, keyof Resource>]: never; }>(base?: I): Resource;
    fromPartial<I_1 extends {
        id?: number;
        title?: string;
        body?: string;
        creator?: string;
    } & {
        id?: number;
        title?: string;
        body?: string;
        creator?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Resource>]: never; }>(object: I_1): Resource;
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
