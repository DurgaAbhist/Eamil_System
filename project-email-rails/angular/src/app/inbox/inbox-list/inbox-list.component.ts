import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Inbox } from '../inbox.model';
import { InboxService } from '../inbox.service';
import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.css']
})
export class InboxListComponent implements OnInit {
   mails: Inbox[];

  constructor( private inboxService: InboxService,
               private sortPipe: SortPipe) {
  }

  ngOnInit() {
     this.mails = this.inboxService.getMails();
 }

 sortMails() {
    this.inboxService.mails = this.sortPipe.transform(this.mails, 'name');
 }

}
