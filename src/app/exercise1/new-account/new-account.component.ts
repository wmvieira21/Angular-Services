import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataAccountService } from '../services/dataAccount.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  @ViewChild('nameServerInput') nameServerInput: any;

  constructor(private dataAccount: DataAccountService) { }

  addServer(status: string) {
    this.dataAccount.onAddNewAccount(this.nameServerInput.nativeElement.value, status);
  }
}
