/*
Kyu 6
https://www.codewars.com/kata/566be96bb3174e155300001b
You throw a ball vertically upwards with an initial speed v (in km per hour). The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity (g ~ 9.81 m/s**2). A device is recording at every tenth of second the height of the ball. For example with v = 15 km/h the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenth of second and the second number the height in meter.

*/

// Input: Velocity (km/h)
// Maximum velocity at integer time interval
function max_ball(v_kmh) {
  function kiloHourToMetersSecond(kmh) {
    return kmh * 0.2777778;
  }
  function metersSecondToKiloHour(ms) {
    return ms * 3.6;
  }
  function calcVelocity(initialVeloMS, t) {
    return initialVeloMS * t - 0.5 * initialVeloMS * t * t;
  }
  // Array of dict values (time, velo)
  let time_series = [0];
  let t = 0;
  // do while loop to construct time series up until it peaks
  do {
    t = t + 1;
    time_series.push(calcVelocity(kiloHourToMetersSecond(v_kmh), t));
    console.log(time_series);
    console.log(`${time_series[t]} > ${time_series[t - 1]} ???`);
  } while (time_series[t] > time_series[t - 1]);

  return time_series[t - 1];
}

console.log(max_ball(15)); //should return 4

//console.log(max_ball(25)); //should return 7
