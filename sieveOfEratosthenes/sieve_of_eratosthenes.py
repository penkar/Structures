def sieve_of_eratosthenes(n: int) -> int:
    """
    Implements the Sieve of Eratosthenes algorithm to count the number of prime numbers up to a given integer n.

    Args:
        n (int): The upper limit (inclusive) to count prime numbers.

    Returns:
        int: The number of prime numbers up to and including n.

    Example:
        >>> sieve_of_eratosthenes(10)
        For  10 4  primes were found.
        4

    Note:
        The function prints the number of primes found for the given n.
    """
    if n < 2: return 0 

    numbers = [True] * (n + 1)
    for i in range(2, n + 1):
        if numbers[i]:
            for j in range(i * 2, n + 1, i):
                numbers[j] = False

    count = len([x for x in numbers if x == True])

    print("For ", n, count - 2, " primes were found.")
    return count - 2


if __name__ == "__main__":
    print("Sieve of Eratosthenes")
    n = int(input("Enter a number greater than 1: ") or 0) or 1000000

    sieve_of_eratosthenes(n)