import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from 'src/app/services/data';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  localData = [
    { Name:'John', Age: 29 },
    { Name:'Alice', Age: 27 },
    { Name:'Jessica', Age: 31 },
  ];


  @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
  public data: any[];

  public ngOnInit(): void {
      this.data = athletesData;
  }

}
