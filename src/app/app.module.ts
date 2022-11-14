import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonComponent } from './person.component';
import { BindingComponent } from './binding.component';
import { TwobindingComponent } from './twobinding.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ConditionComponent } from './condition/condition.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { NotepadComponent } from './notepad/notepad.component';

// use NgModule to structure features
// 1 Angular App: split into many NgModule
// root NgModule: AppComponent
// @NgModule: is a decorator
// @NgModule: takes a metadata object
// @NgModule: declarations/imports/providers/bootstrap => là các metadata.

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PersonComponent,
    BindingComponent,
    TwobindingComponent,
    ProfileCardComponent,
    ConditionComponent,
    IfelseComponent,
    NotepadComponent,
  ],
  // tells Angular which components belong to this module
  // neu su dung  component ma ko khai báo nó - Angular sẽ trả về lỗi
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // root component cua application
  // where Angular will Insert it into /index.html host web page
})
export class AppModule {} // has 1 ngModule: name is App Module
