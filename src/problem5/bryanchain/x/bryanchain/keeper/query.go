package keeper

import (
	"bryanchain/x/bryanchain/types"
)

var _ types.QueryServer = Keeper{}
