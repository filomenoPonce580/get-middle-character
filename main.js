//not operable just yet

function getMiddle(str){
  //create target
  let targetIndex = 0;
  
  //count the length of string
  let length = str.length;
  
  //string.length/2
  //if even, grab index (length)/2 & ((length)/2)-1
  if(length%2 === 0){
    return str.slice(length/2 - 1, length/2)
  }else{
    return str[length/2 - 1]
  }
  //if odd, grab index# (length/2)+1
}
