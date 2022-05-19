function timeToWalk(steps,stepLength,speedKmH) {
  let distance = steps * stepLength;
  let speedInSeconds = speedKmH * 1000 / 3600;
  let rest = Math.floor(distance / 500)*60;
  let time = (distance / speedInSeconds)+rest;
  
  let hours = Math.floor(time/3600).toFixed(0).padStart(2, '0');
  let minutes = Math.floor(time/60).toFixed(0).padStart(2, '0');
  let seconds = Math.ceil(time % 60).toFixed(0).padStart(2, '0');

  console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(2564, 0.70, 5.5 )