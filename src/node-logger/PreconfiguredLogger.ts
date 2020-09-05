import createColouredLog from "./createColouredLog";
import Colour from "./enums/Colour";
import SingleLogger from "./interfaces/SingleLogger";

class PreconfiguredLogger {    
    readonly warn: SingleLogger
    readonly log: SingleLogger
    readonly info: SingleLogger;
    readonly error: SingleLogger;

    constructor() {
        this.log = createColouredLog(Colour.Reset, LogLevel.Log)
        this.info = createColouredLog(Colour.FgBlue, LogLevel.Info)        
        this.warn = createColouredLog(Colour.BgYellow, LogLevel.Log)
        this.error = createColouredLog(Colour.BgRed, LogLevel.Error)
    }
}

export default PreconfiguredLogger