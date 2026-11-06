import { describe, expect, it } from "vitest";
import { eclipse2027 } from "./eclipse";

describe("2027 eclipse facts", () => {
  it("keeps the displayed totality length in step with the seconds value", () => {
    expect(eclipse2027.cadizTotalitySeconds).toBe(174);
    expect(eclipse2027.cadizTotalityLength).toBe("2 min 54 s");
  });
});
