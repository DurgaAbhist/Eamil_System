import { Inbox } from './inbox.model';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class InboxService {
   mailClicked = false;
   starred = false;
   important = false;

   headers: Headers;
   options: RequestOptions;

   mailsChanged = new Subject<Inbox[]>();
   mails: Inbox[] = [
      new Inbox(
         'Alice Freeman',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT721FFwvEu3KwUy3w8Jbr6s3hFmx1jAFmaOZui0HRWIW4j6_vSng',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maxumus nibh. Suspendisse ut justo velit. Nullam ac ultirces risus, quis auctor orci. Vestibulum volupat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcoper dui efficitur in. Vestibulum placereat imperdiet tellud, et tincudunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendreirit sollicitudin vel id sem. In eget ante sapien. Quisue consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisi feugiat ligula moestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odi',
         'Paypal',
         false,
         false
      ),
      new Inbox(
         'Lawrence Collins',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7c6xjZ0Sz6_DI7mVCUfSo1Z7m9R8ZLru341-PhNLJvAqQnrN',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maxumus nibh. Suspendisse ut justo velit. Nullam ac ultirces risus, quis auctor orci. Vestibulum volupat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcoper dui efficitur in. Vestibulum placereat imperdiet tellud, et tincudunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendreirit sollicitudin vel id sem. In eget ante sapien. Quisue consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisi feugiat ligula moestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus.',
         'Amazon',
         false,
         false
      ),
      new Inbox(
         'Judith Burton',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVscFlbHG5LFak0KrKXbYRRnsEcXmR9TWRKt2fy7YNTjigHlh5',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maxumus nibh. Suspendisse ut justo velit. Nullam ac ultirces risus, quis auctor orci. Vestibulum volupat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcoper dui efficitur in. Vestibulum placereat imperdiet tellud, et tincudunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendreirit sollicitudin vel id sem. In eget ante sapien. Quisue consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisi feugiat ligula moestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio',
         'Paytm',
         false,
         false
      ),
      new Inbox(
         'Daielle Obrien',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-II7eOWXTXKcGI5e3B10C7cnm3SX1onHhPLjehi3ScviHiDV',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maxumus nibh. Suspendisse ut justo velit. Nullam ac ultirces risus, quis auctor orci. Vestibulum volupat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcoper dui efficitur in. Vestibulum placereat imperdiet tellud, et tincudunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendreirit sollicitudin vel id sem. In eget ante sapien. Quisue consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisi feugiat ligula moestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec ',
         'In Voice',
         false,
         false
      ),
      new Inbox(
         'Brain Flores',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9fYKKVyHmWoli1qw-X-RWkCpIvnTP1O4D0qSh3a_wMFTBy7N',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maxumus nibh. Suspendisse ut justo velit. Nullam ac ultirces risus, quis auctor orci. Vestibulum volupat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcoper dui efficitur in. Vestibulum placereat imperdiet tellud, et tincudunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendreirit sollicitudin vel id sem. In eget ante sapien. Quisue consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisi feugiat ligula moestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio',
         'Paypal',
         false,
         false
      ),
   ];

   constructor( private httpService: Http) {
      this.headers = new Headers({'Content-Type': 'application/json'});
      this.options = new RequestOptions({headers: this.headers});}

   getMails() {
      return this.mails.slice();
   }

   getMail(index: number) {
      return this.mails[index];
   }

   deleteMail(index: number) {
      this.mails.splice(index, 1)
      this.mailsChanged.next(this.mails.slice());
   }

   createMail(mail: Inbox): Observable<Inbox> {

      return this.httpService.post('http://localhost:3000/mails', mail, this.options)
          .map((response: Response) => response.json());
   }
}
