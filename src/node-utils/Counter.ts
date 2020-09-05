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
  lap(label?: string): void {
    const time = new Date()
    const lap: Lap = {
      label,
      time,
    }

    this._laps.push(lap)
  }

  /**
   * Stop the counter, and return the start/stop runtime in ms. Returns the
   * counter instance
   */
  stop(): Counter {
    if (typeof this._stopTime === 'undefined') {
      this._stopTime = new Date()
    }
    return this
  }

  /**
   * Get start/stop run duration in milliseconds
   */
  getDuration(): number | undefined {
    if (typeof this._stopTime !== 'undefined')
      return this._stopTime.getTime() - this.startTime.getTime()
    else return undefined
  }

  private _startTime: Date
  public get startTime(): Date {
    return this._startTime
  }

  private _stopTime?: Date
  public get stopTime(): Date | undefined {
    return this._stopTime
  }

  private _laps: Lap[] = []
  public get laps(): Lap[] {
    return this._laps
  }
}

export default Counter
