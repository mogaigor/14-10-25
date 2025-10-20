import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Macchina } from '../macchina/macchina';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, Macchina],
  templateUrl: './container.html',
  styleUrls: ['./container.css']
})
export class Container {
  machines: string[];

  constructor() {
    this.machines = [
      "Escavatore","Gru","Bulldozer","Pala gommata","Autobetoniera",
      "Dumper","Rullo compressore","Miniescavatore","Sollevatore telescopico","Carro ponte"
    ];
  }

  ngOnInit() {
  }
}
