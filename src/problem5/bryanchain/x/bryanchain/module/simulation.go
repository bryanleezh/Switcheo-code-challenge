package bryanchain

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"bryanchain/testutil/sample"
	bryanchainsimulation "bryanchain/x/bryanchain/simulation"
	"bryanchain/x/bryanchain/types"
)

// avoid unused import issue
var (
	_ = bryanchainsimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateResource = "op_weight_msg_resource"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateResource int = 100

	opWeightMsgUpdateResource = "op_weight_msg_resource"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateResource int = 100

	opWeightMsgDeleteResource = "op_weight_msg_resource"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteResource int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	bryanchainGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		ResourceList: []types.Resource{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ResourceCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&bryanchainGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateResource int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateResource, &weightMsgCreateResource, nil,
		func(_ *rand.Rand) {
			weightMsgCreateResource = defaultWeightMsgCreateResource
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateResource,
		bryanchainsimulation.SimulateMsgCreateResource(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateResource int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateResource, &weightMsgUpdateResource, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateResource = defaultWeightMsgUpdateResource
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateResource,
		bryanchainsimulation.SimulateMsgUpdateResource(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteResource int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteResource, &weightMsgDeleteResource, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteResource = defaultWeightMsgDeleteResource
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteResource,
		bryanchainsimulation.SimulateMsgDeleteResource(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateResource,
			defaultWeightMsgCreateResource,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				bryanchainsimulation.SimulateMsgCreateResource(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateResource,
			defaultWeightMsgUpdateResource,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				bryanchainsimulation.SimulateMsgUpdateResource(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteResource,
			defaultWeightMsgDeleteResource,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				bryanchainsimulation.SimulateMsgDeleteResource(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
