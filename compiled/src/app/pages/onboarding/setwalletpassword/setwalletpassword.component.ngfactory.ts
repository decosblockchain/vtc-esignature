/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './setwalletpassword.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../../src/app/pages/onboarding/setwalletpassword/setwalletpassword.component';
import * as i3 from '@angular/forms';
import * as i4 from '../../../../../../src/app/services/wallet/wallet.service';
import * as i5 from '@angular/router';
const styles_OnboardingSetWalletPasswordComponent:any[] = [i0.styles];
export const RenderType_OnboardingSetWalletPasswordComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_OnboardingSetWalletPasswordComponent,data:{}});
export function View_OnboardingSetWalletPasswordComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),39,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(2,0,(null as any),(null as any),
      1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Set password'])),(_l()(),
      i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(5,0,(null as any),(null as any),
      1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Your wallet has to be protected by a password. Losing or revealing your password will make you lose access to your identity and funds, so make sure you remember it and keep it safe.'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(8,0,(null as any),
          (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Please enter the password to protect your new wallet:'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(11,0,(null as any),
          (null as any),11,'div',[['class','form-group']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(13,0,(null as any),(null as any),1,'label',
          [['for','exampleInputPassword1']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Password'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(16,0,(null as any),
          (null as any),5,'input',[['class','form-control'],['placeholder','Password'],
              ['type','password']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.OnboardingSetWalletPasswordComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,17)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,17).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,17)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,17)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.password = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(17,16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i3.DefaultValueAccessor]),i1.ɵdid(19,671744,(null as any),0,i3.NgModel,[[8,
          (null as any)],[8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {model:[0,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),
          i3.NgControl,(null as any),[i3.NgModel]),i1.ɵdid(21,16384,(null as any),
          0,i3.NgControlStatus,[i3.NgControl],(null as any),(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵeld(24,0,(null as any),(null as any),11,'div',[['class','form-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(26,0,(null as any),
          (null as any),1,'label',[['for','exampleInputPassword1']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Confirm password'])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵeld(29,0,(null as any),(null as any),5,'input',[['class','form-control'],
          ['placeholder','Confirm password'],['type','password']],[[2,'ng-untouched',
          (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
          [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
              (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],
          [(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
          [(null as any),'compositionend']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.OnboardingSetWalletPasswordComponent = _v.component;
        if (('input' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,30)._handleInput($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,30).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('compositionstart' === en)) {
          const pd_2:any = ((<any>i1.ɵnov(_v,30)._compositionStart()) !== false);
          ad = (pd_2 && ad);
        }
        if (('compositionend' === en)) {
          const pd_3:any = ((<any>i1.ɵnov(_v,30)._compositionEnd($event.target.value)) !== false);
          ad = (pd_3 && ad);
        }
        if (('ngModelChange' === en)) {
          const pd_4:any = ((<any>(_co.confirmPassword = $event)) !== false);
          ad = (pd_4 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(30,16384,(null as any),0,i3.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i3.DefaultValueAccessor]),i1.ɵdid(32,671744,(null as any),0,i3.NgModel,[[8,
          (null as any)],[8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {model:[0,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),
          i3.NgControl,(null as any),[i3.NgModel]),i1.ɵdid(34,16384,(null as any),
          0,i3.NgControlStatus,[i3.NgControl],(null as any),(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵeld(37,0,(null as any),(null as any),1,'button',[['class','btn btn-primary']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.OnboardingSetWalletPasswordComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.next()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Next'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵted(-1,(null as any),['\n']))],
      (_ck,_v) => {
        var _co:i2.OnboardingSetWalletPasswordComponent = _v.component;
        const currVal_7:any = _co.password;
        _ck(_v,19,0,currVal_7);
        const currVal_15:any = _co.confirmPassword;
        _ck(_v,32,0,currVal_15);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,21).ngClassUntouched;
        const currVal_1:any = i1.ɵnov(_v,21).ngClassTouched;
        const currVal_2:any = i1.ɵnov(_v,21).ngClassPristine;
        const currVal_3:any = i1.ɵnov(_v,21).ngClassDirty;
        const currVal_4:any = i1.ɵnov(_v,21).ngClassValid;
        const currVal_5:any = i1.ɵnov(_v,21).ngClassInvalid;
        const currVal_6:any = i1.ɵnov(_v,21).ngClassPending;
        _ck(_v,16,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
        const currVal_8:any = i1.ɵnov(_v,34).ngClassUntouched;
        const currVal_9:any = i1.ɵnov(_v,34).ngClassTouched;
        const currVal_10:any = i1.ɵnov(_v,34).ngClassPristine;
        const currVal_11:any = i1.ɵnov(_v,34).ngClassDirty;
        const currVal_12:any = i1.ɵnov(_v,34).ngClassValid;
        const currVal_13:any = i1.ɵnov(_v,34).ngClassInvalid;
        const currVal_14:any = i1.ɵnov(_v,34).ngClassPending;
        _ck(_v,29,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,
            currVal_14);
      });
}
export function View_OnboardingSetWalletPasswordComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'onboarding-setwalletpassword',
      ([] as any[]),(null as any),(null as any),(null as any),View_OnboardingSetWalletPasswordComponent_0,
      RenderType_OnboardingSetWalletPasswordComponent)),i1.ɵdid(1,114688,(null as any),
      0,i2.OnboardingSetWalletPasswordComponent,[i4.WalletService,i5.Router],(null as any),
      (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const OnboardingSetWalletPasswordComponentNgFactory:i1.ComponentFactory<i2.OnboardingSetWalletPasswordComponent> = i1.ɵccf('onboarding-setwalletpassword',
    i2.OnboardingSetWalletPasswordComponent,View_OnboardingSetWalletPasswordComponent_Host_0,
    {},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZ2VydGphYXAvc291cmNlcy9kZWNvcy5jcnlwdG8uZXNpZ25hdHVyZS9zcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvc2V0d2FsbGV0cGFzc3dvcmQvc2V0d2FsbGV0cGFzc3dvcmQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvZ2VydGphYXAvc291cmNlcy9kZWNvcy5jcnlwdG8uZXNpZ25hdHVyZS9zcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvc2V0d2FsbGV0cGFzc3dvcmQvc2V0d2FsbGV0cGFzc3dvcmQuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9nZXJ0amFhcC9zb3VyY2VzL2RlY29zLmNyeXB0by5lc2lnbmF0dXJlL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9zZXR3YWxsZXRwYXNzd29yZC9zZXR3YWxsZXRwYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvZ2VydGphYXAvc291cmNlcy9kZWNvcy5jcnlwdG8uZXNpZ25hdHVyZS9zcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvc2V0d2FsbGV0cGFzc3dvcmQvc2V0d2FsbGV0cGFzc3dvcmQuY29tcG9uZW50LnRzLk9uYm9hcmRpbmdTZXRXYWxsZXRQYXNzd29yZENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXY+XG4gIDxoMT5TZXQgcGFzc3dvcmQ8L2gxPlxuICA8cD5Zb3VyIHdhbGxldCBoYXMgdG8gYmUgcHJvdGVjdGVkIGJ5IGEgcGFzc3dvcmQuIExvc2luZyBvciByZXZlYWxpbmcgeW91ciBwYXNzd29yZCB3aWxsIG1ha2UgeW91IGxvc2UgYWNjZXNzIHRvIHlvdXIgaWRlbnRpdHkgYW5kIGZ1bmRzLCBzbyBtYWtlIHN1cmUgeW91IHJlbWVtYmVyIGl0IGFuZCBrZWVwIGl0IHNhZmUuPC9wPlxuICA8cD5QbGVhc2UgZW50ZXIgdGhlIHBhc3N3b3JkIHRvIHByb3RlY3QgeW91ciBuZXcgd2FsbGV0OjwvcD5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5Db25maXJtIHBhc3N3b3JkPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cImNvbmZpcm1QYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZFwiPlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJuZXh0KClcIj5OZXh0PC9idXR0b24+XG48L2Rpdj5cbiIsIjxvbmJvYXJkaW5nLXNldHdhbGxldHBhc3N3b3JkPjwvb25ib2FyZGluZy1zZXR3YWxsZXRwYXNzd29yZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQSx3RUFBSzthQUFBLDZCQUNIO01BQUE7TUFBQSxnQkFBSSxvREFBaUI7YUFBQSw2QkFDckI7TUFBQTtNQUFBLGdCQUFHO01BQXlMLDRDQUM1TDtVQUFBO1VBQUEsOEJBQUc7TUFBeUQsNENBQzVEO1VBQUE7VUFBQSw0Q0FBd0I7VUFBQSxhQUN0QjtVQUFBO1VBQUEsOEJBQW1DO01BQWdCLDhDQUNuRDtVQUFBO2NBQUE7Y0FBQTtjQUFBO2tCQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUE0QztjQUFBO2NBQUE7WUFBQTtZQUE1QztVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtRQUFBO01BQUEsb0NBQUE7VUFBQTtVQUFBLHFEQUFBO3VCQUFBLG1DQUFBO1VBQUEsaUVBQTBGO2lCQUFBLDZCQUN0RjtNQUNOO1VBQUE7TUFBd0IsOENBQ3RCO1VBQUE7VUFBQSwwREFBbUM7VUFBQSxxQ0FBd0I7TUFDM0Q7VUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBNEM7VUFBQTtVQUFBO1FBQUE7UUFBNUM7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSxxREFBQTt1QkFBQSxtQ0FBQTtVQUFBLGlFQUF5RztpQkFBQSw2QkFDckc7TUFDTjtVQUFBO1lBQUE7WUFBQTtZQUFnQztjQUFBO2NBQUE7WUFBQTtZQUFoQztVQUFBLGdDQUFpRDtNQUFhLDBDQUMxRDs7O1FBUDBDO1FBQTVDLFlBQTRDLFNBQTVDO1FBSTRDO1FBQTVDLFlBQTRDLFVBQTVDOztRQUpBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBQSxxRUFBQTtRQUlBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsWUFBQTtZQUFBLFVBQUE7Ozs7b0JDVko7TUFBQTtxREFBQSxVQUFBO01BQUE7TUFBQTtJQUFBOzs7OzsifQ==
