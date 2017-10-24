import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Inbox } from '../../inbox/inbox.model';
import { StarredService } from '../starred.service';
@Component({
  selector: 'app-starred-display',
  templateUrl: './starred-display.component.html',
  styleUrls: ['./starred-display.component.css']
})
export class StarredDisplayComponent implements OnInit {
   mail: Inbox;
   id: number;

  constructor(private starredService: StarredService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(
     (params: Params) => {
          this.id = +params['index'];
          this.mail = this.starredService.getMail(this.id);
     }
     );
  }

}
