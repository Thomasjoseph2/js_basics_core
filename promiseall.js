const Promise = require('promise')

function delay1(){
  return new Promise ((resolve,reject)=>{
     setTimeout(() => {
         resolve('delay1 function');
     }, 3000);
  })
}

function delay2(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('delay 2');
        }, 4000);
    })
}

Promise.all([delay1(),delay2()]).then((result)=>{
    console.log(result);
})