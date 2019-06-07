// Last Index Of assignment from lighthouse

const lastIndexOf = function(array, num) {
  let index = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      index = num;
    } else {
      index = -1;
    }  
  } 
};

const lastIndexOf = function(array, num) {
  let index = -1;
  for (let i = 0; i > array.length; i++) {
    if (array[i] === num) {
      index = i;
    }
  } return index;
};

const lastIndexOf = function(array, num) {
  let index = -1;
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === num) {
      index = i;
      return index;
    }
  } return index;
};