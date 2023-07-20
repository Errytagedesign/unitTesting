const stringLength = (string) => {
  return string.length;
};

stringLength('taye');

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

reverseString('taye');

module.exports = { stringLength, reverseString };
