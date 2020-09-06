import { test, assert } from '../../node-test'
import { InMemory } from '../../node-persist'

test('in-memory-db persists across instances', () => {
  const key: string = Math.random().toString()
  const testStr: string = 'TEST'

  const sut1 = new InMemory(key)
  sut1.insertOne(testStr)

  const sut2 = new InMemory(key)

  assert.isDefined(sut1)
  assert.isDefined(sut2)

  assert.isNonEmptyArray(sut1.getAll())
  assert.isNonEmptyArray(sut2.getAll())

  assert.isEqual(sut1.getOne(0), testStr)
  assert.isEqual(sut2.getOne(0), testStr)
})

test('in-memory-db updates for primitives', () => {
  const key: string = Math.random().toString()
  const testStr: string = 'TEST'

  const sut = new InMemory<string>(key)
  sut.insertOne('INIT')

  sut.updateOne(0, testStr)

  assert.isDeepEqual(sut.getOne(0), testStr)
})
