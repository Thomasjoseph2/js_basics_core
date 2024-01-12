function promisetest(a, b) {
  return new Promise((resolve, reject) => {
    let sum;
    setTimeout(() => {
      sum = a + b;
      resolve(sum);
    }, 2000);
  });
}

function test1(a) {
  return new Promise((resolve, reject) => {
    resolve(a + 1);
  });
}

function rejection(){
    throw new Error('no t')
}

promisetest(10, 20)
  .then((res) => {
    console.log(res);
    return test1(10);
  })
  .then((res) => {
    console.log(res);
    return rejection()
  }).catch((err)=>{
   console.log(err);
  })
