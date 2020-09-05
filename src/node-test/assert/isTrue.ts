import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if `actual` is true
 * @param actual
 */
const isTrue = (actual: boolean): AssertionResult => {
  const result = actual === true

  return {
    passed: result,
  }
}

export default isTrue
