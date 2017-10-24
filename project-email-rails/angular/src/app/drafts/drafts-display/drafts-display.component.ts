import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../../inbox/inbox.model';
import { DraftsService } from '../drafts.service';
import { InboxService } from '../../inbox/inbox.service';

@Component({
  selector: 'app-drafts-display',
  templateUrl: './drafts-display.component.html',
  styleUrls: ['./drafts-display.component.css']
})
export class DraftsDisplayComponent implements OnInit {
   mail: Inbox;
   id: number;

  constructor(private draftsService: DraftsService,
              private router: Router,
              private route: ActivatedRoute,
              private inboxService: InboxService) { }

  ngOnInit() {
     this.route.params.subscribe(
       (params: Params) => {
          this.id = +params['index'];
          this.mail = this.draftsService.getMail(this.id);
       }
     );
  }

}
