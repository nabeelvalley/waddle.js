import { InMemory } from '../node-persist'
import TestStatus from './interfaces/TestStatus'
import Constant from './enums/Constant'
import { PreconfiguredLogger, getHorizontalLine } from '../node-logger'
import logTestStatus from './logTestStatus'

const printTestSummary = () => {
  const log = new PreconfiguredLogger()
  const db = new InMemory<TestStatus>(Constant.persistKey)

  log.info(`${getHorizontalLine()}\nTest Status`)

  db.getAll().map(r => {
    logTestStatus(r)
  })
}

export default printTestSummary
