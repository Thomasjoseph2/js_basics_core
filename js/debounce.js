let counter=0
function getdata() {
console.log('printing',counter++);
}

function dosomething(fn,del){
    let timer
    return function(){
        let context=this;
        let args=arguments;
        clearTimeout(timer)
         timer=setTimeout(()=>{
           fn.apply(context,args)
        },del)
    }

}

const betterFunc=dosomething(getdata,3000)

function apicall(){
    console.log('rezising');
}



function betterApi(fn,delay){
  let timer;

  return function(){
    let context=this,args=arguments;
    clearTimeout(timer)
    timer=setTimeout(()=>{
      fn.apply(context,args)
    },delay)
  }

}
window.addEventListener('resize',betterApi(apicall,1000))
