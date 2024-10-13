def fibonacci_sequence(n: int):
    """
    Generate the nth Fibonacci number.
    The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones,
    usually starting with 0 and 1. This function returns the nth number in the Fibonacci sequence.
    Parameters:
    n (int): The position in the Fibonacci sequence to retrieve. Must be a positive integer.
    Returns:
    int: The nth Fibonacci number. Returns None if n is less than 1.
    """
    if n < 1:
        return None 
    elif n == 1:
        return 0
  
    carry = 0
    current = 1
    for _ in range(n-1):
        current, carry = current + carry, current
    return current


if __name__ == "__main__":
    print("Fibonacci Sequence")
    print("Fibonacci Sequence 0", fibonacci_sequence(0) is None)
    print("Fibonacci Sequence 1", fibonacci_sequence(1) == 0)
    print("Fibonacci Sequence 2", fibonacci_sequence(2) == 1)
    print("Fibonacci Sequence 3", fibonacci_sequence(3) == 2)
    print("Fibonacci Sequence 4", fibonacci_sequence(4) == 3)
    print("Fibonacci Sequence 5", fibonacci_sequence(5) == 5)
    print("Fibonacci Sequence 6", fibonacci_sequence(6) == 8)
    print("Fibonacci Sequence 7", fibonacci_sequence(7) == 13)
    print("Fibonacci Sequence 8", fibonacci_sequence(8) == 21)
    print("Fibonacci Sequence 9", fibonacci_sequence(9) == 34)
    print("Fibonacci Sequence 10", fibonacci_sequence(10) == 55)
    