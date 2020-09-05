import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is greater than or equal to comparer
 * @param actual
 */
const isGreaterThanOrEqual = <T = any>(
  actual: T,
  comparer: T
): AssertionResult => {
  const result = actual >= comparer

  return {
    passed: result,
  }
}

export default isGreaterThanOrEqual
