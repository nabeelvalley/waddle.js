import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import { Counter } from '../node-utils'
import registerTestResult from './registerTestResult'
import updateTestResult from './updateTestResult'

const log = new PreconfiguredLogger()

/**
 * Used to test an async function. Will wait for `run` to complete, use `test`
 * to test sync code
 * @param label
 * @param run
 */
const testAsync = async (label: string, run: () => Promise<void>) => {
  const counter = new Counter()

  registerTestResult(label)
  const logLine = () => {
    log.info(`${getHorizontalLine()}`)
  }

  try {
    await run()
    counter.stop()
    logLine()
    log.info(`[pass]: ${label}`)
    updateTestResult(label, true, counter.getDuration())
  } catch (error) {
    logLine()
    log.error(`[fail]: ${label}`)
    log.log(error)
    counter.stop()
    updateTestResult(label, false, counter.getDuration())
  }
}

export default testAsync
