import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterationService } from './registeration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  get userName(){
    return this.registerationForm.get('userName');
  }

  get email(){
    return this.registerationForm.get('email');
  }

  get alternateEmails(){
    return this.registerationForm.get('alternateEmails') as FormArray;
  }

  get password(){
    return this.registerationForm.get('password');
  }

  get confirmPassword(){
    return this.registerationForm.get('confirmPassword');
  }

 

  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder,  private _registerationService : RegisterationService){}

  registerationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email:[''],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
  });

  //registerationForm = new FormGroup({
  //  userName: new FormControl('Kiran'),
  //  password: new FormControl(''),
  //  confirmPassword: new FormControl(''),
  //  address: new FormControl({
  //    city: new FormControl(''), 
  //    state: new FormControl(''),
  //    postalCode: new FormControl('')
  //  })
  //});

  loadApiData(){
    this.registerationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    });
  }

    onSubmit(){
      console.log(this.registerationForm.value);
      this._registerationService.register(this.registerationForm.value);
     
    }
}
