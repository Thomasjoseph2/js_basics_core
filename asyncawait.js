const promise=require('promise')
//async always returns a promise

async function getData() {
    return "namasthe"
}
//Promise { 'namasthe' }

getData().then((res)=>{
    console.log(res);
})

//when we use await in a function it is the same as putting .then(()) we are resolving the promise


async function promise2() {
    return new promise((resolve,reject)=>{
     setTimeout(() => {
        resolve("test 2 ok ")
     }, 5000);
    })

}
async function promise3() {
    return new promise((resolve,reject)=>{
     setTimeout(() => {
        resolve("test 3 ok ")
     }, 10000);
    })

}
// Here, you're using await for both promise2 and promise3 in the handler function. 
//The await keyword pauses the execution of the handler function until the promise 
//is resolved. So, the execution waits for promise2 to resolve before moving on to promise3.
// Hence, it takes a total of 15 seconds for both promises to complete.




const handler=async()=>{
    console.log('promises');
    const prom1=await promise2();
    console.log('promise one ');
    console.log(prom1);

    const prom2=await promise3();
    console.log('promise two');
    console.log(prom2);

}

handler()