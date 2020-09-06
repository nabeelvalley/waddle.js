import { InMemory } from '../node-persist'
import TestStatus from './interfaces/TestStatus'
import Constant from './enums/Constant'
import printTestSummary from './printTestSummary'

const updateTestResult = (statusUpdate: TestStatus) => {
  const db = new InMemory<TestStatus>(Constant.persistKey)

  const index = db.findIndex(t => t.name === statusUpdate.name)

  if (typeof index !== 'undefined') {
    db.updateOne(index, statusUpdate)
    printTestSummary()
  } else {
    throw new Error(`Test with name ${statusUpdate.name} not found`)
  }
}

export default updateTestResult
