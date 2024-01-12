const str = "ck077";

const arr = str.split("");


function largest(arr) {
  let prev =[]
  let num = [];
  for (var i = 0; i < arr.length; i++) {

    if (arr[i].charCodeAt() < 96) num.push(arr[i]);
  }

  num.sort((a, b) => b - a);
  console.log(num);
  if(num[0]===num[num.length-1])return -1
  
  else return num[1]
}

console.log(largest(arr));


const array=[10,23,69,22,39,45]

for(var i=0;i<array.length;i++){





}