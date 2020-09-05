import assert, { AssertionError } from 'assert'

import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if the assertion is strictly equal
 * @param actual
 */
const isEqual = <T = any>(actual: T, expected: T): AssertionResult => {
  try {
    assert.strictEqual<T>(actual, expected)
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

export default isEqual
