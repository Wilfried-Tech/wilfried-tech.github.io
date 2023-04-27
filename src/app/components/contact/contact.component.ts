import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    NgbAlert,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup
  result?: HttpResponse<Object>

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      email: [null, [Validators.email]],
      message: [null, [Validators.required]]
    })

  }

  sendMessage() {
    let {name, email, firstname, message} = this.contactForm.value
    let data = {
      to: "wilfriedtech.dev@gmail.com",
      subject: name.trim() + " - Contact On Portfolio",
      message: `\nNom: ${name.trim()}\nPrenom: ${firstname.trim()}\nEmail: ${email.trim()}\n\n\n${message.trim()}`
    }
    this.http.post('https://codingmailer.onrender.com/send-email', data, {
      observe: "response"
    }).subscribe({
      error: err => this.result = err,
      next: response => {
        this.contactForm.reset()
        this.result = response;
      }
    })
  }

  get responseText() {
    return this.result?.statusText
  }
}

