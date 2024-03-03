package bryanchain_test

import (
	"testing"

	keepertest "bryanchain/testutil/keeper"
	"bryanchain/testutil/nullify"
	bryanchain "bryanchain/x/bryanchain/module"
	"bryanchain/x/bryanchain/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BryanchainKeeper(t)
	bryanchain.InitGenesis(ctx, k, genesisState)
	got := bryanchain.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}