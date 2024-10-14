const QuickSort = (array) => {
  const len = array.length;
  if (len < 2) return array;

  const pivot = array[Math.floor(len / 2)];
  const lesser = [];
  const greater = [];
  const equal = [];

  for (var i = 0; i < len; i++) {
    let num = array[i];
    if (num < pivot) {
      lesser.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }
  return [].concat(QuickSort(lesser), equal, QuickSort(greater));
};

export default QuickSort;
