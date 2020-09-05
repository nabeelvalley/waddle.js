import { Colour, LogLevel } from './enums'
import SingleLogger from './interfaces/SingleLogger'

/**
 * Returns a `console.log` equivalent that can print to console in the given
 * colour and Log level
 * @param colour colour to be used for the logger
 * @param logLevel console log type to be used for the logger
 */
const createColouredLog = (
  colour: Colour = Colour.Reset,
  logLevel: LogLevel = LogLevel.Log
): SingleLogger => {
  return (...data: any[]) =>
    console[logLevel](`${colour}%s${Colour.Reset}`, ...data)
}

export default createColouredLog
