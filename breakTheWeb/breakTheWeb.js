function breakTheWeb (strength, width){
  if(strength < 0 || width < 0 ){
  return 0
  }

  let totalOfElephants = 0;
  let weight = 1000;
  while(width > 0){
    if(strength - (width * weight) >= 0){
      strength -= width * weight;
      totalOfElephants += width;
      weight += 1000;
      width--;
    } else {
      totalOfElephants += Math.floor(strength/weight);
      break
    }
  }
  return totalOfElephants
}
