function add(num1, num2, callback) {
  let err = false;
  if (num1 === 0) {
    err = true;
  }
  callback(num1 + num2, err);
}

add(0, 20, (sum, err) => {
  if (err) {
    console.log("nnum1 is 0");
    return;
  }
  console.log(sum);
});
