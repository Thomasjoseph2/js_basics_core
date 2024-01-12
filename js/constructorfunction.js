function Counter() {
  let count = 0;
  this.incrimentCounter = function () {
   return ++count;
  };
  this.decrementCounter = function () {
    return --count;
  };
}

const counter1=new Counter()

console.log(counter1.incrimentCounter())
console.log(counter1.incrimentCounter())
console.log(counter1.incrimentCounter())
console.log(counter1.decrementCounter())


function Book(title,author,year){
    this.title=title,
    this.author=author,
    this.year=year,
    this.getData=function () {
        console.log(this.title +"written by "+ this.author +" in " + this.year);
    }
}

Book.prototype.getYear=function (){
    return this.year;
}

const book1= new Book("ok kanmani","rajappan",2001)
const book2= new Book("kotha","raju",2231)
const book3=new Book("a",123)
book1.getData()
console.log(book2.getYear());
console.log(book1.getYear());

console.log(book3);
