def bubble_sort(array):
    """
    Sorts an array of ints in ascending order using the bubble sort algorithm.

    Args:
      array (list): A list of ints to be sorted.

    Returns:
      list: The sorted list in ascending order.

    Example:
      >>> bubble_sort([64, 34, 25, 12, 22, 11, 90])
      [11, 12, 22, 25, 34, 64, 90]
    """
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        for i in range(1, len(array)):
            x = array[i - 1]
            y = array[i]
            if y < x:
                array[i - 1] = y
                array[i] = x
                is_sorted = False
    return array


if __name__ == "__main__":
    input_array = [99,88,77,66,55,44,33,22,11,1,2,3,4,5,6,7,8,9]
    print("Bubble Sort")
    sorted_array = bubble_sort(input_array.copy())
    print("SortedArray", sorted_array)
