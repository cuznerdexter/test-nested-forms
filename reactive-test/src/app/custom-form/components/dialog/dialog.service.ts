import { Injectable } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  compMap = [
    {name: 'CONTENT', comp: ContentComponent}
  ];

  constructor() { }


  getSelectedComponent(compName: string) {
    let result = this.compMap.find(obj => obj.name === compName);
    return result.comp;
  }
}
