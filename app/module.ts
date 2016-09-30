
import { NgModule, ViewChild } from '@angular/core';
// Ahead of Time compile

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Ng2SelectModule } from 'ng2-material-select';

import { Component } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import { MdButton, MdAnchor } from '@angular2-material/button';
import {MdButtonModule} from '@angular2-material/button';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
// import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';

import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
import { MdSidenavModule} from '@angular2-material/sidenav';
import {MdListModule} from '@angular2-material/list';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule} from '@angular2-material/icon';
import {
  MdLiveAnnouncer,
  MdRippleModule,
  RtlModule,
  PortalModule,
  OverlayModule
} from '@angular2-material/core';

//customized MdIconModule that excludes MdIconRegistry from providers
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdUniqueSelectionDispatcher } from '@angular2-material/radio';
import { MdTab } from '@angular2-material/tabs';
import { MdList } from '@angular2-material/list';
import {MdInput} from '@angular2-material/input';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdInputModule} from '@angular2-material/input';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';
import { MdCoreModule } from '@angular2-material/core';
import {MdRipple} from '@angular2-material/core';
import {MdMenuModule} from '@angular2-material/menu';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material';
import { MdDialog } from "ng2-material/components/dialog/dialog";
import { MdDialogTitle } from "ng2-material/components/dialog/dialog-title";
import { MdDialogActions } from "ng2-material/components/dialog/dialog-actions";
import { MdDialogPortal } from "ng2-material/components/dialog/dialog-portal";

import { Dialog } from "./dialog";
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  selector: 'test',
  template: `

  <button md-button (click)="showAlert()">Confirm</button>
  <dialog [items] = options></dialog>
  `
})
export class Test {


  @ViewChild(Dialog) dialog: Dialog;
  options = ['Angular', 'React', 'test', 'dropDown']
  framework = 'React';
  showAlert() {

    this.dialog.showMessage();
  }
}


const MATERIAL_MODULES = [
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,

  // MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressCircleModule,
  MdRadioModule,
  MdRippleModule,
  //MdSelectModule,
  MdSidenavModule,
  //MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,

];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SelectModule,
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdGridListModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdRippleModule.forRoot(),
    //MdSelectModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    PortalModule.forRoot(),
    RtlModule.forRoot(),

    // These modules include providers.
    MdButtonToggleModule.forRoot(),
    //MdDialogModule.forRoot(),
    MdIconModule.forRoot(),
    MdMenuModule.forRoot(),
    MdRadioModule.forRoot(),
    //MdSliderModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdTooltipModule.forRoot(),
    OverlayModule.forRoot(),
  ],
  exports: [
    MATERIAL_MODULES,

    // Ng2SelectModule,
    //  Ng2Select
  ],
  providers: [

    MdUniqueSelectionDispatcher,
    MdIconRegistry,
    //  MATERIAL_PROVIDERS,
    MdLiveAnnouncer,

  ],
  declarations: [
    Test,
    Dialog,

    MdDialog,
    MdDialogTitle,
    MdDialogActions,
    MdDialogPortal,
  ],
  bootstrap: [Test]
})
export class AppModule {
}
