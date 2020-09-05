import assert from 'assert'

/**
 * Will return a pass if the assertion is strictly equal
 * @param actual
 */
const isEqual = <T = any>(actual: T, expected: T) => {
  assert.strictEqual<T>(actual, expected)
}

export default isEqual
