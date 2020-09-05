import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is greater than the comparer
 * @param actual
 */
const isGreaterThan = <T = any>(actual: T, comparer: T): AssertionResult => {
  const result = actual > comparer

  return {
    passed: result,
  }
}

export default isGreaterThan
