def fizzbuzz(start = 1, finish = 100):
    """
    Prints numbers from 1 to n with the following substitutions:
    - For multiples of 3, prints "Fizz" instead of the number.
    - For multiples of 5, prints "Buzz" instead of the number.
    - For multiples of 7, prints "Pop" instead of the number.
    - For multiples of both 3 and 5, prints "FizzBuzz".
    - For multiples of both 3 and 7, prints "FizzPop".
    - For multiples of both 5 and 7, prints "BuzzPop".
    - For multiples of 3, 5, and 7, prints "FizzBuzzPop".
    
    Args:
      n (int): The upper limit of the range to print.
    
    Returns:
      None
    """
    if n < 1: return None
    for i in range(1, n + 1):
        fizz = "Fizz" if i % 3 == 0 else ""
        buzz = "Buzz" if i % 5 == 0 else ""
        pop = "Pop" if i % 7 == 0 else ""
        print((fizz + buzz + pop) or str(i))

    

if __name__ == "__main__":
    print("FizzBuzzPop")
    n = int(input("Enter a number greater than 1: ") or "100")
    if n <= 1:
        print("Number must be greater than 1.")
        exit(1)

    fizzbuzz(start=1, finish=n)