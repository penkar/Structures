const InsertionSort = (array) => {
  const length = array.length;
  if(length < 2) return array;
    for(let i = 1; i < length; i++) {
      let current = array[i];
      for(let j = 0; j < length; j++) {
        let lowCurrent = array[j];
        if(current <= lowCurrent) {
          array.splice(i, 1);
          array.splice(j, 0, current);
          break;
        }
      }
    }
  return array;
}
export default InsertionSort