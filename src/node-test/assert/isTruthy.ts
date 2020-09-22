import isTrue from './isTrue'

/**
 * Will return a pass if `actual` is truthy
 * @param actual
 */
const isTruthy = (actual: any) => {
  isTrue(!!actual)
}

export default isTruthy
