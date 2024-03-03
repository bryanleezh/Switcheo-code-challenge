import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateResource } from "./types/bryanchain/bryanchain/tx";
import { MsgUpdateResourceResponse } from "./types/bryanchain/bryanchain/tx";
import { MsgDeleteResourceResponse } from "./types/bryanchain/bryanchain/tx";
import { Params } from "./types/bryanchain/bryanchain/params";
import { QueryParamsResponse } from "./types/bryanchain/bryanchain/query";
import { QueryGetResourceRequest } from "./types/bryanchain/bryanchain/query";
import { MsgDeleteResource } from "./types/bryanchain/bryanchain/tx";
import { GenesisState } from "./types/bryanchain/bryanchain/genesis";
import { QueryParamsRequest } from "./types/bryanchain/bryanchain/query";
import { QueryGetResourceResponse } from "./types/bryanchain/bryanchain/query";
import { QueryAllResourceResponse } from "./types/bryanchain/bryanchain/query";
import { MsgCreateResourceResponse } from "./types/bryanchain/bryanchain/tx";
import { QueryAllResourceRequest } from "./types/bryanchain/bryanchain/query";
import { MsgUpdateParams } from "./types/bryanchain/bryanchain/tx";
import { MsgCreateResource } from "./types/bryanchain/bryanchain/tx";
import { Resource } from "./types/bryanchain/bryanchain/resource";
import { MsgUpdateParamsResponse } from "./types/bryanchain/bryanchain/tx";
export { MsgUpdateResource, MsgUpdateResourceResponse, MsgDeleteResourceResponse, Params, QueryParamsResponse, QueryGetResourceRequest, MsgDeleteResource, GenesisState, QueryParamsRequest, QueryGetResourceResponse, QueryAllResourceResponse, MsgCreateResourceResponse, QueryAllResourceRequest, MsgUpdateParams, MsgCreateResource, Resource, MsgUpdateParamsResponse };
type sendMsgUpdateResourceParams = {
    value: MsgUpdateResource;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateResourceResponseParams = {
    value: MsgUpdateResourceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteResourceResponseParams = {
    value: MsgDeleteResourceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetResourceRequestParams = {
    value: QueryGetResourceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteResourceParams = {
    value: MsgDeleteResource;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetResourceResponseParams = {
    value: QueryGetResourceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllResourceResponseParams = {
    value: QueryAllResourceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateResourceResponseParams = {
    value: MsgCreateResourceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllResourceRequestParams = {
    value: QueryAllResourceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateResourceParams = {
    value: MsgCreateResource;
    fee?: StdFee;
    memo?: string;
};
type sendResourceParams = {
    value: Resource;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateResourceParams = {
    value: MsgUpdateResource;
};
type msgUpdateResourceResponseParams = {
    value: MsgUpdateResourceResponse;
};
type msgDeleteResourceResponseParams = {
    value: MsgDeleteResourceResponse;
};
type paramsParams = {
    value: Params;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetResourceRequestParams = {
    value: QueryGetResourceRequest;
};
type msgDeleteResourceParams = {
    value: MsgDeleteResource;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetResourceResponseParams = {
    value: QueryGetResourceResponse;
};
type queryAllResourceResponseParams = {
    value: QueryAllResourceResponse;
};
type msgCreateResourceResponseParams = {
    value: MsgCreateResourceResponse;
};
type queryAllResourceRequestParams = {
    value: QueryAllResourceRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateResourceParams = {
    value: MsgCreateResource;
};
type resourceParams = {
    value: Resource;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateResource({ value, fee, memo }: sendMsgUpdateResourceParams): Promise<DeliverTxResponse>;
    sendMsgUpdateResourceResponse({ value, fee, memo }: sendMsgUpdateResourceResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteResourceResponse({ value, fee, memo }: sendMsgDeleteResourceResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetResourceRequest({ value, fee, memo }: sendQueryGetResourceRequestParams): Promise<DeliverTxResponse>;
    sendMsgDeleteResource({ value, fee, memo }: sendMsgDeleteResourceParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetResourceResponse({ value, fee, memo }: sendQueryGetResourceResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllResourceResponse({ value, fee, memo }: sendQueryAllResourceResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateResourceResponse({ value, fee, memo }: sendMsgCreateResourceResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllResourceRequest({ value, fee, memo }: sendQueryAllResourceRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateResource({ value, fee, memo }: sendMsgCreateResourceParams): Promise<DeliverTxResponse>;
    sendResource({ value, fee, memo }: sendResourceParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    msgUpdateResource({ value }: msgUpdateResourceParams): EncodeObject;
    msgUpdateResourceResponse({ value }: msgUpdateResourceResponseParams): EncodeObject;
    msgDeleteResourceResponse({ value }: msgDeleteResourceResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetResourceRequest({ value }: queryGetResourceRequestParams): EncodeObject;
    msgDeleteResource({ value }: msgDeleteResourceParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetResourceResponse({ value }: queryGetResourceResponseParams): EncodeObject;
    queryAllResourceResponse({ value }: queryAllResourceResponseParams): EncodeObject;
    msgCreateResourceResponse({ value }: msgCreateResourceResponseParams): EncodeObject;
    queryAllResourceRequest({ value }: queryAllResourceRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateResource({ value }: msgCreateResourceParams): EncodeObject;
    resource({ value }: resourceParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        BryanchainBryanchain: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
