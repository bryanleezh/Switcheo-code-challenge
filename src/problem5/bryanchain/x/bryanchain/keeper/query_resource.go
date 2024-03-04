package keeper

import (
	"context"

	"bryanchain/x/bryanchain/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ResourceAll(ctx context.Context, req *types.QueryAllResourceRequest) (*types.QueryAllResourceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var resources []types.Resource

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	resourceStore := prefix.NewStore(store, types.KeyPrefix(types.ResourceKey))

	pageRes, err := query.Paginate(resourceStore, req.Pagination, func(key []byte, value []byte) error {
		var resource types.Resource
		if err := k.cdc.Unmarshal(value, &resource); err != nil {
			return err
		}

		resources = append(resources, resource)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllResourceResponse{Resource: resources, Pagination: pageRes}, nil
}

func (k Keeper) Resource(ctx context.Context, req *types.QueryGetResourceRequest) (*types.QueryGetResourceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	resource, found := k.GetResource(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetResourceResponse{Resource: resource}, nil
}

func (k Keeper) CreateResource(ctx context.Context, req *types.QueryCreateResourceRequest) (*types.QueryCreateResourceResponse, error) {
	// Check if the request is nil
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Extract parameters from the request
	creator := req.Creator
	title := req.Title
	body := req.Body

	// Perform validation if needed

	// Create the resource
	var newResource = types.Resource{
		Creator: creator,
		Title:   title,
		Body:    body,
	}

	// Call the CreateResource function from msgServer
	id := k.AppendResource(ctx, newResource)

	return &types.QueryCreateResourceResponse{
		Id: id,
	}, nil
}

func (k Keeper) UpdateResource(ctx context.Context, req *types.QueryUpdateResourceRequest) (*types.QueryUpdateResourceResponse, error) {
	// Check if the request is nil
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Extract parameters from the request
	id := req.Id
	// Perform validation if needed

	// Retrieve the existing resource
	resource, found := k.GetResource(ctx, id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	// Update the resource fields
	resource.Creator = req.Creator
	resource.Title = req.Title
	resource.Body = req.Body

	// Save the updated resource
	k.SetResource(ctx, resource)

	return &types.QueryUpdateResourceResponse{Resource: resource}, nil
}

func (k Keeper) DeleteResource(ctx context.Context, req *types.QueryDeleteResourceRequest) (*types.QueryDeleteResourceResponse, error) {
	// Check if the request is nil
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Extract parameters from the request
	id := req.Id

	// Retrieve the existing resource
	_, found := k.GetResource(ctx, id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	// Remove the resource from the store
	k.RemoveResource(ctx, id)

	return &types.QueryDeleteResourceResponse{}, nil
}
