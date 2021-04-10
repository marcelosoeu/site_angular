import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imagem!: string;
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
