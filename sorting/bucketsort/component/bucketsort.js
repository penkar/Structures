const BucketSort = (array) => {
  let tallest = array[0],
    shortest = array[0],
    nums = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    nums[num] = (nums[num] || 0) + 1;
    if (num > tallest) {
      tallest = num;
    } else if (num < shortest) {
      shortest = num;
    }
  }

  let index = 0;
  for (let j = shortest; j <= tallest; j++) {
    let renum = nums[j];
    for (let k = 0; k < renum; k++) {
      array[index++] = j;
    }
  }

  return array;
};

export default BucketSort;
