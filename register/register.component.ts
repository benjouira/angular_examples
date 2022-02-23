import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route : Router) { }
  firstName = "Rabi3"
  active = true
  userList=[{first_name :"Rabi3",last_Name : "Ben Jouira",job : "student", country: "tunisia"},
  // {first_name :"may",last_Name : "marweni",job : "the word and what exist on hem", country:"My heart"},
  {first_name :"lamia",last_Name : "Blghith",job : "teacher" , country: "tunisia"},
  {first_name :"rahma",last_Name : "boujelben",job : "teacher",  country: "tunisia"},
]
  ngOnInit(): void {
  }
  goToUser(){
    this.route.navigate(["/user"])
  }
  showHide(){
    this.active=!this.active
    this.changeclass();
  }
 class1 = true
 class2 = false
 changeclass(){
  this.class1=!this.class1
  this.class2=!this.class2
 }
}
