
const assert=require('assert')

function add(a,b){
   return a+b
}
 
assert.equal(add(2,3),5,'expect 5')

//assert modules used to check some 
//conditions like the above 
//assert.ok is there asser.equal is also there

//buffer module 
//provides a way to handle streams of binary data
var buf = Buffer.from([15,77,'c','d','e',78]);
console.log(buf);

//cluster module is used for to split 
//node process into multiple process
// var cluster = require('cluster');

// if (cluster.isWorker) {
//   console.log('I am a worker');
// } else {
//   console.log('I am a master');
//   cluster.fork();
//   cluster.fork();
// }

//The cluster module provides a way of creating child processes 
//that runs simultaneously and share the same server port.


var dns = require('dns');
var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
  console.log(addresses);
  console.log(family);
});
const fs = require('fs');

fs.writeFile('outpu.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Data written to file.');
});
