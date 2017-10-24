import { Component, OnInit, Input } from '@angular/core';
import { Inbox } from '../../../inbox/inbox.model';

@Component({
  selector: 'app-spam-item',
  templateUrl: './spam-item.component.html',
  styleUrls: ['./spam-item.component.css']
})
export class SpamItemComponent implements OnInit {
   @Input() spamMessage: Inbox;
   @Input() spamMessageId: number;

  constructor() { }

  ngOnInit() {
  }

}
