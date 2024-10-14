"""
This module contains an implementation of the bucket sort algorithm.
"""

from typing import List

def bucketsort(array: List[int]):
    """
    Sorts an array of integers using the bucket sort algorithm.

    Args:
        array (List[int]): The list of integers to be sorted.

    Returns:
        List[int]: The sorted list of integers.
    """
    max_num = array[0]
    min_num = array[0]
    for i in array:
        min_num = min(i, min_num)
        max_num = max(i, max_num)

    buckets = [0] * (max_num - min_num + 1)
    for i in array:
        buckets[i - min_num] += 1

    return_array = []
    for idx, val in enumerate(buckets):
        return_array.extend([idx + min_num] * val)
    return return_array


if __name__ == "__main__":
    print("Bucket  Sort Array")
    print(bucketsort([88,99,77,66,55,44,33,22,11,1,2,3,4,5,6,7,8,9,0]))
