const body=document.body
const button=document.getElementById('btn')
button.addEventListener('click',handleClick)
button.classList.add('okok')
const heading=document.createElement("h1");
heading.innerHTML='Hellow world'
body.append(heading)

function handleClick(){
   const div= document.createElement('div')
   const h2=document.createElement('h2')
   h2.innerHTML='hi guys'
   div.append(h2)
   body.append(div)
}
const head=document.querySelector('H1')
const nextelem=head.nextElementSibling



console.log(nextelem);