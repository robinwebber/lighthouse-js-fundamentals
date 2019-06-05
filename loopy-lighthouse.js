// LoopyLighthouse exercise from module 4 of lighthouse labs prep course

/*
let number = ''
for (number = 100; number <= 200; number++) {
  switch (true) {
    case (number % 3 === 0 && number % 4 === 0):
      console.log('LoopyLighthouse');
      break;
    case (number % 3 === 0):
      console.log('Loopy');
      break;
    case (number % 4 === 0):
      console.log('Lighthouse');
      break;
    default:
      console.log(number);
  }
}
*/
let x = '';
for (x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 === 0 ) {
    console.log('LoopyLighthouse');
  } else if (x % 3 === 0) {
    console.log('Loopy');
  } else if (x % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(x);
  }
}

/*
let x = '';
for (x = 100; x <= 200; x++) {
  console.log(x);
}
*/