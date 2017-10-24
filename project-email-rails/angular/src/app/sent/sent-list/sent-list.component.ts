import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Inbox } from '../../inbox/inbox.model';
import { SentService } from '../sent.service';
import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-sent-list',
  templateUrl: './sent-list.component.html',
  styleUrls: ['./sent-list.component.css']
})
export class SentListComponent implements OnInit {
   mails: Inbox[];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private sentService: SentService,
               private sortPipe: SortPipe
               ) { }

  ngOnInit() {
     this.mails = this.sentService.getMails();
      // this.sentService.getMails().subscribe(
      //    (mails) => {
      //       this.mails = mails;
      //    }
      // );
     this.sentService.sentChanged.subscribe(
       (mails: Inbox[]) => {
          this.mails = mails;
       }
     );
  }

 //  getMail(index: number) {
 //     return this.mails[index];
 // }

 filterMails() {
    this.sentService.sentMails = this.sortPipe.transform(this.mails, 'name');
 }

}
