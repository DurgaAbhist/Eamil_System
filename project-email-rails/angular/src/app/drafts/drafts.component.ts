import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../inbox/inbox.model';
import { DraftsService } from './drafts.service';
import { InboxService } from '../inbox/inbox.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  constructor(private draftsService: DraftsService,
              private router: Router,
              private route: ActivatedRoute,
              private inboxService: InboxService) { }

  ngOnInit() {
  }

}
