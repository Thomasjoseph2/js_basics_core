const apicall = () => {
  console.log("api call...");
};

const throttler = function throttle(apicall, limit) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      apicall.apply(context, args);
    }, limit);
  };
};

//const betterThrottler=throttler(apicall, 400)

//window.addEventListener("resize", betterThrottler);

//another logic to impliment

const betterOne = function flagger(apicall, limit) {
  let flag = true;
  let timer;
  return function () {
    if (flag) {
      apicall();
      flag = false;
      timer = setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterThrottler = betterOne(apicall, 1000);

window.addEventListener("resize", betterThrottler);
 
//top one is better we are managing the this there  we can also do that in the second one also im not doing it now bcz im lazy  







