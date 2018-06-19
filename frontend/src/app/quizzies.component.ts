import { Component} from '@angular/core';
import { ApiService } from './api.service';

@Component ({
    selector: 'quizzies',
    templateUrl: './quizzies.component.html'
})
export class QuizziesComponent {  
    
    quiz = {}
    quizzies
    
    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getQuizzies().subscribe(res => {
           this.quizzies = res
        })
    }

    post(quiz) {
       this.api.postQuiz(quiz)
    }
}