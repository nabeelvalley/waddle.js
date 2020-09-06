import { Counter } from '../node-utils'
import logTestStatus from './logTestStatus'
import TestStatus from './interfaces/TestStatus'
import Constant from './enums/Constant'
import { InMemory } from '../node-persist'

class Runner {
  private _counter: Counter
  private _closeHandler?: (results: TestStatus[]) => void

  constructor(closeHandler?: (results: TestStatus[]) => void) {
    this._counter = new Counter()
    this._closeHandler = closeHandler
    this._start()
    process.on('exit', this._close.bind(this))
  }

  private _start() {
    logTestStatus({
      name: 'test run started',
    })
  }

  private _close() {
    this._counter.stop()
    const duration = this._counter.getDuration()

    logTestStatus({
      result: true,
      name: 'all tests completed',
      duration,
    })

    if (typeof this._closeHandler !== 'undefined') {
      const testStatus = this.getTestStatus()

      this._closeHandler(testStatus)
    }
  }

  getTestStatus() {
    const runDb = new InMemory<TestStatus>(Constant.persistKey)

    return runDb.getAll()
  }
}

export default Runner
