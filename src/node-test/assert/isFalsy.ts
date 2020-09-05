import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is falsey
 * @param actual
 */
const isFalsy = <T = any>(actual: T): AssertionResult => {
  const result = !actual

  return {
    passed: result,
  }
}

export default isFalsy
