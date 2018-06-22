import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'playQuiz',
    templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {
    quizId
    questions

    constructor(private api: ApiService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.quizId = this.route.snapshot.paramMap.get('quizId')

        this.api.getQuestions(this.quizId).subscribe(res => {
            this.questions = res

        })
    }
}