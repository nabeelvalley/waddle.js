import AssertionResult from '../types/AssertionResult'

/**
 * Will return a pass if `actual` is true
 * @param actual 
 */
const isTrue = (actual: any): AssertionResult => {
  const result = actual === true

  return {
    passed: result,
  }
}

export default isTrue
