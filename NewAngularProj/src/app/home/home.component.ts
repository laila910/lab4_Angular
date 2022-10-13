import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

 
  

  constructor(){ 
    
  }

  ngOnInit(): void {
  }
  myRegFormValidation = new FormGroup({
    name: new FormControl("Laila",Validators.required),
    age: new FormControl(0,[Validators.min(20), Validators.max(40),Validators.required]),
    email:new FormControl('name@example.com',[Validators.required,Validators.email])
  })
  get NameValid(){
    return this.myRegFormValidation.controls.name.valid;
  }

  get AgeValid(){
    return this.myRegFormValidation.controls.age.valid;
  }

  get EmailValid(){
    return this.myRegFormValidation.controls.email.valid;
  }
  @Output() myEvent = new EventEmitter();
  SendData(){
   
    //Add Data To DB
    if(this.myRegFormValidation.valid){
      //ADD--->DB
      console.log(this.myRegFormValidation.value);
      let id=new Date().getTime();
      console.log(id);
      let data={name:this.myRegFormValidation.value.name,age:this.myRegFormValidation.value.age,email:this.myRegFormValidation.value.email,id:id};
      this.myEvent.emit(data);  
      console.log(data); 
    }
  }
  
}
