import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css',]
})
export class UserComponent implements OnInit {
  name = "rabi3"
  message =""
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.name
  }

  goToRegister(){
    this.router.navigate(["/reg"])
  }

}
