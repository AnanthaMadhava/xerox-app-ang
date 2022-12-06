import { Component, OnInit } from '@angular/core';
import { UseApiRequests } from '../services/freeapiservices';

interface Images {
  id: string,
  author: string,
  download_url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  images: Images[] | [];

  constructor(private UseApi: UseApiRequests) {}

  ngOnInit(){
    this.getUserApiImages();
  }

  private async getUserApiImages() {
    this.images = await this.UseApi.getImages();
    console.log(this.images);
  }
}

