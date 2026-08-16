const MergeSort = (array) => {
  const len = array.length;
  if (len < 2) return array;
  let arr1 = array.slice(0, len / 2);
  let arr2 = array.slice(len / 2, len);
  ((arr1 = MergeSort(arr1)), (arr2 = MergeSort(arr2)));
  return Merge(arr1, arr2);
};

const Merge = (arr1, arr2) => {
  let arr = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  let x = 0;
  let y = 0;

  while (x < len1 && y < len2) {
    if (arr1[x] > arr2[y]) {
      arr.push(arr2[y]);
      y++;
    } else {
      arr.push(arr1[x]);
      x++;
    }
  }
  if (x < len1) arr = arr.concat(arr1.slice(x, len1));
  if (y < len2) arr = arr.concat(arr2.slice(y, len2));
  return arr;
};

export default MergeSort;
