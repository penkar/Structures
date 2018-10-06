const SelectionSort = (list) => {
  const len = list.length;
  if(len < 2) return list;
  for(var i = 0; i < len; i++) {
    let low = list[i], lowIndex = i;
    list.slice(i).forEach((x,y) => {
      if(x < low) {low = x, lowIndex = y}
    });
    if(i !== lowIndex) {
      let a = list[i];
      list[i] = low;
      list[lowIndex+i] = a;
    }
  }
  return list;
}

export default SelectionSort;