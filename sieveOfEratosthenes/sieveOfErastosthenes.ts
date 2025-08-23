const sieveOfEratosthenes = (num: number) => {
  const primes: boolean[] = Array(num + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }

  const primeList = primes
    .map((value, index) => (value ? index : -1))
    .filter((index) => index !== -1);

  return primeList;
};
