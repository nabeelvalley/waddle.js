import isDeepEqual from './isDeepEqual'
import { obj } from '../empty'

/**
 * Will return a pass if `actual` is an empty object: ``{}`
 * @param actual
 */
const isEmptyObject = <T = any>(actual: T) => {
  return isDeepEqual<T>(actual, obj)
}

export default isEmptyObject
