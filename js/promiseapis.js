//promise.all
const promise = require("promise");
const p1 = new promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 3000);
  // setTimeout(() => {
  //     reject("p2 fail");
  //   }, 4000);
});
const p2 = new promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 1000);
  //   setTimeout(() => {
  //     reject("p2 fail");
  //   }, 1000);
});
const p3 = new promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 2000);
  //   setTimeout(() => {
  //     reject("p2 fail");
  //   }, 5000);
});

promise
  .all([p1, p2, p3])
  .then((res) => {
    console.log(res,'all');
  })
  .catch((err) => {
    console.error(err);
  });
//promise.allsettled
promise
  .allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//promise.race  it will give the firstsetteled promise
promise
  .race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err, "race");
  });

//promise.any it will wait for the first setteled success
promise
  .any([p1, p2, p3])
  .then((res) => {
    console.log(res, "any");
  })
  .catch((err) => {
    console.error(err);
  });
