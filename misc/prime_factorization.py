"""
Module for prime factorization.
"""

def primes_factorization(n):
    """
    Compute the prime factorization of a given number n.
    """
    n = max(n, 0)
    if n < 3:
        return [n]
    factors = []
    for i in range(2, n):
        while n % i == 0:
            factors.append(i)
            n = n // i
    return factors


if __name__ == "__main__":
    print("Prime Factors List")
    print(primes_factorization(100))
    print(primes_factorization(2 * 2 * 2 * 5 * 7 * 11))
    print(primes_factorization(73 * 97 * 101))
