import assert from 'assert'

/**
 * Will return a pass if `actual` is false
 * @param actual
 */
const isFalse = (actual: boolean) => {
  assert.strictEqual(actual, false)
}

export default isFalse
