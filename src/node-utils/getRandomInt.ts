/**
 * Gets a random integer between `0` and `max`
 * @param max
 */
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

export default getRandomInt
