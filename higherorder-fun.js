


const radius=[10,20,30,50]

const area=(radius)=>{
    return Math.PI * (radius * radius);
}

const circumference=(radius)=>{
    return (2*Math.PI*radius)
}

const diameter=(radius)=>{
    return 2*radius
}

const calculate =(radius,logic)=>{
    const output=radius.map((r)=>{
      return logic(r);
    })
   return output
}




console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));