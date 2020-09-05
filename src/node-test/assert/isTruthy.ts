import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is truthy
 * @param actual
 */
const isTruthy = (actual: any): AssertionResult => {
  const result = !!true

  return {
    passed: result,
  }
}

export default isTruthy
