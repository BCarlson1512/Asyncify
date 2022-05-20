module.exports = {
    asyncFind: async function asyncFind(arr:any[], predicate) {
        const result = await Promise.all(arr.map(predicate));
        return arr.find((_v, index) => result[index]);
    },
    asyncFilter: async function asyncFilter(arr:any[], predicate) { // array.find and array.filter are not meant for async use
        const results = await Promise.all(arr.map(predicate));
        return arr.filter((_v, index) => results[index]);
    }
}
