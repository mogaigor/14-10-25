import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css'
})
export class Macchina {
 @Input() machina!: string; 
  constructor() {
  }
  ngOnInit() {}
}

