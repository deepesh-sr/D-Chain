class Block {
    constructor(index, previousHash, data, currentHash, timestamp) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash.toString();
    }
}
// calculating the hash of the block 
var calculateHash = (index, data, timestamp, previousHash) => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
}

// creating the next block;
var generateNextBlock = (blockData) => {
    var previousBlock = getLatestBlock();
    var nextIndex = previousBlock.index + 1;
    var nextTimeStamp = new Date().getTime() / 1000;
    var nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimeStamp, nextHash);

    return new Block(nextIndex, previousBlock.hash, blockData, nextHash, nextTimeStamp);
}

//Next Hash will be the hash of the data.
var genesisBlock =()=> new Block(0,'0',"Genisis-Block-By-Deepesh",nextHash,"This is hash of the current block");





var calculateHashForBlock = (block) => {
    return calculateHash(block.index, block.previousHash, block.timestamp, block.data);
};

function check(){
    if(block instanceof Block){
        console.log("Ha bc haaa")
    }
}
// validating the integrity of blocks.

var isValidNewBlock = ( newBlock , previousBlock)=>{
    if(previousBlock.index+1 !== newBlock){
        console.log("Invalid_Index")
        return false ;
    }else if (previousBlock.hash !== newBlock.previousHash){
        console.log("Invalid Hash");
        return false ; 
    }else if (calculateHash(newBlock)!==newBlock.hash){
        console.log("Invalid hash: " + calculateHash(newBlock) + " " + newBlock.hash)
        return false;
    }
    return true;
}

var replaceChain = (newBlocks)=>{
    if ( isValidChain(newBlocks) && newBlocks.length > blockchain.length){
        console.log('Recieved blockchain is valid. Replacing current blockchain witht recent blockchain');
        blockchain = newBlocks;
        BroadcastChannel(responseLastestMsg());
    }else{
        console.log('Recieved blockchain invalid ');
    }
        
}















