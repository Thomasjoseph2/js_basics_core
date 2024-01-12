const Promise = require("promise");
function add(num1, num2, callback) {
  let err = false;
  if (num1 === 0) {
    err = true;
  }
  callback(num1 + num2, err);
}

function multiply(sum, callback) {
  callback(sum * sum);
}

function divide(product, sum, callback) {
  callback(product / sum);
}

add(10, 20, (sum, err) => { 
  if (err) {
    console.log("nnum1 is 0");
    return;
  }
  console.log(sum);
  multiply(sum, (product) => {
    console.log(product);
    divide(product, sum, (division) => {
      console.log(division);
    });
  });
});

//using promises

function promiseAdd(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
        const err =new Error("num1 is 0")
        reject(err)
    }
    resolve(num1 + num2);
  });
}

function promiseMultiply(sum) {
  return new Promise((resolve, reject) => { 
    try {
        if (sum === 0) {
            reject("fisrt num is zero");
          }
      resolve(sum * 2);
    } catch (err) {
      reject(err);
    }
  });
}

function promiseSquare(product) {
  return new Promise((resolve, reject) => {
    if (product === 0) {
        const err =new Error("num1 is 0")
        reject(err);
      }
    resolve(product * product);
  });
}

// promiseAdd(10, 20)
//   .then((sum) => {
//     console.log(sum, "promise");
//     promiseMultiply(sum)
//       .then((product) => {
//         console.log(product, "product");
//         promiseSquare(product).then((squre) => {
//           console.log(squre);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// nested thens

promiseAdd(0, 20)
  .then((sum) => {
    console.log("promise sum", sum);
    return promiseMultiply(sum);
  })
  .then((product) => {
    console.log(product, "promise");
    return promiseSquare(product);
  })
  .then((sq) => {
    console.log(sq);
  })
  .catch((err) => {
    console.log(err.message);
  });
