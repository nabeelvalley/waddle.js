import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import { Counter } from '../node-utils'
import registerTestResult from './registerTestResult'
import updateTestResult from './updateTestResult'
import logTestStatus from './logTestStatus'
import { count } from 'console'

const log = new PreconfiguredLogger()

const test = (label: string, run: () => void) => {
  const counter = new Counter()

  registerTestResult(label)

  log.info(`${getHorizontalLine()}\n[start]: ${label}`)

  try {
    run()
    counter.stop()
    updateTestResult(label, true, counter.getDuration())
  } catch (error) {
    log.log(error)
    counter.stop()
    updateTestResult(label, false, counter.getDuration())
  }
}

export default test
