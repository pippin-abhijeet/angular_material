import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragFinalComponent } from "./drag-final/drag-final.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, CommonModule, SimpleFormComponent, MaterialFormComponent, DragDropComponent, DragFinalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'material_practice';
  options = ["Apple","Banana,sugar"];
  myControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
}
