import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sideData:any = [];

  constructor(private sidebarService : SidebarService) { }

  ngOnInit() {
    this.sidebarService.getSidebarData().subscribe((data) => {
      if(data['code'] === 200){
        this.sideData = data['data'];
        console.log(this.sideData[0].title);
      }
    },
    error => { console.log('something went wrong' + error);})
  }

}
