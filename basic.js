let obj1 = {
  name: "thomas",
  age: 12,
  place: "kottayam",
}
let obj2 = {
  name: "antony",
  age: 13,
  place: "pala",
};

const common = function (message) {
  console.log(message + ' ' + this.name + ' ' + this.age + ' ' + 'from' + ' ' + this.place);
}

common.call(obj2, "hii");

common.apply(obj2, ["poda"]);

const newf = common.bind(obj2);

newf('hiii')
