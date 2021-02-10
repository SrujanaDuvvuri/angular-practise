import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { FormsModule } from '@angular/forms';
import { CompanyComponent } from './components/company/company.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HtmlPractiseComponent } from './components/html-practise/html-practise.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ColorChangeDirective } from './directives/color-change.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { EmojiDirective } from './directives/emoji.directive';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CompanyComponent,
    NgIfComponent,
    NgClassComponent,
    NgSwitchComponent,
    HtmlPractiseComponent,
    NgStyleComponent,
    ColorChangeDirective,
    CustomDirectiveComponent,
    EmojiDirective,
    BuiltInPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
