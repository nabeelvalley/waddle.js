import Lap from './interfaces/Lap'
import { start } from 'repl'

class Counter {
  /**
   * Create a `Counter` instance and start the timer
   */
  constructor() {
    this._startTime = new Date()
  }

  /**
   * Lap the counter
   * @param label
   */
  lap(label?: string) {
    const time = new Date()
    const lap: Lap = {
      label,
      time,
    }

    this._laps.push(lap)
  }

  stop() {
    if (typeof this._stopTime === 'undefined') {
      this._stopTime = new Date()
    }
  }

  private _startTime: Date
  public get startTime() {
    return this._startTime
  }

  private _stopTime?: Date
  public get stopTime() {
    return this._stopTime
  }

  private _laps: Lap[] = []
  public get laps() {
    return this._laps
  }
}

export default Counter
