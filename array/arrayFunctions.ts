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
