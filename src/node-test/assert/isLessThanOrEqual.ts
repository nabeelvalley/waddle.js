import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is less than or equal to the comparer
 * @param actual
 */
const isLessThanOrEqual = <T = any>(
  actual: T,
  comparer: T
): AssertionResult => {
  const result = actual <= comparer

  return {
    passed: result,
  }
}

export default isLessThanOrEqual
