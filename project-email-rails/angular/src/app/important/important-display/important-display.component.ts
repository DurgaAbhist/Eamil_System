import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../../inbox/inbox.model';
import { ImportantService } from '../important.service';
import { InboxService } from '../../inbox/inbox.service';

@Component({
  selector: 'app-important-display',
  templateUrl: './important-display.component.html',
  styleUrls: ['./important-display.component.css']
})
export class ImportantDisplayComponent implements OnInit {
   mail: Inbox;
   id: number;

  constructor(private importantService: ImportantService,
              private router: Router,
              private route: ActivatedRoute,
              private inboxService: InboxService) { }

  ngOnInit() {
     this.route.params.subscribe(
      (params: Params) => {
          this.id = +params['index'];
          this.mail = this.importantService.getMail(this.id);
      }
     );
  }

}
