//https://brilliant.org/wiki/trailing-number-of-zeros/
module.exports = function getZerosCount(number) {
    let zeros = 0;
    for (let i=5; number/i>=1; i =i* 5){
        zeros += Math.floor(number/i);
    }
    return zeros;
};
