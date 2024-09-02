import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})


export class DragDropComponent {

  todo = ["Eat breakfast","Go to office","Drink bine"];
  done = ["Sleep","Make podi dosa"];

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    // 'Episode IV - A New Hope',
    // 'Episode V - The Empire Strikes Back',
    // 'Episode VI - Return of the Jedi',
    // 'Episode VII - The Force Awakens',
    // 'Episode VIII - The Last Jedi',
    // 'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  dropAcrossLists(event: CdkDragDrop<string[]>) {
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

}
