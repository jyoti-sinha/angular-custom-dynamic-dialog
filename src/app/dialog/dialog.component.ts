import { Component, Type, ComponentFactoryResolver, ViewChild, OnDestroy, ComponentRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from './insertion.directive';
import { DialogRef } from './dialog-refs';
import { DialogConfig } from './dialog-config';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  private readonly _onClose = new Subject<any>()

  public componentRef: ComponentRef<any>
  public childComponentType: Type<any>
  public onClose = this._onClose.asObservable()

  // add this:
  @ViewChild(InsertionDirective, {static:false})
  insertionPoint: InsertionDirective

  // and this:
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
  private cd: ChangeDetectorRef,
  private dialogRef: DialogRef,
  private config: DialogConfig
  ) {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
    this.dialogRef.close(true);
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

      let viewContainerRef = this.insertionPoint.viewContainerRef;
      viewContainerRef.clear();

      this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

}