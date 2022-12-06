import { Injectable } from '@angular/core';

@Injectable()
export class UseApiRequests {
    async getImages() {
        const getImages = await fetch('https://picsum.photos/v2/list');
        const data = await getImages.json();
        return data;
    }
}