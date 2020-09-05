import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is less than the comparer
 * @param actual
 */
const isLessThan = <T = any>(actual: T, comparer: T): AssertionResult => {
  const result = actual < comparer

  return {
    passed: result,
  }
}

export default isLessThan
