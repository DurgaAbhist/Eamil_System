import { Component, OnInit, Input } from '@angular/core';
import { Inbox } from '../../../inbox/inbox.model';

@Component({
  selector: 'app-important-item',
  templateUrl: './important-item.component.html',
  styleUrls: ['./important-item.component.css']
})
export class ImportantItemComponent implements OnInit {
   @Input() importantMessage: Inbox;
   @Input() importantMessageId: number;

  constructor() { }

  ngOnInit() {
  }

}
