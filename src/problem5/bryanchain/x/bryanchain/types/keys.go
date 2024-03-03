package types

const (
	// ModuleName defines the module name
	ModuleName = "bryanchain"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_bryanchain"
)

var (
	ParamsKey = []byte("p_bryanchain")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	ResourceKey      = "Resource/value/"
	ResourceCountKey = "Resource/count/"
)
