import { Component, OnInit, Input } from '@angular/core';
import { Inbox } from '../../../inbox/inbox.model';

@Component({
  selector: 'app-starred-item',
  templateUrl: './starred-item.component.html',
  styleUrls: ['./starred-item.component.css']
})
export class StarredItemComponent implements OnInit {
   @Input() starredMessage: Inbox;
   @Input() starredMessageId: number;

  constructor() { }

  ngOnInit() {
  }

}
