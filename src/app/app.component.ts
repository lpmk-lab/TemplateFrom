import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateFrom';
  @ViewChild('registFrom') from: NgForm

  Email: string = ""
  Firstname: string = ""
  Lastname: string = ""
  DateofBirth: string = ""

  contactMethod = [
    { id: 'check_email', value: "email", display: "Email" },
    { id: 'check_phone', value: "phone", display: "Phone" },
    { id: 'check_mail', value: "mail", display: "Mail" }
  ]
  Onsubimt() {
    // console.log(this.from);
    // console.log(this.from.value.firstname);

    //from control
    // console.log(this.from.value.address.no);

    this.from.reset({
      gender:"male"
    })


  }
  GenerateUserName() {
    let username: string = ""
    if (this.Firstname.length >= 3) {
      username += this.Firstname.slice(0, 3);
    }
    else {
      username += this.Firstname;
    }
    if (this.Lastname.length >= 3) {
      username += this.Lastname.slice(0, 3);
    }
    else {
      username += this.Lastname;
    }
    let datetime = new Date(this.DateofBirth)
    username += datetime.getFullYear()


    username.toLowerCase()
    this.from.value.username = username;
    // console.log(username);
    // console.log(this.from);


    //Set Value Method
    // this.from.setValue({
    //   contact_method:this.from.value.contact_method,
    //   course:this.from.value.course,
    //   dob:this.from.value.dob,
    //   email:this.from.value.email,
    //   firstname:this.from.value.firstname,
    //   gender :this.from.value.gender,
    //   lastname:this.from.value.lastname,
    //   music:this.from.value.music,
    //   phone:this.from.value.phone,
    //   reading:this.from.value.reading,
    //   sports:this.from.value.sports,
    //   username:username,
    //   address:{
    //     no: this.from.value.address.no,
    //     region: this.from.value.address.region,
    //     street:this.from.value.address.street,
    //     township:this.from.value.address.township,
    //   }
    // })


    this.from.form.patchValue({
      username:username,
      gender:"male",
      sports:true,
      // address:{
      // no:"1",
      // region:"Yangon"
      // }
    })

  }
}
