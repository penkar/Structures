export default function binarySearch(sortedarray, term) {
  if(Array.isArray(sortedarray) && !sortedarray.length) return false;
  let position = parseInt((sortedarray.length / 2) + 1), 
    left = 0, 
    right = sortedarray.length - 1, 
    current = sortedarray[position], i = 0;
  while(true) {
    i++
    if(current === term) break;
    if(current > term) {
      right = position;
    } else {
      left = position;
    }
    position = parseInt((left + right) / 2);
    current = sortedarray[position];
    if(left + 1 === right) break;
  }
  
  if(current === term) {
    return position;
  } else if(sortedarray[left] === term) {
    return left;
  } else if (sortedarray[right] === term) {
    return right;
  } else {
    return false;
  }
}