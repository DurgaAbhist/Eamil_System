import { Component, OnInit, Input } from '@angular/core';
import { Inbox } from '../../../inbox/inbox.model';

@Component({
  selector: 'app-trash-item',
  templateUrl: './trash-item.component.html',
  styleUrls: ['./trash-item.component.css']
})
export class TrashItemComponent implements OnInit {
   @Input() trashMessage: Inbox;
   @Input() trashMessageId: number;
  constructor() { }

  ngOnInit() {
  }

}
