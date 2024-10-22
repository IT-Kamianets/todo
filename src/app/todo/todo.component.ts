import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Імпортуємо FormsModule
import { CommonModule } from '@angular/common'; // Імпортуємо CommonModule

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  standalone: true,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, CommonModule] // Додаємо CommonModule сюди
})
export class TodoComponent {
  todos: Todo[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.todos.push({ task: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
