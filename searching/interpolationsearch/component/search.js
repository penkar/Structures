export default function InterpolationSearch(array, term) {
  if(term < array[0] || term > array[array.length -1] || !Array.isArray(array) || !array.length || !Number.isInteger(term)) {
    return false;
  }

  let lowIndex = 0, hiIndex = array.length - 1;
  let delta = Math.max(array[hiIndex] - array[lowIndex], 1);
  let position = Math.min(hiIndex, parseInt(((term - array[lowIndex]) / delta) * (hiIndex - lowIndex)) + lowIndex);
  
  while(true) {
    if(array[position] === term || delta === 1) {
      break;
    } else if(array[position] < term) {
      lowIndex = position + 1;
    } else {
      hiIndex = position - 1;
    }
    delta = Math.max(array[hiIndex] - array[lowIndex], 1);
    position = Math.min(hiIndex, Math.max(lowIndex, parseInt(((term - array[lowIndex]) / delta) * (hiIndex - lowIndex)) + lowIndex));
  }

  if(array[position] === term) {
    return position;
  } else {
    return false;
  }
}