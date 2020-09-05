import { PreconfiguredLogger } from '../node-logger'

const log = new PreconfiguredLogger()

const test = (label: string, run: () => void) => {
  try {
    run()
    log.info(`test passed: ${label}`)
  } catch (error) {
    log.error(`test failed: ${label}`)
    log.log(error)
  }
}

export default test
