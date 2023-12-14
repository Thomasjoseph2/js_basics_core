const radius = [10, 20, 30, 50];

const area = (radius) => {
  return Math.PI * (radius * radius);
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  const output = radius.map((r) => {
    return logic(r);
  });
  return output;
};

//map like function
Array.prototype.dupeMap=function (logic){
  const output=[]
  for(let i=0;i<this.length;i++){
    output.push(logic(this[i]))
  }
  return output
}

//realization point map and calculate looks the same then why bother creating calculate?
//and we can create map

console.log(radius.map(area));
console.log(radius.dupeMap(area));
console.log(calculate(radius, area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
