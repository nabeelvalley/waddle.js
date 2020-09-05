import assert, { AssertionError } from 'assert'

import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if the assertion is strictly deep equal
 * @param actual
 */
const isDeepEqual = <T = any>(actual: T, expected: T): AssertionResult => {
  try {
    assert.deepStrictEqual<T>(actual, expected)
    return {
      passed: true,
    }
  } catch (error) {
    return {
      passed: false,
      error: error,
    }
  }
}

export default isDeepEqual
