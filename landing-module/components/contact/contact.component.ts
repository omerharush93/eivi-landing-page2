import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  
  contactMethods: ContactMethod[] = [
    {
      icon: '📧',
      title: 'אימייל',
      value: 'info@eivi.co.il',
      link: 'mailto:info@eivi.co.il'
    },
    {
      icon: '🌐',
      title: 'אתר',
      value: 'eivi.co.il',
      link: 'https://eivi.co.il'
    },
    {
      icon: '📱',
      title: 'וואטסאפ',
      value: '+972-XX-XXXXXXX',
      link: 'https://wa.me/972XXXXXXXXX'
    }
  ];
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit(): void {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }
    
    this.isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      this.submitSuccess = true;
      this.isSubmitting = false;
      this.contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
  
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
}
