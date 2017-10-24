import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../inbox.model';
import { InboxService } from '../inbox.service';
import { DraftsService } from '../../drafts/drafts.service';
import { SpamService } from '../../spam/spam.service';
import { TrashService } from '../../trash/trash.service';
import { StarredService } from '../../starred/starred.service';
import { ImportantService } from '../../important/important.service';

@Component({
  selector: 'app-inbox-display',
  templateUrl: './inbox-display.component.html',
  styleUrls: ['./inbox-display.component.css']
})
export class InboxDisplayComponent implements OnInit {
   mails: Inbox[];
   mail: Inbox;
   draftsMail: Inbox;
   id: number;

  constructor(private inboxService: InboxService,
              private draftsService: DraftsService,
              private spamService: SpamService,
              private trashService: TrashService,
              private starredService: StarredService,
              private importantService: ImportantService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(
        (params: Params) => {
           this.id = +params['id'];
           this.mail = this.inboxService.getMail(this.id);
           this.mails = this.inboxService.getMails();
        }
     );
     this.inboxService.mailsChanged.subscribe(
         (mails: Inbox[]) => {
            this.mails = mails;
         }
     );

  }

  moveToDrafts() {
     this.router.navigate(['../../drafts'], {relativeTo: this.route, queryParams: {id: this.id}});

     this.draftsService.updateMails(this.mails[this.id]);
     this.inboxService.deleteMail(this.id);
  }


  moveToSpam() {
     this.router.navigate(['../../spam'], {relativeTo: this.route, queryParams: {id: this.id}});

     this.spamService.updateMails(this.mails[this.id]);
     this.inboxService.deleteMail(this.id);
  }

  moveToTrash() {
     this.router.navigate(['../../trash'], {relativeTo: this.route, queryParams: {id: this.id}});

     this.trashService.updateMails(this.mails[this.id]);
     this.inboxService.deleteMail(this.id);
  }

  moveToStarred() {
     this.mails[this.id].starred = true;
     this.router.navigate(['../../starred'], {relativeTo: this.route, queryParams: {id: this.id}});

     this.starredService.updateMails(this.mails[this.id]);
     //this.inboxService.deleteMail(this.id);
  }

  moveToImportant() {
     this.mails[this.id].important = true;
     this.router.navigate(['../../important'], {relativeTo: this.route, queryParams: {id: this.id}});

     this.importantService.updateMails(this.mails[this.id]);
     //this.inboxService.deleteMail(this.id);
  }

}
