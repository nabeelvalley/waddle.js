import { test, assert } from '../../node-test'

test('object comparison fails', () => {
  const actual = { data: 1, label: 'actual' }
  const expected = { data: 2, label: 'expected' }
  assert.isDeepEqual(actual, expected)
})

export default 'throw-error-test'