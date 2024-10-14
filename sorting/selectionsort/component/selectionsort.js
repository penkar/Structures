const SelectionSort = (list) => {
  const len = list.length;
  if (len < 2) return list;

  for (let i = 0; i < len; i++) {
    /*  Iterate through all the index in the array, comparing
        each position to all follwoing positions. */
    let low = list[i];
    let lowIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < low) {
        low = list[j];
        lowIndex = j;
      }
    }

    /*  If a lower number is found, the current number and
        the lowest number's places will be swapped. */
    if (i !== lowIndex) {
      let a = list[i];
      list[lowIndex] = list[i];
      list[i] = low;
    }
  }
  return list;
};

export default SelectionSort;
