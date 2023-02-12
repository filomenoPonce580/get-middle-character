function getMiddle(str){
  let array = str.split('');
  
  if (array.length%2 === 1){
    return array[Math.floor(array.length/2)]
  }else{
    return array[Math.floor(array.length/2)-1] + array[Math.floor(array.length/2)]
  }
}


/*
better, math based. just use slice method

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

*/
