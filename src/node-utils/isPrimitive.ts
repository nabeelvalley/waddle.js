/**
 * Check if the provided object is a primitive
 * @param val
 */
const isPrimitive = (val?: any) => {
  return val !== Object(val)
}

export default isPrimitive
