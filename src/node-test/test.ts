import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import { Counter } from '../node-utils'

const log = new PreconfiguredLogger()

const test = (label: string, run: () => void) => {
  const counter = new Counter()

  log.info(`${getHorizontalLine()}\n[start]: ${label}`)

  try {
    run()
    log.success(`[pass]: ${counter.stop().getDuration()} ms\t  ${label}`)
  } catch (error) {
    log.error(`[fail]: ${counter.stop().getDuration()} ms\t  ${label}`)
    log.log(error)
  }
}

export default test
