import {expect, it} from "@jest/globals";
import add from "./index.ts";

it('should return 3', function () {

  const x = 1;
  const y = 2;

  expect(add(1, 2)).toBe(3);
});