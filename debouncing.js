let counter = 0;
const getData = () => {
  console.log("fetching Data...", counter++);
};
const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    let context=this,
    args=arguments
    clearTimeout(timer)
    timer=setTimeout(()=>{
     fn.apply(context,args)
    },delay)
   
  };
};

const betterFunction = doSomeMagic(getData, 1000);
