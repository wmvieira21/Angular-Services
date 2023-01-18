import { Component, OnInit } from '@angular/core';
import { DataAccountService } from './exercise1/services/dataAccount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*exercise1*/
  accountNewArray: { name: string, status: string }[] = [];

  constructor(private dataAccount: DataAccountService) { }

  ngOnInit(): void {
    this.accountNewArray = this.dataAccount.accountsArray;
  }

  /*exercise2
  
  
  */
}
