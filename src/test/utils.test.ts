import { it, expect } from 'vitest'

export const checkEven = (a: number): boolean => {
  if (a % 2 === 0) {
    return true
  }
  return false
}

it('checkEven', () => {
  expect(checkEven(23)).toBe(false)
  expect(checkEven(56)).toBe(true)
  expect(checkEven(1235)).toBe(false)
})
