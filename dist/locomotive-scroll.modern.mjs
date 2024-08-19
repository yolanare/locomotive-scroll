import t from"lenis";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},s.apply(this,arguments)}class e{constructor({scrollElements:t,rootMargin:s="-1px -1px -1px -1px",IORaf:e}){this.scrollElements=void 0,this.rootMargin=void 0,this.IORaf=void 0,this.observer=void 0,this.scrollElements=t,this.rootMargin=s,this.IORaf=e,this._init()}_init(){this.observer=new IntersectionObserver(t=>{t.forEach(t=>{const s=this.scrollElements.find(s=>s.$el===t.target);t.isIntersecting?(s&&(s.isAlreadyIntersected=!0),this._setInview(t)):s&&s.isAlreadyIntersected&&this._setOutOfView(t)})},{rootMargin:this.rootMargin});for(const t of this.scrollElements)this.observe(t.$el)}destroy(){this.observer.disconnect()}observe(t){t&&this.observer.observe(t)}unobserve(t){t&&this.observer.unobserve(t)}_setInview(t){const s=this.scrollElements.find(s=>s.$el===t.target);this.IORaf&&(null==s||s.setInteractivityOn()),!this.IORaf&&(null==s||s.setInview())}_setOutOfView(t){const s=this.scrollElements.find(s=>s.$el===t.target);this.IORaf&&(null==s||s.setInteractivityOff()),!this.IORaf&&(null==s||s.setOutOfView()),null!=s&&s.attributes.scrollRepeat||this.IORaf||this.unobserve(t.target)}}function i(t,s,e,i,r){return e+((r-t)/(s-t)*(i-e)||0)}function r(t,s){return t.reduce((t,e)=>Math.abs(e-s)<Math.abs(t-s)?e:t)}class l{constructor({$el:t,id:s,modularInstance:e,subscribeElementUpdateFn:i,unsubscribeElementUpdateFn:r,needRaf:l,scrollOrientation:n}){var o,a,c,h,d;this.$el=void 0,this.id=void 0,this.needRaf=void 0,this.attributes=void 0,this.scrollOrientation=void 0,this.isAlreadyIntersected=void 0,this.intersection=void 0,this.metrics=void 0,this.currentScroll=void 0,this.translateValue=void 0,this.progress=void 0,this.lastProgress=void 0,this.modularInstance=void 0,this.progressModularModules=void 0,this.isInview=void 0,this.isInteractive=void 0,this.isInFold=void 0,this.isFirstResize=void 0,this.subscribeElementUpdateFn=void 0,this.unsubscribeElementUpdateFn=void 0,this.$el=t,this.id=s,this.needRaf=l,this.scrollOrientation=n,this.modularInstance=e,this.subscribeElementUpdateFn=i,this.unsubscribeElementUpdateFn=r,this.attributes={scrollClass:null!=(o=this.$el.dataset.scrollClass)?o:"is-inview",scrollOffset:null!=(a=this.$el.dataset.scrollOffset)?a:"0,0",scrollPosition:null!=(c=this.$el.dataset.scrollPosition)?c:"start,end",scrollModuleProgress:null!=this.$el.dataset.scrollModuleProgress,scrollCssProgress:null!=this.$el.dataset.scrollCssProgress,scrollEventProgress:null!=(h=this.$el.dataset.scrollEventProgress)?h:null,scrollSpeed:null!=this.$el.dataset.scrollSpeed?parseFloat(this.$el.dataset.scrollSpeed):null,scrollRepeat:null!=this.$el.dataset.scrollRepeat,scrollCall:null!=(d=this.$el.dataset.scrollCall)?d:null,scrollCallSelf:null!=this.$el.dataset.scrollCallSelf,scrollIgnoreFold:null!=this.$el.dataset.scrollIgnoreFold,scrollEnableTouchSpeed:null!=this.$el.dataset.scrollEnableTouchSpeed},this.intersection={start:0,end:0},this.metrics={offsetStart:0,offsetEnd:0,bcr:{}},this.currentScroll="vertical"===this.scrollOrientation?window.scrollY:window.scrollX,this.translateValue=0,this.progress=0,this.lastProgress=null,this.progressModularModules=[],this.isInview=!1,this.isInteractive=!1,this.isAlreadyIntersected=!1,this.isInFold=!1,this.isFirstResize=!0,this._init()}_init(){this.needRaf&&(this.modularInstance&&this.attributes.scrollModuleProgress&&this._getProgressModularModules(),this._resize())}onResize({currentScroll:t}){this.currentScroll=t,this._resize()}onRender({currentScroll:t,smooth:s}){const e="vertical"===this.scrollOrientation?window.innerHeight:window.innerWidth;if(this.currentScroll=t,this._computeProgress(),this.attributes.scrollSpeed&&!isNaN(this.attributes.scrollSpeed))if(this.attributes.scrollEnableTouchSpeed||s){if(this.isInFold){const t=Math.max(0,this.progress);this.translateValue=t*e*this.attributes.scrollSpeed*-1}else{const t=i(0,1,-1,1,this.progress);this.translateValue=t*e*this.attributes.scrollSpeed*-1}this.$el.style.transform="vertical"===this.scrollOrientation?`translate3d(0, ${this.translateValue}px, 0)`:`translate3d(${this.translateValue}px, 0, 0)`}else this.translateValue&&(this.$el.style.transform="translate3d(0, 0, 0)"),this.translateValue=0}setInview(){if(this.isInview)return;this.isInview=!0,this.$el.classList.add(this.attributes.scrollClass);const t=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("enter",t)}setOutOfView(){if(!this.isInview||!this.attributes.scrollRepeat)return;this.isInview=!1,this.$el.classList.remove(this.attributes.scrollClass);const t=this._getScrollCallFrom();this.attributes.scrollCall&&this._dispatchCall("leave",t)}setInteractivityOn(){this.isInteractive||(this.isInteractive=!0,this.subscribeElementUpdateFn(this))}setInteractivityOff(){this.isInteractive&&(this.isInteractive=!1,this.unsubscribeElementUpdateFn(this),null!=this.lastProgress&&this._computeProgress(r([0,1],this.lastProgress)))}_resize(){this.metrics.bcr=this.$el.getBoundingClientRect(),this._computeMetrics(),this._computeIntersection(),this.isFirstResize&&(this.isFirstResize=!1,this.isInFold&&this.setInview())}_computeMetrics(){const{top:t,left:s,height:e,width:i}=this.metrics.bcr,r="vertical"===this.scrollOrientation?window.innerHeight:window.innerWidth,l="vertical"===this.scrollOrientation?e:i;this.metrics.offsetStart=this.currentScroll+("vertical"===this.scrollOrientation?t:s)-this.translateValue,this.metrics.offsetEnd=this.metrics.offsetStart+l,this.isInFold=this.metrics.offsetStart<r&&!this.attributes.scrollIgnoreFold}_computeIntersection(){const t="vertical"===this.scrollOrientation?window.innerHeight:window.innerWidth,s="vertical"===this.scrollOrientation?this.metrics.bcr.height:this.metrics.bcr.width,e=this.attributes.scrollOffset.split(","),i=null!=e[0]?e[0].trim():"0",r=null!=e[1]?e[1].trim():"0",l=this.attributes.scrollPosition.split(",");let n=null!=l[0]?l[0].trim():"start";const o=null!=l[1]?l[1].trim():"end",a=i.includes("%")?t*parseInt(i.replace("%","").trim())*.01:parseInt(i),c=r.includes("%")?t*parseInt(r.replace("%","").trim())*.01:parseInt(r);switch(this.isInFold&&(n="fold"),n){case"start":default:this.intersection.start=this.metrics.offsetStart-t+a;break;case"middle":this.intersection.start=this.metrics.offsetStart-t+a+.5*s;break;case"end":this.intersection.start=this.metrics.offsetStart-t+a+s;break;case"fold":this.intersection.start=0}switch(o){case"start":this.intersection.end=this.metrics.offsetStart-c;break;case"middle":this.intersection.end=this.metrics.offsetStart-c+.5*s;break;default:this.intersection.end=this.metrics.offsetStart-c+s}if(this.intersection.end<=this.intersection.start)switch(o){case"start":default:this.intersection.end=this.intersection.start+1;break;case"middle":this.intersection.end=this.intersection.start+.5*s;break;case"end":this.intersection.end=this.intersection.start+s}}_computeProgress(t){const s=null!=t?t:(e=i(this.intersection.start,this.intersection.end,0,1,this.currentScroll))<0?0:e>1?1:e;var e;if(this.progress=s,s!=this.lastProgress){if(this.lastProgress=s,this.attributes.scrollCssProgress&&this._setCssProgress(s),this.attributes.scrollEventProgress&&this._setCustomEventProgress(s),this.attributes.scrollModuleProgress)for(const t of this.progressModularModules)this.modularInstance&&this.modularInstance.call("onScrollProgress",s,t.moduleName,t.moduleId);s>0&&s<1&&this.setInview(),0===s&&this.setOutOfView(),1===s&&this.setOutOfView()}}_setCssProgress(t=0){this.$el.style.setProperty("--progress",t.toString())}_setCustomEventProgress(t=0){const s=this.attributes.scrollEventProgress;if(!s)return;const e=new CustomEvent(s,{detail:{target:this.$el,progress:t}});window.dispatchEvent(e)}_getProgressModularModules(){if(!this.modularInstance)return;const t=Object.keys(this.$el.dataset).filter(t=>t.includes("module")),s=Object.entries(this.modularInstance.modules);if(t.length)for(const e of t){const t=this.$el.dataset[e];if(!t)return;for(const e of s){const[s,i]=e;t in i&&this.progressModularModules.push({moduleName:s,moduleId:t})}}}_getScrollCallFrom(){const t=r([this.intersection.start,this.intersection.end],this.currentScroll);return this.intersection.start===t?"start":"end"}_dispatchCall(t,s){var e,i;const r=null==(e=this.attributes.scrollCall)?void 0:e.split(","),l=null==(i=this.attributes)?void 0:i.scrollCallSelf;if(r&&r.length>1){var n;const[e,i,o]=r;let a;a=l?this.$el.dataset[`module${i.trim()}`]:o,this.modularInstance&&this.modularInstance.call(e.trim(),{target:this.$el,way:t,from:s},i.trim(),null==(n=a)?void 0:n.trim())}else if(r){const[e]=r,i=new CustomEvent(e,{detail:{target:this.$el,way:t,from:s}});window.dispatchEvent(i)}}}const n=["scrollOffset","scrollPosition","scrollModuleProgress","scrollCssProgress","scrollEventProgress","scrollSpeed"];class o{constructor({$el:t,modularInstance:s,triggerRootMargin:e,rafRootMargin:i,scrollOrientation:r}){this.$scrollContainer=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.scrollElements=void 0,this.triggeredScrollElements=void 0,this.RAFScrollElements=void 0,this.scrollElementsToUpdate=void 0,this.IOTriggerInstance=void 0,this.IORafInstance=void 0,this.scrollOrientation=void 0,t?(this.$scrollContainer=t,this.modularInstance=s,this.scrollOrientation=r,this.triggerRootMargin=null!=e?e:"-1px -1px -1px -1px",this.rafRootMargin=null!=i?i:"100% 100% 100% 100%",this.scrollElements=[],this.triggeredScrollElements=[],this.RAFScrollElements=[],this.scrollElementsToUpdate=[],this._init()):console.error("Please provide a DOM Element as scrollContainer")}_init(){const t=this.$scrollContainer.querySelectorAll("[data-scroll]"),s=Array.from(t);this._subscribeScrollElements(s),this.IOTriggerInstance=new e({scrollElements:[...this.triggeredScrollElements],rootMargin:this.triggerRootMargin,IORaf:!1}),this.IORafInstance=new e({scrollElements:[...this.RAFScrollElements],rootMargin:this.rafRootMargin,IORaf:!0})}destroy(){this.IOTriggerInstance.destroy(),this.IORafInstance.destroy(),this._unsubscribeAllScrollElements()}onResize({currentScroll:t}){for(const s of this.RAFScrollElements)s.onResize({currentScroll:t})}onRender({currentScroll:t,smooth:s}){for(const e of this.scrollElementsToUpdate)e.onRender({currentScroll:t,smooth:s})}removeScrollElements(t){const s=t.querySelectorAll("[data-scroll]");if(s.length){for(let t=0;t<this.triggeredScrollElements.length;t++){const e=this.triggeredScrollElements[t];Array.from(s).indexOf(e.$el)>-1&&(this.IOTriggerInstance.unobserve(e.$el),this.triggeredScrollElements.splice(t,1))}for(let t=0;t<this.RAFScrollElements.length;t++){const e=this.RAFScrollElements[t];Array.from(s).indexOf(e.$el)>-1&&(this.IORafInstance.unobserve(e.$el),this.RAFScrollElements.splice(t,1))}s.forEach(t=>{const s=this.scrollElementsToUpdate.find(s=>s.$el===t),e=this.scrollElements.find(s=>s.$el===t);s&&this._unsubscribeElementUpdate(s),e&&(this.scrollElements=this.scrollElements.filter(t=>t.id!=e.id))})}}addScrollElements(t){const s=t.querySelectorAll("[data-scroll]"),e=[];this.scrollElements.forEach(t=>{e.push(t.id)});const i=Math.max(...e,0)+1,r=Array.from(s);this._subscribeScrollElements(r,i,!0)}_subscribeScrollElements(t,s=0,e=!1){for(let i=0;i<t.length;i++){const r=t[i],n=this._checkRafNeeded(r),o=new l({$el:r,id:s+i,scrollOrientation:this.scrollOrientation,modularInstance:this.modularInstance,subscribeElementUpdateFn:this._subscribeElementUpdate.bind(this),unsubscribeElementUpdateFn:this._unsubscribeElementUpdate.bind(this),needRaf:n});this.scrollElements.push(o),n?(this.RAFScrollElements.push(o),e&&(this.IORafInstance.scrollElements.push(o),this.IORafInstance.observe(o.$el))):(this.triggeredScrollElements.push(o),e&&(this.IOTriggerInstance.scrollElements.push(o),this.IOTriggerInstance.observe(o.$el)))}}_unsubscribeAllScrollElements(){this.scrollElements=[],this.RAFScrollElements=[],this.triggeredScrollElements=[],this.scrollElementsToUpdate=[]}_subscribeElementUpdate(t){this.scrollElementsToUpdate.push(t)}_unsubscribeElementUpdate(t){this.scrollElementsToUpdate=this.scrollElementsToUpdate.filter(s=>s.id!=t.id)}_checkRafNeeded(t){let s=[...n];const e=t=>{s=s.filter(s=>s!=t)};if(t.dataset.scrollOffset){if("0,0"!=t.dataset.scrollOffset.split(",").map(t=>t.replace("%","").trim()).join(","))return!0;e("scrollOffset")}else e("scrollOffset");if(t.dataset.scrollPosition){if("top,bottom"!=t.dataset.scrollPosition.trim())return!0;e("scrollPosition")}else e("scrollPosition");if(t.dataset.scrollSpeed&&!isNaN(parseFloat(t.dataset.scrollSpeed)))return!0;e("scrollSpeed");for(const e of s)if(e in t.dataset)return!0;return!1}}class a{constructor({resizeElements:t,resizeCallback:s=(()=>{})}){this.$resizeElements=void 0,this.isFirstObserve=void 0,this.observer=void 0,this.resizeCallback=void 0,this.$resizeElements=t,this.resizeCallback=s,this.isFirstObserve=!0,this._init()}_init(){this.observer=new ResizeObserver(t=>{var s;!this.isFirstObserve&&(null==(s=this.resizeCallback)||s.call(this)),this.isFirstObserve=!1});for(const t of this.$resizeElements)this.observer.observe(t)}destroy(){this.observer.disconnect()}}class c{constructor({lenisOptions:t={},modularInstance:s,triggerRootMargin:e,rafRootMargin:i,autoResize:r=!0,autoStart:l=!0,scrollCallback:n=(()=>{}),initCustomTicker:o,destroyCustomTicker:a}={}){this.rafPlaying=void 0,this.lenisInstance=void 0,this.coreInstance=void 0,this.lenisOptions=void 0,this.modularInstance=void 0,this.triggerRootMargin=void 0,this.rafRootMargin=void 0,this.rafInstance=void 0,this.autoResize=void 0,this.autoStart=void 0,this.ROInstance=void 0,this.initCustomTicker=void 0,this.destroyCustomTicker=void 0,this._onRenderBind=void 0,this._onResizeBind=void 0,this._onScrollToBind=void 0;for(const[s]of Object.entries(t))["wrapper","content","infinite"].includes(s)&&console.warn(`Warning: Key "${s}" is not possible to edit in Locomotive Scroll.`);Object.assign(this,{lenisOptions:t,modularInstance:s,triggerRootMargin:e,rafRootMargin:i,autoResize:r,autoStart:l,scrollCallback:n,initCustomTicker:o,destroyCustomTicker:a}),this._onRenderBind=this._onRender.bind(this),this._onScrollToBind=this._onScrollTo.bind(this),this._onResizeBind=this._onResize.bind(this),this.rafPlaying=!1,this._init()}_init(){var e;this.lenisInstance=new t(s({},this.lenisOptions,{wrapper:window,content:document.documentElement,infinite:!1})),null==(e=this.lenisInstance)||e.on("scroll",this.scrollCallback),document.documentElement.setAttribute("data-scroll-orientation",this.lenisInstance.options.orientation),requestAnimationFrame(()=>{this.coreInstance=new o({$el:this.lenisInstance.rootElement,modularInstance:this.modularInstance,triggerRootMargin:this.triggerRootMargin,rafRootMargin:this.rafRootMargin,scrollOrientation:this.lenisInstance.options.orientation}),this._bindEvents(),this.initCustomTicker&&!this.destroyCustomTicker?console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble."):!this.initCustomTicker&&this.destroyCustomTicker&&console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."),this.autoStart&&this.start()})}destroy(){var t;this.stop(),this._unbindEvents(),this.lenisInstance.destroy(),null==(t=this.coreInstance)||t.destroy(),requestAnimationFrame(()=>{var t;null==(t=this.coreInstance)||t.destroy()})}_bindEvents(){this._bindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance=new a({resizeElements:[document.body],resizeCallback:this._onResizeBind}):window.addEventListener("resize",this._onResizeBind))}_unbindEvents(){this._unbindScrollToEvents(),this.autoResize&&("ResizeObserver"in window?this.ROInstance&&this.ROInstance.destroy():window.removeEventListener("resize",this._onResizeBind))}_bindScrollToEvents(t){const s=t||this.lenisInstance.rootElement,e=null==s?void 0:s.querySelectorAll("[data-scroll-to]");(null==e?void 0:e.length)&&e.forEach(t=>{t.addEventListener("click",this._onScrollToBind,!1)})}_unbindScrollToEvents(t){const s=t||this.lenisInstance.rootElement,e=null==s?void 0:s.querySelectorAll("[data-scroll-to]");(null==e?void 0:e.length)&&e.forEach(t=>{t.removeEventListener("click",this._onScrollToBind,!1)})}_onResize(){requestAnimationFrame(()=>{var t;null==(t=this.coreInstance)||t.onResize({currentScroll:this.lenisInstance.scroll})})}_onRender(){var t,s;null==(t=this.lenisInstance)||t.raf(Date.now()),null==(s=this.coreInstance)||s.onRender({currentScroll:this.lenisInstance.scroll,smooth:this.lenisInstance.options.smoothWheel})}_onScrollTo(t){var s;t.preventDefault();const e=null!=(s=t.currentTarget)?s:null;if(!e)return;const i=e.getAttribute("data-scroll-to-href")||e.getAttribute("href"),r=e.getAttribute("data-scroll-to-offset")||0,l=e.getAttribute("data-scroll-to-duration")||this.lenisInstance.options.duration;i&&this.scrollTo(i,{offset:"string"==typeof r?parseInt(r):r,duration:"string"==typeof l?parseInt(l):l})}start(){var t;this.rafPlaying||(null==(t=this.lenisInstance)||t.start(),this.rafPlaying=!0,this.initCustomTicker?this.initCustomTicker(this._onRenderBind):this._raf())}stop(){var t;this.rafPlaying&&(null==(t=this.lenisInstance)||t.stop(),this.rafPlaying=!1,this.destroyCustomTicker?this.destroyCustomTicker(this._onRenderBind):this.rafInstance&&cancelAnimationFrame(this.rafInstance))}removeScrollElements(t){var s;t?(this._unbindScrollToEvents(t),null==(s=this.coreInstance)||s.removeScrollElements(t)):console.error("Please provide a DOM Element as $oldContainer")}addScrollElements(t){var s;t?(null==(s=this.coreInstance)||s.addScrollElements(t),requestAnimationFrame(()=>{this._bindScrollToEvents(t)})):console.error("Please provide a DOM Element as $newContainer")}resize(){this._onResizeBind()}scrollTo(t,s){var e;null==(e=this.lenisInstance)||e.scrollTo(t,{offset:null==s?void 0:s.offset,lerp:null==s?void 0:s.lerp,duration:null==s?void 0:s.duration,immediate:null==s?void 0:s.immediate,lock:null==s?void 0:s.lock,force:null==s?void 0:s.force,easing:null==s?void 0:s.easing,onComplete:null==s?void 0:s.onComplete})}_raf(){this._onRenderBind(),this.rafInstance=requestAnimationFrame(()=>this._raf())}}export{c as default};
//# sourceMappingURL=locomotive-scroll.modern.mjs.map
