mergeSort = (array) => {
  let len = array.length
  if(len < 2) return array;
  var arr1 = array.slice(0, len / 2), arr2 = array.slice(len/2, len);
  var array = null;
  arr1 = mergeSort(arr1), arr2 = mergeSort(arr2);
  array = merge(arr1, arr2);
  return array;
}

merge = (arr1, arr2) => {
  arr = [], len1 = arr1.length, len2 = arr2.length, x = 0, y = 0;
  while((x < len1) && (y < len2)){
    if(arr1[x] > arr2[y]){
      arr.push(arr2[y]);
      y++
    } else {
      arr.push(arr1[x]);
      x++
    }
  }
  if(x < len1) arr = arr.concat(arr1.splice(x, len1))
  if(y < len2) arr = arr.concat(arr2.splice(y, len2))
  return arr;
}
