//isEven exercise for lighthouse module 4

const isEven = function (num) {
  return num % 2 === 0;
};

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven, elevenIsEven);

console.log(isEven(8));
console.log(isEven(12), isEven(15));