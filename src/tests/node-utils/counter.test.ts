import { test, assert } from '../../node-test'
import { Counter } from '../../node-utils'

test('counter start/stop', () => {
  const sut = new Counter()
  sut.stop()

  assert.isDefined(sut)
  assert.isDefined(sut.startTime)
  assert.isDefined(sut.stopTime)
  assert.isEqual(sut.laps.length, 0)
  assert.isEmptyArray(sut.laps)
  assert.isGreaterThanOrEqual(sut.getDuration(), 0)
})

test('counter laps', () => {
  const sut = new Counter()
  sut.lap()

  assert.isNonEmptyArray(sut.laps)
  assert.isEqual(sut.laps.length, 1)
})

test('timer run duration', () => {
  const sut = new Counter()

  const duration = 2000

  const d = new Date().getTime() + duration
  while (new Date().getTime() <= d) {}

  sut.stop()

  const actual = sut.getDuration()

  assert.isGreaterThanOrEqual(actual, duration)
})

export default 'counter-test'
