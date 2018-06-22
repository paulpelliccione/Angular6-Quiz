import { Component} from '@angular/core';
import { ApiService } from './api.service';

@Component ({
    selector: 'playQuiz',
    templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {  

    quizzes

    
    constructor(private api: ApiService) { }

    ngOnInit() {
   
    }
}