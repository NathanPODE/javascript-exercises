const removeFromArray = function(array, ...target) {
    return array.filter(num => !target.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
