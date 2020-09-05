import isDeepEqual from './isDeepEqual'
import { str } from '../empty'

/**
 * Will return a pass if `actual` is an empty string: `""`
 * @param actual
 */
const isEmptyString = (actual: string) => {
  return isDeepEqual<string>(actual, str)
}

export default isEmptyString
