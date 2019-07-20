export default function pifrommontecarlo(n, radius = 1) {
  // Area of Pi r^2
  // We are looking at the top right quadrant of a circle, so `Area / 4 = Pi r^2 / 4`
  let total = 0;
  for(let i = 0; i < n; i++) {
    if(radius >= ((Math.random() ** 2 * radius) + (Math.random() ** 2 * radius)) ** 0.5) total+=1;
  }
  // Pi = Area / (r^2 * 4) 
  return total * 4 / n / (radius ** 0.5);
}