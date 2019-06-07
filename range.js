// Looping - Range assignment for Lighthouse
/*
const range = function(start, end, step) {
  const ourRange = [];
  for (i = start; i < end; i += step) {
    ourRange.push(i);
    return ourRange;
  } return ourRange;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/
/* the block below satisfies the first requirements
const range = function(start, end, step) {
  const ourRange = [];
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0))
    return ourRange;
  } 
*/
/*
const range = function(start, end, step) {
  const ourRange = [];
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0))
    return ourRange;
  else {
      for (let i = start; i >= end; i += step) {
        ourRange.push(i);
    } return ourRange;
  } 
};
*/
const range = function(start, end, step) {
  let ourRange = [];
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)){
    return ourRange;
  }
  for (let i = start; i <= end; i += step) {
    ourRange.push(i);
  } return ourRange;
};

