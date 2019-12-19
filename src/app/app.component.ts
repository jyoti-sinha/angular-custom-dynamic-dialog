import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   {
  constructor(public dialog: DialogService) {}

  openM() {
    const ref = this.dialog.open(ExampleComponent, 
      { 
        data: { 
            message: 'I am a dynamic component inside of a dialog!' 
        }, 
        width: '400px' 
      }
    );

    ref.afterClosed.subscribe(result => {
      if(result){
        console.log('Dialog closed', result);
      }
      
    });
  }
}
