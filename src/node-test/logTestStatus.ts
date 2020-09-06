import TestStatus from './interfaces/TestStatus'
import SingleLogger from '../node-logger/interfaces/SingleLogger'
import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'

const logTestStatus = (status: TestStatus) => {
  const logger = new PreconfiguredLogger()

  let prefix: 'busy' | 'pass' | 'fail' = 'busy'
  let log: SingleLogger = logger.warn

  if (status.result === true) {
    prefix = 'pass'
    log = logger.success
  }
  if (status.result === false) {
    prefix = 'fail'
    log = logger.error
  }

  if (typeof status.duration === 'undefined')
    log(`[${prefix}]:\t  ${status.name}`)
  else log(`[${prefix}]: ${status.duration} ms\t  ${status.name}`)
}

export default logTestStatus
