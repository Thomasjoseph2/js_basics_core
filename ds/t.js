function FunctionConst(name,place){
   this.name=name
   this.place=place
} 


const obj=new FunctionConst("thoms","pala")
const obj2=new FunctionConst("akhil","kply")
const obj3=new FunctionConst("anil","pnknm")


console.log(obj,obj2,obj3);


function factory(name,age){
    return {
        name,
        age,
      };
}

const obj4=factory("name",12)

console.log(obj4);

function* numberGen(){
    let i=0;
    while(true){
        yield i++
    }
}

const numgen=numberGen()
function* dicisible(){
    for(let i=0;i<=20;i++){
        if( i !==0 &&i%5===0){
            yield i;
        }
    }
} 


const div=dicisible()


console.log(div.next());
console.log(div.next());
console.log(div.next());
console.log(div.next());
console.log(div.next());

