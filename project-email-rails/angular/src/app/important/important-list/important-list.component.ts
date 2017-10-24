import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Inbox } from '../../inbox/inbox.model';
import { ImportantService } from '../important.service';
import { SortPipe } from '../../sort.pipe';

@Component({
  selector: 'app-important-list',
  templateUrl: './important-list.component.html',
  styleUrls: ['./important-list.component.css']
})
export class ImportantListComponent implements OnInit {
   mails: Inbox[];

  constructor( private router: Router,
               private route: ActivatedRoute,
               private importantService: ImportantService,
               private sortPipe: SortPipe) { }

  ngOnInit() {
     this.mails = this.importantService.getMails();

     this.importantService.importantChanged.subscribe(
       (mails: Inbox[]) => {
          this.mails = mails;
       }
     );
  }

  filterMails() {
     this.importantService.importantMails = this.sortPipe.transform(this.mails, 'name');
  }

}
