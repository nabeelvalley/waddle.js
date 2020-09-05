import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is false
 * @param actual
 */
const isFalse = (actual: boolean): AssertionResult => {
  const result = actual === false

  return {
    passed: result,
  }
}

export default isFalse
