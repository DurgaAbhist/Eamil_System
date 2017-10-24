import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../../inbox/inbox.model';
import { SentService } from '../sent.service';

@Component({
  selector: 'app-sent-display',
  templateUrl: './sent-display.component.html',
  styleUrls: ['./sent-display.component.css']
})
export class SentDisplayComponent implements OnInit {
   mail: Inbox;
   id: number;

  constructor(private sentService: SentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

       this.route.params.subscribe(
         (params: Params) => {
             this.id = +params['index'];
             this.mail = this.sentService.getMail(this.id);
         }
       );
  }

}
