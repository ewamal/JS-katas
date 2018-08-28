let log = console.log;

function solve(arr){
  arr.map((num, index) => {
    let indexOfNext;
    log('index: '+ index)
    if(num % 3 === 0 && arr.indexOf(num/3) > -1){
      let next = num / 3;
      indexOfNext = arr.indexOf(next);
      log('indexOfNext ' + indexOfNext);
      if(indexOfNext > -1){
        arr.splice(indexOfNext, 1);
        arr.splice(index+1,0,next);
      }
      log('arr', arr)
    } else if (arr.indexOf(num*2) >= 0){
      indexOfNext = arr.indexOf(num*2);
      log('indexOfNext ' + indexOfNext);
      arr.splice(indexOfNext, 1)
      arr.splice(index+1,0,num*2);
      log('arr', arr)
    } else { // if none is true it will be the last element of array
      let elementsToMove = arr.slice(index + 1);
      log('elementsTOmove: ' + elementsToMove)
      arr.splice(index+1,elementsToMove.length); //remove elements from the end
      arr = elementsToMove.concat(arr);
      log('arr:', arr)

      if(index == arr.length-1){
        log('out')
        return
      } else {
        solve(arr)
      }
    }
  })
 console.log (arr)
}

solve([12,3,9,4,6,8]) //,[9,3,6,12,4,8]);
