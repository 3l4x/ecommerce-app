const blacklist = new Map();

const addToBlacklist = (token) =>{
    if(!blacklist.has(token))
        blacklist.set(token,Date.now())
}

const removeFromBlacklist = (token) =>{
    blacklist.delete(token)
}


const isOnBlacklist = (token) => {
    return blacklist.has(token);
}

//deleting revoked tokens periodically
const cleanUpBlacklist = () =>{
    const now = Date.now();
    for(const key of blacklist.keys())
    {
        //tokens aged 12hrs
        if(now - blacklist.get(key) >= 12*60*60*1000 )
            blacklist.delete(key);
    }
}


module.exports = {
    addToBlacklist,
    removeFromBlacklist,
    isOnBlacklist,
    cleanUpBlacklist
}
