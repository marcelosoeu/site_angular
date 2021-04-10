import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  @Input() texto!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
