import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MdButton, MdAnchor, MdButtonModule } from "@angular2-material/button";
import { MdDialog } from "ng2-material/components/dialog/dialog";
import { MdDialogTitle } from "ng2-material/components/dialog/dialog-title";
import { MdDialogPortal } from "ng2-material/components/dialog/dialog-portal";
import { MdDialogActions } from "ng2-material/components/dialog/dialog-actions";
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
    selector: 'dialog',
    inputs: ['items'],
    template: `
<md-dialog #confirm (onClose)="confirmClose($event)">
  <md-dialog-title>Are you sure?</md-dialog-title>
  This decision will change your life.
   <ng2-select [placeholder]="'Choose your framework'"
            [options]="items"
            [(ngModel)]="framework">

  </ng2-select>
  <md-dialog-actions ok="Yep" cancel="Nope"></md-dialog-actions>
</md-dialog>

 `
})
export class Dialog {
    @ViewChild(MdDialog) mdDialog: MdDialog;

    framework = 'React';

    public showMessage() {
        this.mdDialog.show();
    }
}