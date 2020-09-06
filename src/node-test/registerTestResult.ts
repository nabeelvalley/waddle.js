import { InMemory } from '../node-persist'
import TestStatus from './interfaces/TestStatus'
import Constant from './enums/Constant'

const registerTestResult = (name: string, file?: string) => {
  const db = new InMemory<TestStatus>(Constant.persistKey)

  db.insertOne({
    file,
    name,
    result: undefined,
  })
}

export default registerTestResult
