const api="https://api.github.com/users/thomasjoseph2"

async function getDetails() {
    
    const data =await fetch(api)
    
    const details=await data.json()
    console.log(details);
}  

getDetails() 