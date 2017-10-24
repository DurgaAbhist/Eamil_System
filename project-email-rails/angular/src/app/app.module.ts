import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { InboxItemComponent } from './inbox/inbox-list/inbox-item/inbox-item.component';
import { SentComponent } from './sent/sent.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './inbox/dropdown.directive';

import { InboxService } from './inbox/inbox.service';
import { DraftsService } from './drafts/drafts.service';
import { SpamService } from './spam/spam.service';
import { TrashService } from './trash/trash.service';
import { InboxDisplayComponent } from './inbox/inbox-display/inbox-display.component';
import { InboxStartComponent } from './inbox/inbox-start/inbox-start.component';
import { InboxComposeComponent } from './inbox/inbox-compose/inbox-compose.component';
import { DraftsStartComponent } from './drafts/drafts-start/drafts-start.component';
import { DraftsListComponent } from './drafts/drafts-list/drafts-list.component';
import { DraftsItemComponent } from './drafts/drafts-list/drafts-item/drafts-item.component';
import { DraftsDisplayComponent } from './drafts/drafts-display/drafts-display.component';
import { SpamStartComponent } from './spam/spam-start/spam-start.component';
import { SpamListComponent } from './spam/spam-list/spam-list.component';
import { SpamItemComponent } from './spam/spam-list/spam-item/spam-item.component';
import { SpamDisplayComponent } from './spam/spam-display/spam-display.component';
import { TrashStartComponent } from './trash/trash-start/trash-start.component';
import { TrashListComponent } from './trash/trash-list/trash-list.component';
import { TrashItemComponent } from './trash/trash-list/trash-item/trash-item.component';
import { TrashDisplayComponent } from './trash/trash-display/trash-display.component';

import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { StarredComponent } from './starred/starred.component';
import { StarredListComponent } from './starred/starred-list/starred-list.component';
import { StarredItemComponent } from './starred/starred-list/starred-item/starred-item.component';
import { StarredStartComponent } from './starred/starred-start/starred-start.component';
import { StarredDisplayComponent } from './starred/starred-display/starred-display.component';
import { StarredService } from './starred/starred.service';
import { SentService } from './sent/sent.service';
import { ImportantComponent } from './important/important.component';
import { ImportantService } from './important/important.service';
import { ImportantStartComponent } from './important/important-start/important-start.component';
import { ImportantListComponent } from './important/important-list/important-list.component';
import { ImportantItemComponent } from './important/important-list/important-item/important-item.component';
import { ImportantDisplayComponent } from './important/important-display/important-display.component';
import { SentStartComponent } from './sent/sent-start/sent-start.component';
import { SentListComponent } from './sent/sent-list/sent-list.component';
import { SentItemComponent } from './sent/sent-list/sent-item/sent-item.component';
import { SentDisplayComponent } from './sent/sent-display/sent-display.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    InboxListComponent,
    InboxItemComponent,
    SentComponent,
    DraftsComponent,
    SpamComponent,
    TrashComponent,
    InboxDisplayComponent,
    InboxStartComponent,
    InboxComposeComponent,
    DropdownDirective,
    DraftsStartComponent,
    DraftsListComponent,
    DraftsItemComponent,
    DraftsDisplayComponent,
    SpamStartComponent,
    SpamListComponent,
    SpamItemComponent,
    SpamDisplayComponent,
    TrashStartComponent,
    TrashListComponent,
    TrashItemComponent,
    TrashDisplayComponent,
    SortPipe,
    FilterPipe,
    StarredComponent,
    StarredListComponent,
    StarredItemComponent,
    StarredStartComponent,
    StarredDisplayComponent,
    ImportantComponent,
    ImportantStartComponent,
    ImportantListComponent,
    ImportantItemComponent,
    ImportantDisplayComponent,
    SentStartComponent,
    SentListComponent,
    SentItemComponent,
    SentDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [InboxService, DraftsService, SpamService, TrashService, SortPipe, StarredService, ImportantService, SentService, SentListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
