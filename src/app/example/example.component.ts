import { Component } from '@angular/core'
import { DialogService } from '../dialog/dialog.service';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-refs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}
 
 
  onClose() {
    this.dialog.close({
      isClosed: true,
      data: {
          message: 'Something to pass'
        }
    })
  }
}