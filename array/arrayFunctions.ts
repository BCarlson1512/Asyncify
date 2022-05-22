// async Wrapper for array functions, requires a callback
export const asyncFind = async (arr:any[], predicate) => {
    const result = await Promise.all(arr.map(predicate));
    return arr.find((_v, index) => result[index]);
};

export const asyncFindIndex = async (arr:any[], predicate) => {
    const results = await Promise.all(arr.map(predicate));
    return arr.findIndex((_v, index) => results[index]);
};

export const asyncSome = async (arr:any[], predicate) => {
    const results = await Promise.all(arr.map(predicate));
    if (results.length === 0) return -1;
    return arr.findIndex((_v, index) => results[index]);
};

export const asyncFilter = async (arr:any[], predicate) => {
    const results = await Promise.all(arr.map(predicate));
    return arr.filter((_v, index) => results[index]);
};

export const asyncForEach = async (arr:any[], predicate) => {
    //TODO: Implement ForEach
    throw new Error("Not implemented");
};

export const asyncFill = async (arr:any[], predicate) => {
    //TODO: Implement Fill
    throw new Error("Not implemented");
};

export const asyncJoin = async (arr1:any[], arr2:any[], predicate) => {
    //TODO: implement array.join
    throw new Error("Not implemented");
};

export const asyncReverse = async (arr:any[], predicate) => {
    //TODO: implement array.reverse
    throw new Error("Not implemented");
};

export const asyncToString = async (arr:any[], predicate) => {
    //TODO: implement array.toString
    throw new Error("Not implemented");
};

export const asyncSplice = async (arr:any[], predicate) => {
    //TODO: implement array.splice
    throw new Error("Not implemented");
};

export const asyncUnshift = async (arr:any[], predicate) => {
    //TODO: implement array.unshift
    throw new Error("Not implemented");
};

export const asyncConcat = async (arr:any[], predicate) => {
    //TODO: implement array.concat
    throw new Error("Not implemented");
};

export const asyncCopyWithin = async(arr:any[], predicate) => {
    //TODO: implement array.copywithin
    throw new Error("Not implemented");
};

export const asyncEntries = async(arr:any[], predicate) => {
    //TODO: implement array.entires
    throw new Error("Not implemented");
};

export const asyncEvery = async(arr:any[], predicate) => {
    //TODO: implement array.every
    throw new Error("Not implemented");
};

export const asyncFrom = async(arr:any[], predicate) => {
    //TODO: implement array.from
    throw new Error("Not implemented");
}

export const asyncReduce = async (arr:any[], predicate) => {
    //TODO: implement array.reduce
    throw new Error("Not implemented");
}