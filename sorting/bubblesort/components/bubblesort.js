export default function BubbleSort(array){
  let len = array.length;
  while(true){
    let bool = true;
    for(let i = 0; i < len - 1; i++){
      let a = array[i], b = array[i+1];
      if(a > b) bool = false, array[i] = b, array[i+1] = a;
    }
    if(bool) break;
  }
  return array;
}
