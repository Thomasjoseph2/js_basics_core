const arr = [9, 2, 19, 1, 6, 4, 3, 0];
function lenear(arr) {
  let swapped = false;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

//console.log(lenear(arr));

function insertion(arr) {
  for (var i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (arr[j] > temp && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

//console.log(insertion(arr));

function selection(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

//console.log(selection(arr));

function quick(arr) {
    if(arr.length <2 )return arr
  const left = [];
  const right = [];
  const pivot = arr[Math.floor(arr.length / 2)];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else if (arr[i] > pivot) right.push(arr[i]);
  }
  return [...quick(left),pivot,...quick(right)]
}

//console.log(quick(arr));

function mergeSort(arr){
    if(arr.length <2 ){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sorted=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sorted.push(leftArr.shift())
        }else {
            sorted.push(rightArr.shift())
        }
    }
    return [...sorted,...leftArr,...rightArr]
}
const array=mergeSort(arr);


function linear(arr,target) {
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]===target) return i
    }
    return -1
    
}

// console.log(linear(mergeSort(arr),6));

function binary(arr,num) {
    let left=0
    let right=arr.length-1

    while(left<=right){
      let mid=Math.floor((left+right)/2)
      if(arr[mid]===num) return mid
      else if(arr[mid]<num) left=mid+1
      else right=mid-1
    }
    return -1
}

console.log(binary(array,6));
