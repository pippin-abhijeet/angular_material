import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop,CdkDropList,DragDropModule,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-final',
  templateUrl: './drag-final.component.html',
  standalone : true,
  styleUrls: ['./drag-final.component.css'],
  imports: [CommonModule, DragDropModule],
})

export class DragFinalComponent {
  // Define lists with random data
  lists = [
    { name: 'Lane 1', items: ['Item 1.1', 'Item 1.2', 'Item 1.3', 'Item 1.4', 'Item 1.5'] },
    { name: 'Lane 2', items: ['Item 2.1', 'Item 2.2', 'Item 2.3', 'Item 2.4', 'Item 2.5'] },
    { name: 'Lane 3', items: ['Item 3.1', 'Item 3.2', 'Item 3.3', 'Item 3.4', 'Item 3.5'] },
    { name: 'Lane 4', items: ['Item 4.1', 'Item 4.2', 'Item 4.3', 'Item 4.4', 'Item 4.5'] }
  ];

  drop(event: CdkDragDrop<string[]>) {

    // console.log(event.container.data,event.container)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  async controlPredicate(drag: CdkDrag<any>, drop: CdkDropList<any>){
  
    // let myPromise = new Promise((resolve, reject) => {
    //   let success = true; // Simulate an operation result
    
    //   if (success) {
    //     resolve(true)
    //   } else {
    //     reject(false);
    //   }
    // })

    return false;
  }

}

