import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import { Counter } from '../node-utils'

const log = new PreconfiguredLogger()

const test = (label: string, run: () => void) => {
  const counter = new Counter()

  log.info(`${getHorizontalLine()}\nstarting: ${label}`)

  try {
    run()
    log.success(`${counter.stop().getDuration()} ms\t passed: ${label}`)
  } catch (error) {
    log.error(`${counter.stop().getDuration()} ms\t failed: ${label}`)
    log.log(error)
  }
}

export default test
