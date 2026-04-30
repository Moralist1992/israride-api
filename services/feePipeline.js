function applyFees(baseFare, policy) {
  // --- Validation ---
  if (typeof baseFare !== 'number') {
    throw new Error("baseFare must be a number");
  }

  if (baseFare < 0) {
    throw new Error("baseFare must be non-negative");
  }

  let total = baseFare;

  const breakdown = {
    baseFare,
    compensationLevy: 0,
    regulatoryFee: 0,
    platformFee: 0,
    total: 0,
  };

  // --- Compensation Levy ---
  if (policy.compensationLevyEnabled) {
    switch (policy.compensationLevyType) {
      case "fixed":
        breakdown.compensationLevy = policy.compensationLevyValue;
        break;

      case "percent":
        breakdown.compensationLevy =
          baseFare * (policy.compensationLevyValue / 100);
        break;

      default:
        throw new Error("Invalid compensationLevyType");
    }

    total += breakdown.compensationLevy;
  }

  // --- Regulatory Fee ---
  if (policy.regulatoryFeeEnabled) {
    breakdown.regulatoryFee = policy.regulatoryFeeAmount || 0;
    total += breakdown.regulatoryFee;
  }

  // --- Platform Fee ---
  if (policy.platformFeeEnabled) {
    breakdown.platformFee = policy.platformFeeAmount || 0;
    total += breakdown.platformFee;
  }

  // --- Final total ---
  breakdown.total = Math.round(total * 100) / 100;

  return breakdown;
}

module.exports = { applyFees };