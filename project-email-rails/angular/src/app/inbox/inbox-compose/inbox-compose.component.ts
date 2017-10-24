import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { InboxService } from '../inbox.service';
import { Inbox } from '../inbox.model';
import { SentService } from '../../sent/sent.service';
import { DraftsService } from '../../drafts/drafts.service';

@Component({
  selector: 'app-inbox-compose',
  templateUrl: './inbox-compose.component.html',
  styleUrls: ['./inbox-compose.component.css']
})
export class InboxComposeComponent implements OnInit {
   @ViewChild('form') mailForm: NgForm;

   name: string;
   imagePath: string;
   descriptionHeader: string;
   description: string;
   badge: string;
   starred: boolean;
   important: boolean;

   mailData = {
      name: '',
      imagePath: '',
      descriptionHeader: '',
      description: '',
      badge: '',
      starred: false,
      important: false
   }

   draftsData = {
      name: '',
      imagePath: '',
      descriptionHeader: '',
      description: '',
      badge: '',
      starred: false,
      important: false
   }

  constructor(private inboxService: InboxService,
              private sentService: SentService,
              private draftsService: DraftsService,
              private router: Router,
              private route: ActivatedRoute,
              private httpService: Http) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
     this.mailData.name = this.mailForm.value.name;
     this.mailData.imagePath = this.mailForm.value.imagePath;
     this.mailData.descriptionHeader = this.mailForm.value.descriptionHeader;
     this.mailData.description = this.mailForm.value.description;
     this.mailData.badge = this.mailForm.value.badge;
     this.mailData.starred = false;
     this.mailData.important = false;

     this.inboxService.createMail(this.mailData)
      .subscribe( data => { return true },
        error => {
           console.log("Error in creating Mail");
           return Observable.throw(error);
        });
     this.mailForm.reset();

   //   this.sentService.addMail(this.mailData);
   //   this.mailForm.reset()
   //   this.router.navigate(['../sent'], {relativeTo: this.route});
 }

 moveToDrafts() {
    this.draftsData.name =  this.name;
    this.draftsData.imagePath =  this.imagePath;
    this.draftsData.descriptionHeader =  this.descriptionHeader;
    this.draftsData.name =  this.description;
    this.draftsData.badge =  this.badge;
    this.draftsData.starred = false;
    this.draftsData.important = false;

    this.draftsService.updateMails(this.draftsData);
    this.mailForm.reset();
    this.router.navigate(['../drafts'], {relativeTo: this.route});
 }

 suggestImagePath() {
    const suggestedURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-II7eOWXTXKcGI5e3B10C7cnm3SX1onHhPLjehi3ScviHiDV';
    this.mailForm.form.patchValue({
      imagePath: suggestedURL,
   });
}

   resetForm() {
      this.mailForm.reset();
   }

}
