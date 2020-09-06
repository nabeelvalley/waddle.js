import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import { Counter } from '../node-utils'
import registerTestResult from './registerTestResult'
import updateTestResult from './updateTestResult'

const log = new PreconfiguredLogger()

/**
 * Used to test an async function. Will wait for `run` to complete, use `test`
 * to test sync code
 * @param name
 * @param run
 */
const testAsync = async (name: string, run: () => Promise<void>) => {
  const counter = new Counter()

  registerTestResult(name)
  const logLine = () => {
    log.info(`${getHorizontalLine()}`)
  }

  try {
    await run()
    counter.stop()
    logLine()
    log.info(`[pass]: ${name}`)
    updateTestResult({ name, result: true, duration: counter.getDuration() })
  } catch (error) {
    logLine()
    log.error(`[fail]: ${name}`)
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

export default testAsync
