import isTrue from './isTrue'

/**
 * Will return a pass if the assertion is strictly deep equal
 * @param actual
 */
const isDefined = <T = any>(actual: T) => {
  isTrue(typeof actual !== 'undefined')
}

export default isDefined
