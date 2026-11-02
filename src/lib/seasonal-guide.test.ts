import { describe, expect, it } from "vitest";
import { seasonalGuide } from "./seasonal-guide";

describe("general seasonal price guide", () => {
  it("uses nightly rather than weekly rates", () => {
    expect(seasonalGuide.rateUnit).toBe("night");
  });

  it("shows the owner-supplied nightly price ranges", () => {
    expect(seasonalGuide.seasons.map((season) => season.nightlyRate)).toEqual([
      { min: 100, max: 150 },
      { min: 150, max: 250 },
      { min: 200, max: 300 },
    ]);
  });
});
