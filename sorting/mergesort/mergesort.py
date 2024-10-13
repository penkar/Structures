def merge_sort(array):
    """
    Sorts an array using the merge sort algorithm.

    Parameters:
    array (list): The list of ints to be sorted.

    Returns:
    list: A new list containing the sorted ints.
    """
    if len(array) < 2:
        return array
    if len(array) == 2:
        if array[0] < array[1]:
            return array
        else:
            return [array[1], array[0]]

    return_array = []
    mid = len(array) // 2
    new_array_a = merge_sort(array[:mid])
    new_array_b = merge_sort(array[mid:])

    a = 0
    b = 0

    while a < len(new_array_a) and b < len(new_array_b):
        if new_array_a[a] < new_array_b[b]:
            return_array.append(new_array_a[a])
            a += 1
        else:
            return_array.append(new_array_b[b])
            b += 1

    while a < len(new_array_a):
        return_array.append(new_array_a[a])
        a += 1

    while b < len(new_array_b):
        return_array.append(new_array_b[b])
        b += 1

    return return_array


if __name__ == "__main__":
    input_array = [99,88,77,66,55,44,33,22,11,1,2,3,4,5,6,7,8,9]
    print("Merge Sort")
    sorted_array = merge_sort(input_array.copy())
    print("SortedArray", sorted_array)
