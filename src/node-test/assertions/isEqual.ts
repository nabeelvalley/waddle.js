import assert, { AssertionError } from 'assert'

import AssertionResult from '../types/AssertionResult'

/**
 * Will return a pass if the assertion is strictly equal
 * @param actual
 */
const isEqual = <T>(actual: T, expected: T): AssertionResult => {
  let result: boolean

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
