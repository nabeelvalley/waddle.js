import AssertionResult from '../types/AssertionResult'

/**
 * Will return a pass if `actual` is falsey
 * @param actual
 */
const isFalsy = (actual: any): AssertionResult => {
  const result = !actual

  return {
    passed: result,
  }
}

export default isFalsy
