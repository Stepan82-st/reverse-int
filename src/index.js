module.exports = function reverse (n) {
    let numString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(numString);
  return result;

}
