module.exports = {
  // Pricing mode
  pricingModel: "meter", // "meter" | "driver_offer" | "fixed"

  // Base rates
  perKmRate: 4,
  perMinuteRate: 0.5,

  // Compensation levy
  compensationLevyEnabled: true,
  compensationLevyType: "fixed", // "fixed" or "percent"
  compensationLevyValue: 5,

  // Regulatory fee
  regulatoryFeeEnabled: false,
  regulatoryFeeAmount: 0,

  // Platform fee
  platformFeeEnabled: false,
  platformFeeAmount: 0,

  // Minimum fare safeguard
  priceRangeEnabled: true,
  minFare: 10
};