export const seasonalGuide = {
  rateUnit: "night" as const,
  currency: "EUR" as const,
  seasons: [
    { name: "Low season", mood: "A quieter coast", description: "Unhurried beach walks and time to enjoy the local rhythm.", nightlyRate: { min: 100, max: 150 } },
    { name: "Mid season", mood: "Room to slow down", description: "Long lunches, sea air and easy days exploring Chiclana and Roche.", nightlyRate: { min: 150, max: 250 } },
    { name: "High season", mood: "The height of summer", description: "Sun-filled days on the Atlantic and evenings spent outdoors.", nightlyRate: { min: 200, max: 300 } },
  ],
};

export const formatNightlyRate = (rate: { min: number; max: number }) =>
  `€${rate.min} – €${rate.max} per night`;
