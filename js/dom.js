const btn = document.getElementById("btn");
console.log(btn);

const para = document.getElementsByTagName("p");
para[0].innerHTML="halo mwone"
const paras = document.getElementsByClassName("para");

const handleListener = () => {
  for (var i = 0; i < paras.length; i++) paras[i].style.color = "green";
};
function handleMouseLeave() {
  for (var i = 0; i < paras.length; i++) {
    paras[i].style.color = "black";
  }
}
const handleClick = () => {
  (btn.style.background = "blue"), (btn.style.color = "white");
  for (var i = 0; i < para.length; i++) para[i].style.color = "red";
};

btn.addEventListener("click", handleClick);

for (var i = 0; i < paras.length; i++) {
  paras[i].addEventListener("mouseover", handleListener);
  paras[i].addEventListener("mouseleave", handleMouseLeave);
}

const ulist = document.getElementsByClassName("Ulist")[0];
const newItem = document.createElement("li");
newItem.classList.add('item')
newItem.innerHTML = "item 2";
ulist.appendChild(newItem);



console.log(ulist);