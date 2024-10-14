"""
This module contains an implementation of the quicksort algorithm.
"""

from typing import List


def quicksort(array: List[int]):
    """
    Sorts an array of integers using the quicksort algorithm.

    Args:
      array (List[int]): The list of integers to be sorted.

    Returns:
      List[int]: A new list containing the sorted integers.

    The function works by selecting a pivot element from the array and partitioning
    the other elements into three sub-arrays: those less than the pivot, those equal
    to the pivot, and those greater than the pivot. It then recursively sorts the
    sub-arrays and concatenates them to produce the final sorted array.
    """
    if len(array) < 2:
        return array

    pivot = array[len(array) // 2]
    lesser = []
    greater = []
    equals = []

    for i in array:
        if pivot == i:
            equals.append(i)
        elif pivot > i:
            lesser.append(i)
        else:
            greater.append(i)

    return quicksort(lesser) + equals + quicksort(greater)


if __name__ == "__main__":
    print("Bucket  Sort Array")
    print(quicksort([88,99,77,66,55,44,33,22,11,1,2,3,4,5,6,7,8,9,0]))
