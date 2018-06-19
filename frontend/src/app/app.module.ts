import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, MatListModule} from '@angular/material';
import {FormsModule} from '@angular/forms'
import{RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import {QuestionsComponent} from './questions.component';
import { ApiService } from './api.service';


const routes = [
  {path: 'question', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
