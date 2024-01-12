const promise = require("promise");

const p1 = new promise((resolve, reject) => {
  console.log("p1");
  setTimeout(() => {
    resolve("promise 1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  console.log("p2");
  setTimeout(() => {
    resolve("promice 2");
  }, 10000);
});
// Here, you are creating both promises (p1 and p2) simultaneously 
//and not waiting for the resolution of one before creating the other.
// When you await them in the handler function, it only waits for the respective 
//promise, not both. So, it takes a total of 10 seconds, as it only waits for the longer of the two.

const handler = async () => {
  console.log("promises");
  const prom1 = await p1;
  console.log("promise one ");
  console.log(prom1);

  const prom2 = await p2;
  console.log("promise two");
  console.log(prom2);
};

handler();
