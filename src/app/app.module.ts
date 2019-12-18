import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DialogModule } from './dialog/dialog.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DialogModule ],
  declarations: [ AppComponent, HelloComponent, ExampleComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ExampleComponent]
})
export class AppModule { }
