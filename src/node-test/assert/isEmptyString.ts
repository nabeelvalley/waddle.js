import AssertionResult from '../interfaces/AssertionResult'
import isDeepEqual from './isDeepEqual'
import { str } from '../empty'

/**
 * Will return a pass if `actual` is an empty string: `""`
 * @param actual
 */
const isEmptyString = (actual: string): AssertionResult => {
  return isDeepEqual<string>(actual, str)
}

export default isEmptyString
