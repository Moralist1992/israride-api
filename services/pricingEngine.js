const { calculateMeterFare } = require('./meterPricing');
const { applyFees } = require('./feePipeline');

function calculatePrice(params, policy) {
  const { pricingModel } = policy;

  let baseFare;

  // --- Meter pricing ---
  if (pricingModel === "meter") {
    baseFare = calculateMeterFare(params, policy);
  }

  // --- Fixed pricing ---
  else if (pricingModel === "fixed") {
    if (params.fixedFare == null) {
      throw new Error("fixedFare is required for fixed mode");
    }
    baseFare = params.fixedFare;
  }

  // --- Unsupported mode ---
  else {
    throw new Error(`Unsupported pricingModel: ${pricingModel}`);
  }

  // --- Apply fees ---
  return applyFees(baseFare, policy);
}

module.exports = { calculatePrice };