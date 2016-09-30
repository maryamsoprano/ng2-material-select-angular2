"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var dialog_1 = require("ng2-material/components/dialog/dialog");
var Dialog = (function () {
    function Dialog() {
        this.framework = 'React';
    }
    Dialog.prototype.showMessage = function () {
        this.mdDialog.show();
    };
    return Dialog;
}());
__decorate([
    core_1.ViewChild(dialog_1.MdDialog),
    __metadata("design:type", dialog_1.MdDialog)
], Dialog.prototype, "mdDialog", void 0);
Dialog = __decorate([
    core_1.Component({
        selector: 'dialog',
        inputs: ['items'],
        template: "\n<md-dialog #confirm (onClose)=\"confirmClose($event)\">\n  <md-dialog-title>Are you sure?</md-dialog-title>\n  This decision will change your life.\n   <ng2-select [placeholder]=\"'Choose your framework'\"\n            [options]=\"items\"\n            [(ngModel)]=\"framework\">\n\n  </ng2-select>\n  <md-dialog-actions ok=\"Yep\" cancel=\"Nope\"></md-dialog-actions>\n</md-dialog>\n\n "
    }),
    __metadata("design:paramtypes", [])
], Dialog);
exports.Dialog = Dialog;
//# sourceMappingURL=dialog.js.map