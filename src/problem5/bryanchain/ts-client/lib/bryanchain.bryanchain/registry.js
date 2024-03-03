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
const msgTypes = [
    ["/bryanchain.bryanchain.MsgUpdateResource", MsgUpdateResource],
    ["/bryanchain.bryanchain.MsgUpdateResourceResponse", MsgUpdateResourceResponse],
    ["/bryanchain.bryanchain.MsgDeleteResourceResponse", MsgDeleteResourceResponse],
    ["/bryanchain.bryanchain.Params", Params],
    ["/bryanchain.bryanchain.QueryParamsResponse", QueryParamsResponse],
    ["/bryanchain.bryanchain.QueryGetResourceRequest", QueryGetResourceRequest],
    ["/bryanchain.bryanchain.MsgDeleteResource", MsgDeleteResource],
    ["/bryanchain.bryanchain.GenesisState", GenesisState],
    ["/bryanchain.bryanchain.QueryParamsRequest", QueryParamsRequest],
    ["/bryanchain.bryanchain.QueryGetResourceResponse", QueryGetResourceResponse],
    ["/bryanchain.bryanchain.QueryAllResourceResponse", QueryAllResourceResponse],
    ["/bryanchain.bryanchain.MsgCreateResourceResponse", MsgCreateResourceResponse],
    ["/bryanchain.bryanchain.QueryAllResourceRequest", QueryAllResourceRequest],
    ["/bryanchain.bryanchain.MsgUpdateParams", MsgUpdateParams],
    ["/bryanchain.bryanchain.MsgCreateResource", MsgCreateResource],
    ["/bryanchain.bryanchain.Resource", Resource],
    ["/bryanchain.bryanchain.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
];
export { msgTypes };
