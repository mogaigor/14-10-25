import { Component } from '@angular/core';
import { Macchina } from '../macchina/macchina';

@Component({
  selector: 'app-container',
  imports: [Macchina],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  machines: string[];

  constructor() {
  this.machines=["Escavatore","Gru","Bulldozer","Pala gommata","Autobetoniera","Dumper","Rullo compressore","Miniescavatore","Sollevatore telescopico","Carro ponte"
  ];
}
  ngOnInit() {
  }
}
