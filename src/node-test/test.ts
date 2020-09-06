import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import { Counter } from '../node-utils'
import registerTestResult from './registerTestResult'
import updateTestResult from './updateTestResult'

const log = new PreconfiguredLogger()

/**
 * Used to run a test, use `testAsync` to test async code
 * @param name
 * @param run
 */
const test = (name: string, run: () => void) => {
  const counter = new Counter()

  registerTestResult(name)

  log.info(`${getHorizontalLine()}\n[start]: ${name}`)

  try {
    run()
    counter.stop()
    updateTestResult({ name, result: true, duration: counter.getDuration() })
  } catch (error) {
    log.log(error)
    counter.stop()
    updateTestResult({
      name,
      error,
      result: false,
      duration: counter.getDuration(),
    })
  }
}

export default test
