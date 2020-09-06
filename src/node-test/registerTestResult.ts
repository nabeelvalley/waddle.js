import { InMemory } from '../node-persist'
import TestStatus from './interfaces/TestStatus'
import Constant from './enums/Constant'

const registerTestResult = (name: string) => {
  const db = new InMemory<TestStatus>(Constant.persistKey)

  db.insertOne({
    name,
    result: undefined,
  })
}

export default registerTestResult
