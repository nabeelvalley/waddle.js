import isDeepEqual from './isDeepEqual'
import { arr } from '../empty'

/**
 * Will return a pass if `actual` is an empty array: `[]`
 * @param actual
 */
const isEmptyArray = <T = any>(actual: T[]) => {
  return isDeepEqual<T[]>(actual, arr)
}

export default isEmptyArray
