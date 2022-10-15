import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-welocome-page',
  templateUrl: './welocome-page.component.html',
  styleUrls: ['./welocome-page.component.scss']
})
export class WelocomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Reached Inventory Welcome Page")
  }

}
