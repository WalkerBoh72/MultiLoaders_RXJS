import { Component, Input } from '@angular/core';
import { heroclass, location, NPC } from './data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  constructor() { }

  @Input() data: location[] | heroclass[] | NPC[] | null;
  @Input() title: string;

}