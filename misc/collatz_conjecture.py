def collatz_conjecture(n):
    """
    Computes the number of steps required to reach 1 in the Collatz conjecture sequence starting from a given integer.

    The Collatz conjecture sequence is defined as follows:
    - If the number is even, divide it by 2.
    - If the number is odd, multiply it by 3 and add 1.
    - Repeat the process until the number becomes 1.

    Parameters:
    n (int): The starting integer for the Collatz sequence.

    Returns:
    int: The number of steps required to reach 1.
    """
    count = 1
    while n != 1:
        count += 1
        if n % 2 == 0:
            n = n // 2
        else:
            n = n * 3 + 1
    return count    
    

if __name__ == "__main__":
    print("Collatz Conjecture")
    print(1, collatz_conjecture(1))
    print(2, collatz_conjecture(2))
    print(3, collatz_conjecture(3))
    print(4, collatz_conjecture(4))
    print(5, collatz_conjecture(5))
    print(6, collatz_conjecture(6))
    print(7, collatz_conjecture(7))
    print(8, collatz_conjecture(8))
    print(9, collatz_conjecture(9))
    print(10, collatz_conjecture(10))
    print(20, collatz_conjecture(20))
    print(30, collatz_conjecture(30))
    print(40, collatz_conjecture(40))
    print(50, collatz_conjecture(50))
    print(60, collatz_conjecture(60))
    print(70, collatz_conjecture(70))
    print(80, collatz_conjecture(80))
    print(90, collatz_conjecture(90))
    print(99, collatz_conjecture(99))