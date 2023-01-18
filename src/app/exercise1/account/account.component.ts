import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string } = { name: '', status: '' };
  
  ngOnInit(): void {
  }
}
