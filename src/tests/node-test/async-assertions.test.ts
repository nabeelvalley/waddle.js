import { testAsync, assert } from '../../node-test'

const asyncAddPass = (x: number, y: number) => {
  return new Promise(resolve => {
    resolve(x + y)
  })
}

const asyncAddFail = (x: number, y: number) => {
  return new Promise((_, reject) => {
    reject(new Error('asyncAddFail: rejecting with an error'))
  })
}

testAsync('async test pass', async () => {
  const result = await asyncAddPass(1, 1)

  assert.isDeepEqual(result, 2)
})

testAsync('(should fail) async test fail', async () => {
  const result = await asyncAddFail(1, 1)

  assert.isDeepEqual(result, 2)
})

export default 'async-assertion tests'
