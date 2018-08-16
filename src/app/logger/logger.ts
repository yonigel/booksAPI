import { LoggerInterface } from "./logger-interface";

export class Logger implements LoggerInterface{

    
    private readonly TAG: string;

    constructor(tag: string) {
        this.TAG = tag;
    }

    log(message) {
        console.log(`${this.TAG}: ${message}`);
    }

    warn(message) {
        console.warn(`${this.TAG}: ${message}`);
    }
    error(message) {
        console.error(`${this.TAG}: ${message}`);
    }

}
