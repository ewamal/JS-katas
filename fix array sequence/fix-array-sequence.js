function solve(arr){
  arr.map((num, index) => {
    let indexOfNext;
    if(num % 3 === 0 && arr.indexOf(num/3) > -1){
      let next = num / 3;
      indexOfNext = arr.indexOf(next);
      if(indexOfNext > -1){
        arr.splice(indexOfNext, 1);
        arr.splice(index+1,0,next);
      }
    } else if (arr.indexOf(num*2) >= 0){
      indexOfNext = arr.indexOf(num*2);
      arr.splice(indexOfNext, 1)
      arr.splice(index+1,0,num*2);
    } else { // if none is true it will be the last element of array
      let elementsToMove = arr.slice(index + 1);
      arr.splice(index+1,elementsToMove.length); //remove elements from the end
      arr = elementsToMove.concat(arr);

      if(index == arr.length-1){
        return
      } else {
        solve(arr)
      }
    }
  })
 return arr
}

solve([12,3,9,4,6,8]) //,[9,3,6,12,4,8]);
