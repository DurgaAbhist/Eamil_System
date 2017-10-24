import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inbox } from '../../../inbox/inbox.model';
import { DraftsService } from '../../drafts.service';
import { InboxService } from '../../../inbox/inbox.service';

@Component({
  selector: 'app-drafts-item',
  templateUrl: './drafts-item.component.html',
  styleUrls: ['./drafts-item.component.css']
})
export class DraftsItemComponent implements OnInit {
   @Input() draftsMessage: Inbox;
   @Input() draftsMessageId: number;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private draftsService: DraftsService,
               private inboxService: InboxService) { }

  ngOnInit() {

  }


}
