import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inbox } from '../../inbox/inbox.model';
import { StarredService } from '../starred.service';
import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-starred-list',
  templateUrl: './starred-list.component.html',
  styleUrls: ['./starred-list.component.css']
})
export class StarredListComponent implements OnInit {
   mails: Inbox[];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private starredService: StarredService,
               private sortPipe: SortPipe) { }

  ngOnInit() {
     this.mails = this.starredService.getMails();

     this.starredService.starredChanged.subscribe(
       (mails: Inbox[]) => {
          this.mails = mails;
       }
     );
  }

    filterMails() {
       this.starredService.starredMails = this.sortPipe.transform(this.mails, 'name');
    }

}
