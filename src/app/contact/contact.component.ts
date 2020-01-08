import { Component, OnInit, } from "@angular/core";
import { ConnectionService } from "../connection.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  loading = false;

  emailForm: FormGroup;

  constructor(public http: ConnectionService, private fb: FormBuilder) {}

  ngOnInit() {

    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});

    this.emailForm = this.fb.group({
      first: new FormControl('', [
         Validators.required,
         Validators.pattern("[a-zA-Z ]*"),
         Validators.minLength(2)
      ]),
      last: new FormControl('', [
         Validators.required,
         Validators.pattern("[a-zA-Z ]*"),
         Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
        Validators.email
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(20)
      ])
    });
  }

  get first() {
    return this.emailForm.get('first');
  }

  get last() {
    return this.emailForm.get('last');
  }

  get email() {
    return this.emailForm.get('email');
  }

  get message() {
    return this.emailForm.get('message');
  }

  sendEmail() {
    this.loading = true;
    let user = {
      firstName: this.first.value,
      lastName: this.last.value,
      emailAdd: this.email.value,
      messageText: this.message.value
    }
    this.http.sendEmail("https://wdemail.herokuapp.com/", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `My name is ${user.firstName} ${user.lastName}. My email is ${user.emailAdd}. ${user.messageText}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
      },() => {
        this.loading = false;
      }
    );
    this.emailForm.reset();
    alert('Your message has been sent');
  }
}

