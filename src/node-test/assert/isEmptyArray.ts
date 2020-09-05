import AssertionResult from '../interfaces/AssertionResult'
import isDeepEqual from './isDeepEqual'
import { arr } from '../empty'

/**
 * Will return a pass if `actual` is an empty array: `[]`
 * @param actual
 */
const isEmptyArray = <T = any>(actual: T[]): AssertionResult => {
  return isDeepEqual<T[]>(actual, arr)
}

export default isEmptyArray
