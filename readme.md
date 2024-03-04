# Switcheo Code Challenge #1

## Consensus Breaking Change

1. Explain what does it mean by breaking consensus.

Breaking consensus means causing the single state of a blockchain to change such that everyone has to update the blockchain software so that consensus can be achieved again.

2. Explain why your change would break the consensus

As a change, I modified the Resource block to have an additional field called pricestring.

By modifying the Resource block, any addition of new resources will be different from before as the 'older' blockchain would not be able to process the new Resource block.
