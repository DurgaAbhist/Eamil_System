import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inbox } from '../../inbox/inbox.model';
import { SpamService } from '../spam.service';
import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-spam-list',
  templateUrl: './spam-list.component.html',
  styleUrls: ['./spam-list.component.css']
})
export class SpamListComponent implements OnInit {
   mails: Inbox[];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private spamService: SpamService,
               private sortPipe: SortPipe
               ) { }

  ngOnInit() {
     this.mails = this.spamService.getMails();

     this.spamService.spamChanged.subscribe(
     (mails: Inbox[]) => {
        this.mails = mails;
     }
  );
  }

  filterMails() {
     this.spamService.spamMails = this.sortPipe.transform(this.mails, 'name');
  }

}
