export const toRadians = (angle) => angle * Math.PI / 180;
export const toDegrees = (angle) => angle * 180 / Math.PI;

export const hour2deg = (hour) => hour * 30;

export const min2deg = (min) => min * 6;

export const sec2deg = min2deg;

export const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

export const gray = (g) => rgb(g, g, g);

export function computeXY(cx, cy, r, rotation) {
  return {
    x: cx + Math.sin(toRadians(rotation)) * r,
    y: cy - Math.cos(toRadians(rotation)) * r
  };
}

// Calculate percentage on an absolute value
export function perc(x, percentage, natural = false) {
  const ret = x * percentage / 100;
  return natural ? Math.round(ret) : ret;
}
