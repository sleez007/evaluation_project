import { Component, OnInit } from '@angular/core';
import { MenuDef } from 'src/app/interfaces/menu.definition';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems : MenuDef[] = [
    {
      title : "Grid 1",
      path: "/grid1"
    },
    {
      title : "Grid 2",
      path: "/grid2"
    },
    {
      title : "Grid 3",
      path: "/grid3"
    },
    {
      title : "Grid 4",
      path: "/grid4"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
