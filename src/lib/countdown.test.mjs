// Run: node src/lib/countdown.test.mjs
import assert from "node:assert/strict";
import { breakdown } from "./countdown.js";

const zero = { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };

assert.deepEqual(breakdown(0), zero);

// Past dates clamp instead of counting up in negatives.
assert.deepEqual(breakdown(-99999), zero);

// 2d 3h 4m 5s
assert.deepEqual(
  breakdown(2 * 86400000 + 3 * 3600000 + 4 * 60000 + 5 * 1000),
  { days: 2, hours: 3, minutes: 4, seconds: 5, done: false },
);

// Sub-second remainders round down and still count as not-done.
assert.equal(breakdown(1999).seconds, 1);
assert.equal(breakdown(1).done, false);

console.log("countdown ok");
