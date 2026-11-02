import { describe, expect, it } from "vitest";
import { seasonalGuide } from "./seasonal-guide";

describe("general seasonal price guide", () => {
  it("uses nightly rather than weekly rates", () => {
    expect(seasonalGuide.rateUnit).toBe("night");
  });

  it("does not invent prices before the owner supplies them", () => {
    expect(seasonalGuide.seasons.map((season) => season.nightlyRate)).toEqual([null, null, null]);
  });
});