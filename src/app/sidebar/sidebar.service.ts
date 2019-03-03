import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SidebarService {

  sideDataUrl = 'assets/data/sidebar.json';
  descriptionDataUrl = 'assets/data/description.json';

  constructor(private http: HttpClient) { }

  getSidebarData() {
    return this.http.get(this.sideDataUrl);
  }

  getDescriptionData(){
    return this.http.get(this.descriptionDataUrl);
  }
}
