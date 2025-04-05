const seededRandom = (seed) => {
  const m = 2 ** 35 - 31; // Large prime number for modulus
  const a = 185852; // Multiplier
  let s = seed % m; // Initial seed value

  // Returns a pseudo-random number between 0 and 1
  return () => (s = (s * a) % m) / m;
};

// Function to get available times for a given date
const getAvailableTimes = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  // Loop through hours 17 to 23 (5 PM to 11 PM)
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ':00');
    if (random() < 0.5) result.push(i + ':30');
  }

  // Return array of available times
  return result;
};

// Function to simulate submitting a time
const submitTime = (formData) => true;

export { getAvailableTimes, submitTime };
