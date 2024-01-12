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
        }, 2000);
    })
}

function delay3(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('delay 2');
        }, 2000);
    })
}

Promise.all([delay1(),delay2(),delay3()]).then((result)=>{
    console.log(result);
})