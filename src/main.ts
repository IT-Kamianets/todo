import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ReactiveFormsModule } from '@angular/forms'; // Додай ReactiveFormsModule

bootstrapApplication(AppComponent, {
  providers: [ReactiveFormsModule] // Використовуємо ReactiveFormsModule для форм
});
