function calculateMeterFare({ distanceKm, durationMin }, policy) {
  // --- Validation ---
  if (typeof distanceKm !== 'number' || typeof durationMin !== 'number') {
    throw new Error("distanceKm and durationMin must be numbers");
  }

  if (distanceKm < 0 || durationMin < 0) {
    throw new Error("Distance and duration must be non-negative");
  }

  // --- Rates from policy ---
  const perKm = policy.perKmRate;
  const perMin = policy.perMinuteRate;

  // --- Base calculation ---
  let fare = (distanceKm * perKm) + (durationMin * perMin);

  // --- Minimum fare safeguard ---
  if (policy.priceRangeEnabled && policy.minFare != null) {
    if (fare < policy.minFare) {
      fare = policy.minFare;
    }
  }

  // --- Normalize currency ---
  return Math.round(fare * 100) / 100;
}

module.exports = { calculateMeterFare };