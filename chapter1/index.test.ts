import { describe, expect, test } from "@jest/globals";
import { greeting } from "./index";

describe("sum module", () => {
  test("calling greeting returns hello world", () => {
    expect(greeting()).toBe("hello world");
  });
});
