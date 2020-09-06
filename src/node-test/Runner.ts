import { Counter } from '../node-utils'
import TestStatus from './interfaces/TestStatus'
import Constant from './enums/Constant'
import { InMemory } from '../node-persist'
import { PreconfiguredLogger } from '../node-logger'

class Runner {
  private _counter: Counter
  private _closeHandler?: (results: TestStatus[]) => void
  private _logger: PreconfiguredLogger

  constructor(closeHandler?: (results: TestStatus[]) => void) {
    this._counter = new Counter()
    this._logger = new PreconfiguredLogger()

    this._closeHandler = closeHandler

    this._start()
    process.on('exit', this._close.bind(this))
  }

  private _start() {
    this._logger.log('test runner started')
  }

  private _close() {
    this._counter.stop()
    const duration = this._counter.getDuration()

    const status = this.getTestStatus()

    this._logger.info(
      `${status.filter(s => s.result === true).length}/${
        status.length
      } tests passed in ${duration}ms`
    )

    if (typeof this._closeHandler !== 'undefined') {
      const testStatus = status

      this._closeHandler(testStatus)
    }
  }

  getTestStatus() {
    const runDb = new InMemory<TestStatus>(Constant.persistKey)

    return runDb.getAll()
  }
}

export default Runner
