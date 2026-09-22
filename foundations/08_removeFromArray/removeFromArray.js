const removeFromArray = function() {
};
function removeArgs(arr, ...itemsToRemove) {
    return arr.filter(function(item) {
        return !itemsToRemove.includes(item);
    });
}
console.log(removeArgs([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
