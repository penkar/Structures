const QuickSort = (array) => {
  let len = array.length;
  if(len < 2) return array;
  let lessr = [], great = [], equal = [];
  let pivot = (array[0] + array[len-1]) / 2;
  for(var i = 0; i < len; i++){
    var num = array[i];
    if(num < pivot){
      lessr.push(num);
    } else if (num > pivot){
      great.push(num);
    } else {
      equal.push(num);
    }
  }
  return [].concat(QuickSort(lessr), equal, QuickSort(great));
}

export default QuickSort
