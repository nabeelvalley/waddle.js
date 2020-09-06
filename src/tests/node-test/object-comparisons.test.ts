import { test, assert } from '../../node-test'

test('(should fail) object comparison fails', () => {
  const actual = { data: 1, label: 'actual' }
  const expected = { data: 2, label: 'expected' }
  assert.isDeepEqual(actual, expected)
})

export default 'object-comparison tests'
