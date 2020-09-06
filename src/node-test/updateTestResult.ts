import { InMemory } from '../node-persist'
import TestStatus from './interfaces/TestStatus'
import Constant from './enums/Constant'
import printTestSummary from './printTestSummary'
import logTestStatus from './logTestStatus'

const updateTestResult = (name: string, result: boolean, duration?: number) => {
  const db = new InMemory<TestStatus>(Constant.persistKey)

  const index = db.findIndex(t => t.name === name)

  if (typeof index !== 'undefined') {
    db.updateOne(index, { result, duration })
    printTestSummary()
  } else {
    throw new Error(`Test with name ${name} not found`)
  }
}

export default updateTestResult
