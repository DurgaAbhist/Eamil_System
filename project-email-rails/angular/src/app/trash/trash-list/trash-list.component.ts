import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inbox } from '../../inbox/inbox.model';
import { TrashService } from '../trash.service';
import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-trash-list',
  templateUrl: './trash-list.component.html',
  styleUrls: ['./trash-list.component.css']
})
export class TrashListComponent implements OnInit {
   mails: Inbox[];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private trashService: TrashService,
               private sortPipe: SortPipe) { }

  ngOnInit() {
     this.mails = this.trashService.getMails();

     this.trashService.trashChanged.subscribe(
        (mails: Inbox[]) => {
          this.mails = mails;
        }
     );
  }

  filterMails() {
     this.trashService.trashMails = this.sortPipe.transform(this.mails, 'name');
  }

 }
