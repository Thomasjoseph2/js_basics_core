const map = new Map([
    [1, 10],
    [2, 20],
    [3, 30],
  ]);
  const map2 = new Map([
    [4, 40],
    [2, 80],
    [3, 100],
  ]);
  
  function combine(mapA, mapB) {
    const result = new Map();
  
    for (const [key, value] of mapA) {
      result.set(key, value);
    }
  
    for (const [key, value] of mapB) {
      if (result.has(key)) {
        result.set(key, result.get(key) + value);
      } else {
        result.set(key, value);
      }
    }
  
    return result;
  }
  
  function combineWithoutNew(mapA,mapB){
      for(const [key,value] of mapB){
          if(mapA.has(key)){
              mapA.set(key,mapA.get(key)+value)
          }else{
              mapA.set(key,value)
          }
      }
      return mapA
  }
  
  console.log(combineWithoutNew(map, map2));