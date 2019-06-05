//Module 4 of Lighthouse prep course


const raining = false;
const cold = true;

if (raining) {
  console.log('Don\'t forget your umbrella!');
}

if (cold) {
  console.log('Make sure you pick out a scarf!');
}

console.log('Now you\'re ready to go outside!');


//const cold = true;

if (cold) {
  console.log('Make sure you pick out a scarf!');
} else {
  console.log('Short sleeves are fine.');
}


const temperature = -50;

if (temperature < 0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.');
}

console.log('Now you\'re ready to go outside!'); 


const isCitizen = true;
const age = 16;

if (isCitizen && age > 18) {
  console.log('You are eligible to vote.');
} else if (!isCitizen && age > 18) {
  console.log('You must be a citizen to vote.');
} else if (isCitizen && age < 18) {
  console.log('You are too young to vote.');
} else {
  console.log('Why did you even try?');
}


if (temperature < -40 || temperature > 40) {
  console.log('Maybe going outside isn\'t such a great idea...');
}

if (!raining) {
  console.log('Leave your umbrella at home!');
}


