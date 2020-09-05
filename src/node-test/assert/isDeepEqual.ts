import assert from 'assert'

/**
 * Will return a pass if the assertion is strictly deep equal
 * @param actual
 */
const isDeepEqual = <T = any>(actual: T, expected: T) => {
  assert.deepStrictEqual<T>(actual, expected)
}

export default isDeepEqual
