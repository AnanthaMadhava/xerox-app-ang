import { Component, OnInit } from '@angular/core';
// import { UseApiRequests } from '../services/freeapiservices';

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

  images: [
    { id: "0", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/0/5000/3333" },
    { id: "1", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/1/5000/3333" },
    { id: "2", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/2/5000/3333" },
    { id: "3", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/3/5000/3333" },
    { id: "4", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/4/5000/3333" },
    { id: "5", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/5/5000/3334" },
    { id: "6", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/6/5000/3333" },
    { id: "7", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/7/4728/3168" },
    { id: "8", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/8/5000/3333" },
    { id: "9", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/9/5000/3269" },
    { id: "10", author: "Paul Jarvis", download_url: "https://picsum.photos/id/10/2500/1667" },
    { id: "11", author: "Paul Jarvis", download_url: "https://picsum.photos/id/11/2500/1667" },
    { id: "12", author: "Paul Jarvis", download_url: "https://picsum.photos/id/12/2500/1667" },
    { id: "13", author: "Paul Jarvis", download_url: "https://picsum.photos/id/13/2500/1667" },
    { id: "14", author: "Paul Jarvis", download_url: "https://picsum.photos/id/14/2500/1667" },
    { id: "15", author: "Paul Jarvis", download_url: "https://picsum.photos/id/15/2500/1667" },
    { id: "16", author: "Paul Jarvis", download_url: "https://picsum.photos/id/16/2500/1667" },
    { id: "17", author: "Paul Jarvis", download_url: "https://picsum.photos/id/17/2500/1667" },
    { id: "18", author: "Paul Jarvis", download_url: "https://picsum.photos/id/18/2500/1667" },
    { id: "19", author: "Paul Jarvis", download_url: "https://picsum.photos/id/19/2500/1667" },
    { id: "20", author: "Aleks Dorohovich", download_url: "https://picsum.photos/id/20/3670/2462" },
    { id: "21", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/21/3008/2008" },
    { id: "22", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/22/4434/3729" },
    { id: "23", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/23/3887/4899" },
    { id: "24", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/24/4855/1803" },
    { id: "25", author: "Alejandro Escamilla", download_url: "https://picsum.photos/id/25/5000/3333" },
    { id: "26", author: "Vadim Sherbakov", download_url: "https://picsum.photos/id/26/4209/2769" },
    { id: "27", author: "Yoni Kaplan-Nadel", download_url: "https://picsum.photos/id/27/3264/1836" },
    { id: "28", author: "Jerry Adney", download_url: "https://picsum.photos/id/28/4928/3264" },
    { id: "29", author: "Go Wild", download_url: "https://picsum.photos/id/29/4000/2670" }
]

  // constructor(private UseApi: UseApiRequests) {}

  ngOnInit(){
    // this.getUserApiImages();
  }

  // private async getUserApiImages() {
  //   this.images = await this.UseApi.getImages();
  //   console.log(this.images);
  // }
}

