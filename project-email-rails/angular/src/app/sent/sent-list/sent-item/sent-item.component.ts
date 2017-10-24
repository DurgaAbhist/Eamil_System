import { Component, OnInit, Input } from '@angular/core';
import { Inbox } from '../../../inbox/inbox.model';

@Component({
  selector: 'app-sent-item',
  templateUrl: './sent-item.component.html',
  styleUrls: ['./sent-item.component.css']
})
export class SentItemComponent implements OnInit {
   @Input() sentMessage: Inbox;
   @Input() sentMessageId: number;

  constructor() { }

  ngOnInit() {
  }

}
