module.exports = function reverse (n) {
    let numString = n.toString().split('').reverse().join('');
    let result = Number(numString);
  return result;
}
