function roundToHour(date) {
  p = 60 * 60 * 1000; // milliseconds in an hour
  return new Date(Math.round(date.getTime() / p ) * p);
}

module.exports = {
	roundToHour: roundToHour,
};
