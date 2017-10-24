import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inbox } from '../../inbox/inbox.model';
import { DraftsService } from '../drafts.service';
import { InboxService } from '../../inbox/inbox.service';
import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-drafts-list',
  templateUrl: './drafts-list.component.html',
  styleUrls: ['./drafts-list.component.css']
})
export class DraftsListComponent implements OnInit {
   mails: Inbox[];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private draftsService: DraftsService,
               private inboxService: InboxService,
               private sortPipe: SortPipe) { }

  ngOnInit() {
     this.mails = this.draftsService.getMails();

     this.draftsService.draftsChanged.subscribe(
        (mails: Inbox[]) => {
           this.mails = mails;
        }
     );
  }

  filterMails() {
     this.draftsService.draftsMails = this.sortPipe.transform(this.mails, 'name');
  }

}
