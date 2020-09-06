import isGreaterThan from './isGreaterThan'

/**
 * Will return a pass if `actual` is an empty array: `[]`
 * @param actual
 */
const isNonEmptyArray = <T = any>(actual: T[]) => {
  return isGreaterThan(actual.length, 0)
}

export default isNonEmptyArray
