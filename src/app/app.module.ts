import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PagerService} from './services/pager.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [

    AppComponent
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
