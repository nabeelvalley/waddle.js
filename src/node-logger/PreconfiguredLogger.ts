import createColouredLog from './createColouredLog'
import { Colour, LogLevel } from './enums'
import SingleLogger from './interfaces/SingleLogger'

class PreconfiguredLogger {
  readonly warn: SingleLogger
  readonly log: SingleLogger
  readonly info: SingleLogger
  readonly error: SingleLogger

  constructor() {
    this.log = createColouredLog(Colour.Reset, LogLevel.Log)
    this.info = createColouredLog(Colour.FgGreen, LogLevel.Info)
    this.warn = createColouredLog(Colour.BgMagenta, LogLevel.Log)
    this.error = createColouredLog(Colour.BgRed, LogLevel.Error)
  }
}

export default PreconfiguredLogger
