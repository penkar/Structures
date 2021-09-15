export default function InsertionSort(array) {
  const length = array.length;
  if(length > 1) {
    for(let i = 1; i < length; i++) {
      let current = array[i];
      if (current < array[i-1]) {
        let j = i;
        while (current < array[j - 1] && j > -1) {
          array[j] = array[j-1];
          array[j-1] = current;
          j--;
        }
      }
    }
  }
  return array;
}
