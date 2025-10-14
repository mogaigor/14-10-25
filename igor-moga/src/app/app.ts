import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './container/container';
import { Macchina } from './macchina/macchina';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Container,Macchina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('igor-moga');
}
