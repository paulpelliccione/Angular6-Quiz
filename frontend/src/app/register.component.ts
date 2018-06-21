import { Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ApiService } from './api.service';

@Component ({
    templateUrl: './register.component.html'
})
export class RegisterComponent {  
    form
    
    constructor(private api: ApiService, private  fb: FormBuilder ) { 
        this.form = fb.group({
            email: [''],
            password: ['']
        })
        
    }

    register() {
        console.log(this.form)
    }
}