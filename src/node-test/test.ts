import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import { Counter } from '../node-utils'
import registerTestResult from './registerTestResult'
import updateTestResult from './updateTestResult'

const log = new PreconfiguredLogger()

/**
 * Used to run a test, use `testAsync` to test async code
 * @param label
 * @param run
 */
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
