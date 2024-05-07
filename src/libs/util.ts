function lerp(min: number, max: number, input: number): number {
  let clampedInput = Math.min(Math.max(input, 0), 1)

  return min * (1 - clampedInput) + max * clampedInput
}

function steppedLerp(range: number[], input: number): number {
  let clampedInput = Math.min(Math.max(input, 0), 1)
  let interpolatedValue = lerp(1, range.length, clampedInput)
  let clampedInterpolatedValue = Math.min(
    Math.max(interpolatedValue, 1),
    range.length
  )

  return range[Math.round(clampedInterpolatedValue) - 1]
}

export { lerp, steppedLerp }
