function roadRadar(driverSpeed, area) {
  let speedLimit = 0;

  switch (area) {
    case 'motorway':speedLimit= 130; break;
    case 'interstate':speedLimit= 90; break;
    case 'city':speedLimit= 50; break;
    case 'residential':speedLimit = 20; break;
  }

  if (driverSpeed <= speedLimit){
    console.log(`Driving ${driverSpeed} km/h in a ${speedLimit} zone`);
  }

  let speedDifference = Math.abs( driverSpeed - speedLimit);
  let status = '';

  if(speedDifference <= 20){
    status = 'speeding'
  }else if (speedDifference <= 40){
    status = 'excessive speeding'
  }else{
    status = ' reckless driving'
  }

  if(driverSpeed > speedLimit){
    console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
  }
  

}
