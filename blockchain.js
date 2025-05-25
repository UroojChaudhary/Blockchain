const sha256 = require('sha256');
module.exports = Blockchain;

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];

  // Genesis Block
  this.createNewBlock(100, '0', '0');
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    previousBlockHash: previousBlockHash,
    hash: hash
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);
  return newBlock;
};

Blockchain.prototype.hashBlock = function(previousBlockHash, currentblockdata, nonce) {
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentblockdata);
  const hash = sha256(dataAsString);
  return hash;
};

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentblockdata) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentblockdata, nonce);

  while (hash.substring(0, 4) !== '1111') {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentblockdata, nonce);
  }

  console.log(hash);
  return nonce;
};

module.exports = Blockchain;
