const users = [
  { name: "ajay", age: 26 },
  {name:"thomas", age: 28 },
  { name:"anil",age: 10 },
  { name:"arun",age: 26 },
  { name:"abhay",age: 6 },
  { name:"kka",age: 28 },
];

//{26:2,28:1,26:2,6:1,76:1}

const ages = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(ages);

const names=users.reduce((acc,curr)=>{
    if(curr.age<15){
        acc.push(curr.name)
    }
    return acc
},[])

//chaining of these functions

const chaining=users.filter(x=>x.age<15).map(x=>x.name)

console.log(chaining);
console.log(names);