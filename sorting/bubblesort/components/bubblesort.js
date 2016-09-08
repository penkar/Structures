function bubbleSort(array){
  let len = array.length;
  while(true){
    var bool = true;
    for(var i = 0; i < len - 1; i++){
      var a = array[i], b = array[i+1]
      if(a > b){
        bool = false, array[i] = b, array[i+1] = a
      }
    }
    if(bool) break;
  }
  return array;
}
