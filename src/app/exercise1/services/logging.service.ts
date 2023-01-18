import { Injectable } from "@angular/core";

@Injectable()

export class LoggingService {

    performLog(message: string) {
        console.log(message);
    }
}