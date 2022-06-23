type Point = {
  x: number;
  y: number;
}

export function test({x, y}: Point) {
  return x * y;
}
