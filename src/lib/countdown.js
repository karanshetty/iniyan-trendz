// Plain JS so the self-check next door runs on bare `node`, no test runner.
const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

/**
 * Split a remaining-milliseconds value into d/h/m/s. Clamps at zero.
 * @param {number} msLeft
 */
export function breakdown(msLeft) {
  const ms = Math.max(0, msLeft);
  return {
    days: Math.floor(ms / DAY),
    hours: Math.floor((ms % DAY) / HOUR),
    minutes: Math.floor((ms % HOUR) / MIN),
    seconds: Math.floor((ms % MIN) / SEC),
    done: ms === 0,
  };
}
