!function(){function e(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function o(e,o,t,r,i,n,a){try{var s=e[n](a),p=s.value}catch(c){return void t(c)}s.done?o(p):Promise.resolve(p).then(r,i)}function t(e){return function(){var t=this,r=arguments;return new Promise(function(i,n){var a=e.apply(t,r);function s(e){o(a,i,n,s,p,"next",e)}function p(e){o(a,i,n,s,p,"throw",e)}s(void 0)})}}function r(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(self.webpackChunkventas_moviles=self.webpackChunkventas_moviles||[]).push([[3527],{3527:function(o,i,n){"use strict";n.r(i),n.d(i,{ion_popover:function(){return x}});var a=n(3150),s=n(7585),p=n(7330),c=n(7053),l=n(1269),d=n(4001),v=n(4086),h=function(e,o){var t="top",r="left",i=e.querySelector(".popover-content"),n=i.getBoundingClientRect(),a=n.width,s=n.height,p=e.ownerDocument.defaultView.innerWidth,c=e.ownerDocument.defaultView.innerHeight,l=o&&o.target&&o.target.getBoundingClientRect(),d=null!=l&&"top"in l?l.top:c/2-s/2,h=null!=l&&"left"in l?l.left:p/2,f=l&&l.width||0,m=l&&l.height||0,b=e.querySelector(".popover-arrow"),x=b.getBoundingClientRect(),g=x.width,w=x.height;null==l&&(b.style.display="none");var y={top:d+m,left:h+f/2-g/2},k={top:d+m+(w-1),left:h+f/2-a/2},D=!1,P=!1;k.left<u+25?(D=!0,k.left=u):a+u+k.left+25>p&&(P=!0,k.left=p-a-u,r="right"),d+m+s>c&&d-s>0?(y.top=d-(w+1),k.top=d-s-(w-1),e.className=e.className+" popover-bottom",t="bottom"):d+m+s>c&&(i.style.bottom=u+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",i.style.top=k.top+"px",i.style.left=k.left+"px",D&&(i.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),P&&(i.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),i.style.transformOrigin=t+" "+r;var E=(0,v.c)(),S=(0,v.c)(),C=(0,v.c)();return S.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),C.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),E.addElement(e).easing("ease").duration(100).addAnimation([S,C])},u=5,f=function(e){var o=(0,v.c)(),t=(0,v.c)(),r=(0,v.c)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},m=function(e,o){var t=e.ownerDocument,r="rtl"===t.dir,i="top",n=r?"right":"left",a=e.querySelector(".popover-content"),s=a.getBoundingClientRect(),p=s.width,c=s.height,l=t.defaultView.innerWidth,d=t.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),u=null!=h&&"bottom"in h?h.bottom:d/2-c/2,f=h&&h.height||0,m={top:u,left:null!=h&&"left"in h?r?h.left-p+h.width:h.left:l/2-p/2};m.left<12?(m.left=12,n="left"):p+12+m.left>l&&(m.left=l-p-12,n="right"),u+f+c>d&&u-c>0?(m.top=u-c-f,e.className=e.className+" popover-bottom",i="bottom"):u+f+c>d&&(a.style.bottom="12px");var b=(0,v.c)(),x=(0,v.c)(),g=(0,v.c)(),w=(0,v.c)(),y=(0,v.c)();return x.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:"".concat(m.top,"px"),left:"".concat(m.left,"px"),"transform-origin":"".concat(i," ").concat(n)}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},b=function(e){var o=(0,v.c)(),t=(0,v.c)(),r=(0,v.c)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},x=function(){function o(e){var t=this;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(0,a.r)(this,e),this.didPresent=(0,a.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,a.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,a.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,a.e)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,c.B)},this.onLifecycle=function(e){var o=t.usersElement,r=g[e.type];if(o&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}}}var i,n,v,u,x;return i=o,(n=[{key:"connectedCallback",value:function(){(0,c.e)(this.el)}},{key:"present",value:(x=t(regeneratorRuntime.mark(function e(){var o,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(o=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,(0,p.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t);case 8:return this.usersElement=e.sent,e.next=11,(0,d.e)(this.usersElement);case 11:return e.abrupt("return",(0,c.d)(this,"popoverEnter",h,m,this.event));case 12:case"end":return e.stop()}},e,this)})),function(){return x.apply(this,arguments)})},{key:"dismiss",value:(u=t(regeneratorRuntime.mark(function e(o,t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.f)(this,o,t,"popoverLeave",f,b,this.event);case 2:if(r=e.sent,e.t0=r,!e.t0){e.next=7;break}return e.next=7,(0,p.d)(this.delegate,this.usersElement);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)})),function(e,o){return u.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return(0,c.g)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,c.g)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var o,t=(0,s.b)(this),r=this.onLifecycle;return(0,a.h)(a.H,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},(0,l.g)(this.cssClass)),(o={},e(o,t,!0),e(o,"popover-translucent",this.translucent),o)),onIonPopoverDidPresent:r,onIonPopoverWillPresent:r,onIonPopoverWillDismiss:r,onIonPopoverDidDismiss:r,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},(0,a.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),(0,a.h)("div",{tabindex:"0"}),(0,a.h)("div",{class:"popover-wrapper ion-overlay-wrapper"},(0,a.h)("div",{class:"popover-arrow"}),(0,a.h)("div",{class:"popover-content"})),(0,a.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,a.i)(this)}}])&&r(i.prototype,n),v&&r(i,v),o}(),g={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};x.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}])}();