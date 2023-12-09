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


const betterThrottler=throttler(apicall, 400)

window.addEventListener("resize", betterThrottler);