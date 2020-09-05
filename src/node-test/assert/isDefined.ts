import assert, { AssertionError } from 'assert'

import AssertionResult from '../interfaces/AssertionResult'

/**
 * Will return a pass if the assertion is strictly deep equal
 * @param actual
 */
const isDefined = <T = any>(actual: T): AssertionResult => {
  const result = typeof actual !== 'undefined'

  return {
    passed: result,
  }
}

export default isDefined
