import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  descriptionData:any = [];
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.getDescriptionData().subscribe((data) => {
      if(data['code'] === 200){
        this.descriptionData = data['data'];
        console.log(this.descriptionData);
      }
      
    },
  error => {console.log('something went wrong' + error)})
  }

}
