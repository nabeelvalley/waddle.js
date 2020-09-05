import AssertionResult from '../types/AssertionResult'

/**
 * Will return a pass if `actual` is false
 * @param actual
 */
const isFalse = (actual: any): AssertionResult => {
  const result = actual === false

  return {
    passed: result,
  }
}

export default isFalse
