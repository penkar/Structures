const BucketSort = (array) => {
  let tallest = array[0], shortest = array[0], nums = {}, array2 = [];
  for(let i = 0; i < array.length; i++){
    let num = array[i];
    nums[num] = ((nums[num] || 0) + 1);
    if(num > tallest){
      tallest = num;
    } else if(num < shortest){
      shortest = num;
    }
  }
  for(let j = shortest; j <= tallest; j++){
    let renum = nums[j];
    for(let k = 0; k < renum; k++){
      array2.push(j);
    }
  }
  return array2;
}
export default BucketSort
