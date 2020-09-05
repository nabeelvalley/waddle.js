import { test, assert } from '@node-test'
import { Counter } from '@node-utils'

test('counter start/stop', () => {
  const sut = new Counter()

  assert.isDefined(sut)
  assert.isDefined(sut.startTime)
  assert.isDefined(sut.stopTime)
  assert.isEqual(sut.laps.length, 0)
  assert.isEmptyArray(sut.laps)
})

test('counter laps', () => {
  const sut = new Counter()
  sut.lap()

  assert.isNonEmptyArray(sut.laps)
  assert.isEqual(sut.laps.length, 1)
})

export default 'counter-test'
