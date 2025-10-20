import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-macchina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './macchina.html',
  styleUrls: ['./macchina.css']
})
export class Macchina implements OnInit {
  // vettore dei pezzi della macchina
  pezzi: string[] = ['bulloni', 'viti', 'ferro'];

  @Input() machina!: string; 
  constructor() {}
  ngOnInit() {}
}

