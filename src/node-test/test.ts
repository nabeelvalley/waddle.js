import { PreconfiguredLogger } from '../node-logger'
import { Counter } from '../node-utils'

const log = new PreconfiguredLogger()

const test = (label: string, run: () => void) => {
  const counter = new Counter()

  try {
    run()
    log.info(`${counter.stop().getDuration()} ms\t passed: ${label}`)
  } catch (error) {
    log.error(`${counter.stop().getDuration()} ms\t failed: ${label}`)
    log.warn(error)
  }
}

export default test
