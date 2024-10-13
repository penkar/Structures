"""
This module contains functions to play the FizzBuzzPop game.
"""

def fizz_buzz_pop(number: int):
    """
    Returns a string based on the FizzBuzzPop rules for a given number.
    
    Args:
      number (int): The number to evaluate.
    
    Returns:
      str: The resulting string based on the FizzBuzzPop rules.
    """
    fizz = "Fizz" if number % 3 == 0 else ""
    buzz = "Buzz" if number % 5 == 0 else ""
    pop = "Pop" if number % 7 == 0 else ""
    return((fizz + buzz + pop) or str(number))

def fizz_buzz_pop_set(start = 1, finish = 100):
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
    print("S", start, finish, finish > 0 , start > 1 , start < finish)
    if finish > 1 and start > 0 and start < finish:
        for i in range(start, finish + 1):
            print(fizz_buzz_pop(i))


if __name__ == "__main__":
    print("FizzBuzzPop")
    n = int(input("Enter a number greater than 1: ") or "100")
    if n <= 1:
        print("Number must be greater than 1.")
        exit(1)

    fizz_buzz_pop_set(start=1, finish=n)
