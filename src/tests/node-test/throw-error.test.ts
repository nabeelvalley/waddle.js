import { test } from '../../node-test'

test('(should fail) throws error', () => {
  throw new Error('this test is meant to fail')
})

export default 'throw-error-test'
