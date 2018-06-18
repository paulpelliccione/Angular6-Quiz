import { Component} from '@angular/core';
import { ApiService } from './api.service';

@Component ({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {  
    
    question = {}
    
    constructor(private api: ApiService) {
    }

ngOnInit() {
    this.api.getQuestions().subscribe(res =>{
        console.log(res)
    })
}

    post(question) {
       this.api.postQuestion(question)
    }
}