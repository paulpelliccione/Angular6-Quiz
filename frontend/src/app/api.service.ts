import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Subject } from 'rxjs';


@Injectable() 
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();
    
    constructor(private http: HttpClient) { }

    getQuestions(){
      return this.http.get('http://localhost:61142/api/questions');

        }

        postQuestion(question) {
            this.http.post('http://localhost:61142/api/questions', question).subscribe(res => {
                console.log(res)
     })
    
    }

    putQuestion(question) {
        this.http.put(`http://localhost:61142/api/questions/${question.id}`, question).subscribe(res =>{
            console.log(res)
        })
    }
    
    getQuizzies(){
        return this.http.get('http://localhost:61142/api/quizzies');
  
          }


    postQuiz(quiz) {
        this.http.post('http://localhost:61142/api/quizzies', quiz).subscribe(res => {
            console.log(res)
 })

}
selectQuiz(question) {
    this.selectedQuiz.next(question)
}

    selectQuestion(question) {
        this.selectedQuestion.next(question)
    }

}