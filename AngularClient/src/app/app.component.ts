import {FormsModule } from '@angular/forms';
//testing
import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  declarations : [ AppComponent],
  exports  : [AppComponent,FormsModule],
  imports : [CommonModule,FormsModule],

  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AngularClient';
}
