import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()

export class DataAccountService {
    accountsArray = [{
        name: 'William',
        status: 'ativo'
    }
        ,
    {
        name: 'teste',
        status: 'inativo'
    }];

    constructor(private loogingService: LoggingService) { }

    onAddNewAccount(name1: string, status1: string) {
        if (name1 === '') {
            alert('Please input a server name');
        } else {
            this.accountsArray.push({ name: name1, status: status1 });
        }
        this.loogingService.performLog('server name: ' + name1 + ' status: ' + status1);
    }
}