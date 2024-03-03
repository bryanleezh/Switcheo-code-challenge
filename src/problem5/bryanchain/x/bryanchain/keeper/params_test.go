package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "bryanchain/testutil/keeper"
	"bryanchain/x/bryanchain/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.BryanchainKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
