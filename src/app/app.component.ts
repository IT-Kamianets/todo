import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // Імпорт TodoComponent

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TodoComponent] // Імпортуємо TodoComponent
})
export class AppComponent {}
