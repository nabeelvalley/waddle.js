import AssertionResult from '../interfaces/AssertionResult'
import isDeepEqual from './isDeepEqual'
import { obj } from '../empty'

/**
 * Will return a pass if `actual` is an empty object: ``{}`
 * @param actual
 */
const isEmptyObject = <T = any>(actual: T): AssertionResult => {
  return isDeepEqual<T>(actual, obj)
}

export default isEmptyObject
