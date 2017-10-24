import { Component, OnInit, Input } from '@angular/core';

import { Inbox } from '../../inbox.model';
import { InboxService } from '../../inbox.service';

@Component({
  selector: 'app-inbox-item',
  templateUrl: './inbox-item.component.html',
  styleUrls: ['./inbox-item.component.css']
})
export class InboxItemComponent implements OnInit {
   @Input() inboxMessage: Inbox;
   @Input() inboxMessageId: number;

  constructor(private inboxService: InboxService) { }

  ngOnInit() {
  }


}
