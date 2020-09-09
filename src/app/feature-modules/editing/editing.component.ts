import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from "igniteui-angular";
import { NwData } from 'src/app/services/nwindData';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})
export class EditingComponent implements OnInit {

  @ViewChild("grid", { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;
  public data;
  constructor() { }

  public ngOnInit() {
      this.data = NwData;
  }
}
