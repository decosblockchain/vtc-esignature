/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './signdocument.component.scss.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from '../../../../../src/app/pages/signdocument/signdocument.component';
import * as i4 from '@angular/common';
import * as i5 from '@angular/router';
import * as i6 from '../../../../../src/app/services/wallet/wallet.service';
import * as i7 from '../../../../../src/app/services/blockchain/blockchain.service';
import * as i8 from '../../../../../src/app/services/document/document.service';
const styles_SignDocumentComponent:any[] = [i0.styles];
export const RenderType_SignDocumentComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_SignDocumentComponent,data:{}});
function View_SignDocumentComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'p',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(1,(null as any),['This document\'s address on the blockchain is: ','']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.address;
        _ck(_v,1,0,currVal_0);
      });
}
function View_SignDocumentComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'button',[['class',
      'btn']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.sign()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Sign']))],(null as any),
      (null as any));
}
function View_SignDocumentComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),17,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,0,(null as any),(null as any),
      11,'div',[['class','form-group']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i1.ɵeld(4,0,(null as any),(null as any),1,'label',[['for','exampleInputPassword1']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Password'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n      '])),(_l()(),i1.ɵeld(7,0,(null as any),(null as any),5,'input',
          [['class','form-control'],['placeholder','Password'],['type','password']],
          [[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
              (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
              [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
              'ngModelChange'],[(null as any),'input'],[(null as any),'blur'],[(null as any),
              'compositionstart'],[(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,8)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,8).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,8)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,8)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.password = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(8,16384,(null as any),0,i2.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i1.ɵdid(10,671744,(null as any),0,i2.NgModel,[[8,
          (null as any)],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {model:[0,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),
          i2.NgControl,(null as any),[i2.NgModel]),i1.ɵdid(12,16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵeld(15,0,(null as any),(null as any),1,'button',[['class','btn']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.signPassword()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Sign'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_7:any = _co.password;
    _ck(_v,10,0,currVal_7);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,12).ngClassUntouched;
    const currVal_1:any = i1.ɵnov(_v,12).ngClassTouched;
    const currVal_2:any = i1.ɵnov(_v,12).ngClassPristine;
    const currVal_3:any = i1.ɵnov(_v,12).ngClassDirty;
    const currVal_4:any = i1.ɵnov(_v,12).ngClassValid;
    const currVal_5:any = i1.ɵnov(_v,12).ngClassInvalid;
    const currVal_6:any = i1.ɵnov(_v,12).ngClassPending;
    _ck(_v,7,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  });
}
export function View_SignDocumentComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),18,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(2,0,(null as any),(null as any),
      1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Sign Document'])),(_l()(),
      i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(5,0,(null as any),(null as any),
      1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Select the document file you wish to sign, and then press the Sign button.'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(8,0,(null as any),
          (null as any),0,'input',[['type','file']],(null as any),[[(null as any),
              'change']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.SignDocumentComponent = _v.component;
            if (('change' === en)) {
              const pd_0:any = ((<any>_co.onFileChange($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SignDocumentComponent_1)),
      i1.ɵdid(11,16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SignDocumentComponent_2)),
      i1.ɵdid(14,16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SignDocumentComponent_3)),
      i1.ɵdid(17,16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i3.SignDocumentComponent = _v.component;
    const currVal_0:any = (_co.address != '');
    _ck(_v,11,0,currVal_0);
    const currVal_1:boolean = !_co.passwordRequired;
    _ck(_v,14,0,currVal_1);
    const currVal_2:any = _co.passwordRequired;
    _ck(_v,17,0,currVal_2);
  },(null as any));
}
export function View_SignDocumentComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'signdocument',
      ([] as any[]),(null as any),(null as any),(null as any),View_SignDocumentComponent_0,
      RenderType_SignDocumentComponent)),i1.ɵdid(1,114688,(null as any),0,i3.SignDocumentComponent,
      [i5.Router,i6.WalletService,i7.BlockchainService,i8.DocumentService],(null as any),
      (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const SignDocumentComponentNgFactory:i1.ComponentFactory<i3.SignDocumentComponent> = i1.ɵccf('signdocument',
    i3.SignDocumentComponent,View_SignDocumentComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZ2VydGphYXAvc291cmNlcy9kZWNvcy5jcnlwdG8uZXNpZ25hdHVyZS9zcmMvYXBwL3BhZ2VzL3NpZ25kb2N1bWVudC9zaWduZG9jdW1lbnQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvZ2VydGphYXAvc291cmNlcy9kZWNvcy5jcnlwdG8uZXNpZ25hdHVyZS9zcmMvYXBwL3BhZ2VzL3NpZ25kb2N1bWVudC9zaWduZG9jdW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9nZXJ0amFhcC9zb3VyY2VzL2RlY29zLmNyeXB0by5lc2lnbmF0dXJlL3NyYy9hcHAvcGFnZXMvc2lnbmRvY3VtZW50L3NpZ25kb2N1bWVudC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvZ2VydGphYXAvc291cmNlcy9kZWNvcy5jcnlwdG8uZXNpZ25hdHVyZS9zcmMvYXBwL3BhZ2VzL3NpZ25kb2N1bWVudC9zaWduZG9jdW1lbnQuY29tcG9uZW50LnRzLlNpZ25Eb2N1bWVudENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXY+XG4gIDxoMT5TaWduIERvY3VtZW50PC9oMT5cbiAgPHA+U2VsZWN0IHRoZSBkb2N1bWVudCBmaWxlIHlvdSB3aXNoIHRvIHNpZ24sIGFuZCB0aGVuIHByZXNzIHRoZSBTaWduIGJ1dHRvbi48L3A+XG4gIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwib25GaWxlQ2hhbmdlKCRldmVudClcIiAvPlxuICA8cCAqbmdJZj1cImFkZHJlc3MgIT0gJydcIj5UaGlzIGRvY3VtZW50J3MgYWRkcmVzcyBvbiB0aGUgYmxvY2tjaGFpbiBpczoge3thZGRyZXNzfX08L3A+XG4gIDxidXR0b24gKm5nSWY9XCIhcGFzc3dvcmRSZXF1aXJlZFwiIGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cInNpZ24oKVwiPlNpZ248L2J1dHRvbj5cblxuICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRSZXF1aXJlZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cInNpZ25QYXNzd29yZCgpXCI+U2lnbjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiPHNpZ25kb2N1bWVudD48L3NpZ25kb2N1bWVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDSUU7TUFBQSx3RUFBeUI7YUFBQTs7O1FBQUE7UUFBQTs7OztvQkFDekI7TUFBQTtJQUFBO0lBQUE7SUFBOEM7TUFBQTtNQUFBO0lBQUE7SUFBOUM7RUFBQSxnQ0FBK0Q7Ozs7b0JBRS9EO01BQUEsd0VBQThCO2FBQUEsK0JBQzVCO01BQUE7TUFBQSw4QkFBd0I7TUFDdEI7VUFBQTtNQUFtQyxnREFBZ0I7VUFBQSxlQUNuRDtVQUFBO1VBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUE0QztjQUFBO2NBQUE7WUFBQTtZQUE1QztVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtRQUFBO01BQUEsb0NBQUE7VUFBQTtVQUFBLHFEQUFBO3VCQUFBLG1DQUFBO1VBQUEsaUVBQTBGO2lCQUFBLCtCQUN0RjtNQUNOO1VBQUE7WUFBQTtZQUFBO1lBQW9CO2NBQUE7Y0FBQTtZQUFBO1lBQXBCO1VBQUEsZ0NBQTZDO01BQWE7O0lBRlo7SUFBNUMsWUFBNEMsU0FBNUM7O0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxXQUFBLHFFQUFBOzs7O29CQVZOO01BQUEsd0VBQUs7YUFBQSw2QkFDSDtNQUFBO01BQUEsZ0JBQUkscURBQWtCO2FBQUEsNkJBQ3RCO01BQUE7TUFBQSxnQkFBRztNQUE4RSw0Q0FDakY7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUFtQjtjQUFBO2NBQUE7WUFBQTtZQUFuQjtVQUFBLGdDQUFxRDtNQUNyRDthQUFBO1VBQUEsaUNBQXNGO01BQ3RGO2FBQUE7VUFBQSxpQ0FBNEU7TUFFNUU7YUFBQTtVQUFBLGlDQU1NO01BQ0Y7O0lBVkQ7SUFBSCxZQUFHLFNBQUg7SUFDUTtJQUFSLFlBQVEsU0FBUjtJQUVLO0lBQUwsWUFBSyxTQUFMOzs7O29CQ1BGO01BQUE7c0NBQUEsVUFBQTtNQUFBO01BQUE7SUFBQTs7OzsifQ==
