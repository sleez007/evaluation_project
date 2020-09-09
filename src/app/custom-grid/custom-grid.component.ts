import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss']
})
export class CustomGridComponent implements OnInit {
  public localData: any[];
  title = 'Custom Grid';
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.localData = employeesData;
  }
}
