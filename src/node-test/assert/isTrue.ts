import assert from 'assert'

/**
 * Will return a pass if `actual` is true
 * @param actual
 */
const isTrue = (actual: boolean) => {
  assert.strictEqual(actual, true)
}

export default isTrue
