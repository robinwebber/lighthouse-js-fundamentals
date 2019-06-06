// Area calculators assignment for lighthouse

const calculateRectangleArea = function(length, width) {
  if (length > 0 && width > 0) {
    const rectArea = length * width;
    return rectArea;
  }
}

const calculateTriangleArea = function(base, height) {
  if (base > 0 && height > 0) {
    const triArea = base * height / 2;
    return triArea;
  }
}

const calculateCircleArea = function(radius) {
  if (radius > 0) {
    const circArea = Math.PI * (radius * radius);
    return circArea;
  }
}


console.log(calculateRectangleArea(3, 2));
console.log(calculateTriangleArea(4, 5));
console.log(calculateCircleArea(10));