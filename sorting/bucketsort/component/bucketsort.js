const BucketSort = (array) => {
  let tallest = array[0], shortest = array[0], nums = {}, array2 = [];
  for(var i = 0; i < array.length; i++){
    var num = array[i];
    nums[num] = ((nums[num] || 0) + 1);
    if(num > tallest){
      tallest = num;
    } else if(num < shortest){
      shortest = num;
    }
  }
  for(var j = shortest; j <= tallest; j++){
    var renum = nums[j];
    for(var k = 0; k < renum; k++){
      array2.push(j);
    }
  }
  return array2;
}
export default BucketSort
