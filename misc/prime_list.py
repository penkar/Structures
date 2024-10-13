"""
Module for prime listing.
"""

def primes_list(n):
    """
    Compute the prime listing of a given number n.
    """
    primes = [2]
    for i in range(3, n + 1):
        is_prime = True
        for j in primes:
            if j > (i // 2):
                break
            if i % j == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(i)
    return primes


if __name__ == "__main__":
    print("Prime List")
    print(primes_list(100))
