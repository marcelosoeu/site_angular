import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  @Input() imagem!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
