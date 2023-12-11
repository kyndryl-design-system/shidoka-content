"use strict";(self.webpackChunk_kyndryl_design_system_shidoka_content=self.webpackChunk_kyndryl_design_system_shidoka_content||[]).push([[165],{"./node_modules/@kyndryl-design-system/shidoka-foundation/common/defs/breakpoints.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>m});const m={SM:"sm",MD:"md",LG:"lg",XL:"xl",MAX:"max"}},"./src/stories/ComponentPalettes.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ComponentPalettes_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),_tslib=(__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/common/defs/breakpoints.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/components/button/button.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/components/icon/icon.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/components/link/link.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/_virtual/_tslib.js")),lit_html=(__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/reactive-element.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/lit-html.js")),lit_element=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-element/lit-element.js"),custom_element=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/custom-element.js"),property=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/property.js"),state=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/state.js"),query_assigned_elements=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/query-assigned-elements.js"),css_tag=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/css-tag.js"),e=css_tag.iv`*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --kd-current-breakpoint: sm;
}
@media (min-width: 42rem) {
  :root {
    --kd-current-breakpoint: md;
  }
}
@media (min-width: 74rem) {
  :root {
    --kd-current-breakpoint: lg;
  }
}
@media (min-width: 82rem) {
  :root {
    --kd-current-breakpoint: xl;
  }
}
@media (min-width: 99rem) {
  :root {
    --kd-current-breakpoint: max;
  }
}

/**
 * Copyright Kyndryl, Inc. 2023
 */
:host {
  display: block;
}

.kd-accordion .accordion-item-container {
  border-top: 1px solid var(--kd-color-border-light);
  border-bottom: 1px solid var(--kd-color-border-light);
}
.kd-accordion .accordion-item-container ::slotted(kd-accordion-item) {
  border-top: 1px solid var(--kd-color-border-light);
}
.kd-accordion .accordion-item-container ::slotted(kd-accordion-item:first-child) {
  border-top: none;
}
.kd-accordion .accordion-item-container.filled-headers {
  border: 1px solid var(--kd-color-border-light);
  border-radius: 4px;
}
.kd-accordion .accordion-item-container.filled-headers ::slotted(kd-accordion-item:first-child) {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.kd-accordion .accordion-item-container.filled-headers ::slotted(kd-accordion-item:last-child) {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.kd-accordion .toggle-container {
  text-align: right;
  padding: 8px 0;
  font-family: var(--kd-font-family-secondary);
  font-size: var(--kd-font-size-body-2-sm);
  line-height: var(--kd-line-height-body-2-sm);
  font-weight: var(--kd-font-weight-regular);
  letter-spacing: var(--kd-letter-spacing-4);
}
@media (min-width: 42rem) {
  .kd-accordion .toggle-container {
    font-size: var(--kd-font-size-body-2-md);
    line-height: var(--kd-line-height-body-2-md);
  }
}
@media (min-width: 74rem) {
  .kd-accordion .toggle-container {
    font-size: var(--kd-font-size-body-2-lg);
    line-height: var(--kd-line-height-body-2-lg);
  }
}
@media (min-width: 82rem) {
  .kd-accordion .toggle-container {
    font-size: var(--kd-font-size-body-2-xlg);
    line-height: var(--kd-line-height-body-2-xlg);
  }
}
@media (min-width: 99rem) {
  .kd-accordion .toggle-container {
    font-size: var(--kd-font-size-body-2-max);
    line-height: var(--kd-line-height-body-2-max);
  }
}
.kd-accordion .toggle-container a {
  color: var(--kd-color-text-primary);
  text-decoration: none;
  outline: 2px solid transparent;
  transition: outline-color 150ms ease-out;
}
.kd-accordion .toggle-container a:hover {
  text-decoration: underline;
}
.kd-accordion .toggle-container a:focus {
  outline-color: var(--kd-color-border-focus);
}`;let d=class extends lit_element.oi{constructor(){super(...arguments),this.showNumbers=!1,this.startNumber=1,this.filledHeaders=!1,this.compact=!1,this.expandLabel="Expand all items",this.collapseLabel="Collapse all items",this._allOpenState=!1}_handleSlotChange(){this._updateChildren()}willUpdate(e){(e.has("filledHeaders")||e.has("compact")||e.has("startNumber")||e.has("showNumbers"))&&this._updateChildren()}_updateChildren(){this._accordionItems.forEach(((e,t)=>{e.setFilledHeader(this.filledHeaders),e.setCompact(this.compact),e.setIndex(this.startNumber+t),e.setShowNumbers(this.showNumbers)}))}_openAllItems(){this._accordionItems.map((e=>{e.open()}))}_closeAllItems(){this._accordionItems.map((e=>{e.close()}))}_toggleExpandAll(){this._allOpenState?(this._closeAllItems(),this._allOpenState=!1):(this._openAllItems(),this._allOpenState=!0)}render(){let e="";return this.filledHeaders&&(e+=" filled-headers"),lit_html.dy`
      <div class="kd-accordion">
        <div class="toggle-container">
          <a href="javascript:void(0)" @click="${this._toggleExpandAll}">
            ${this._allOpenState?this.collapseLabel:this.expandLabel}
          </a>
        </div>

        <div class="accordion-item-container${e}">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </div>
    `}};d.styles=[e],(0,_tslib.g)([(0,property.C)({type:Boolean})],d.prototype,"showNumbers",void 0),(0,_tslib.g)([(0,property.C)({type:Number})],d.prototype,"startNumber",void 0),(0,_tslib.g)([(0,property.C)({type:Boolean})],d.prototype,"filledHeaders",void 0),(0,_tslib.g)([(0,property.C)({type:Boolean})],d.prototype,"compact",void 0),(0,_tslib.g)([(0,property.C)({type:String})],d.prototype,"expandLabel",void 0),(0,_tslib.g)([(0,property.C)({type:String})],d.prototype,"collapseLabel",void 0),(0,_tslib.g)([(0,state.S)()],d.prototype,"_allOpenState",void 0),(0,_tslib.g)([(0,query_assigned_elements.N)({selector:"kd-accordion-item"})],d.prototype,"_accordionItems",void 0),d=(0,_tslib.g)([(0,custom_element.M)("kd-accordion")],d);var class_map=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/directives/class-map.js"),accordionItem_scss_e=css_tag.iv`*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --kd-current-breakpoint: sm;
}
@media (min-width: 42rem) {
  :root {
    --kd-current-breakpoint: md;
  }
}
@media (min-width: 74rem) {
  :root {
    --kd-current-breakpoint: lg;
  }
}
@media (min-width: 82rem) {
  :root {
    --kd-current-breakpoint: xl;
  }
}
@media (min-width: 99rem) {
  :root {
    --kd-current-breakpoint: max;
  }
}

/**
 * Copyright Kyndryl, Inc. 2023
 */
:host {
  display: block;
}

.kd-accordion-item {
  padding: 0px 0px;
  display: block;
  background-color: var(--kd-color-background-ui-default);
  border-radius: inherit;
}
.kd-accordion-item .kd-accordion-item-title {
  border-radius: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  background: none;
  position: relative;
  font-family: var(--kd-font-family-primary);
  font-size: var(--kd-font-size-body-1-sm);
  line-height: var(--kd-line-height-body-1-sm);
  font-weight: var(--kd-font-weight-regular);
  letter-spacing: var(--kd-letter-spacing-4);
  font-weight: var(--kd-font-weight-medium);
  padding: 24px 16px;
  outline: 2px solid transparent;
  transition: background-color 150ms ease-out, outline-color 150ms ease-out;
  outline-offset: -1px;
}
@media (min-width: 42rem) {
  .kd-accordion-item .kd-accordion-item-title {
    font-size: var(--kd-font-size-body-1-md);
    line-height: var(--kd-line-height-body-1-md);
  }
}
@media (min-width: 74rem) {
  .kd-accordion-item .kd-accordion-item-title {
    font-size: var(--kd-font-size-body-1-lg);
    line-height: var(--kd-line-height-body-1-lg);
  }
}
@media (min-width: 82rem) {
  .kd-accordion-item .kd-accordion-item-title {
    font-size: var(--kd-font-size-body-1-xlg);
    line-height: var(--kd-line-height-body-1-xlg);
  }
}
@media (min-width: 99rem) {
  .kd-accordion-item .kd-accordion-item-title {
    font-size: var(--kd-font-size-body-1-max);
    line-height: var(--kd-line-height-body-1-max);
  }
}
.kd-accordion-item .kd-accordion-item-title:hover {
  background-color: var(--kd-color-background-accent-subtle);
}
.kd-accordion-item .kd-accordion-item-title:focus {
  outline-color: var(--kd-color-border-focus);
}
.kd-accordion-item .kd-accordion-item-title .number,
.kd-accordion-item .kd-accordion-item-title .icon {
  font-weight: var(--kd-font-weight-regular);
  padding-right: 2em;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.kd-accordion-item .kd-accordion-item-title .number {
  color: var(--kd-color-text-placeholder);
}
.kd-accordion-item .kd-accordion-item-title .title {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
.kd-accordion-item.filled-header .kd-accordion-item-title {
  background-color: var(--kd-color-background-accent-subtle);
}
.kd-accordion-item.filled-header .kd-accordion-item-title:hover {
  outline-width: 1px;
  outline-color: var(--kd-color-border-primary);
}
.kd-accordion-item.filled-header .kd-accordion-item-body {
  border-top: 1px solid var(--kd-color-border-light);
}
.kd-accordion-item.compact .kd-accordion-item-title {
  padding: 16px;
}
.kd-accordion-item .kd-accordion-item-body {
  padding: 24px 64px 24px 16px;
  display: none;
}
.kd-accordion-item.opened.filled-header .kd-accordion-item-title {
  border-radius: 0;
}
.kd-accordion-item.opened .kd-accordion-item-body {
  display: block;
}
.kd-accordion-item .icon {
  vertical-align: middle;
}
.kd-accordion-item .expand-icon {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.kd-accordion-item .kd-accordion-item-subtitle {
  font-family: var(--kd-font-family-secondary);
  font-size: var(--kd-font-size-utility-2-sm);
  line-height: var(--kd-line-height-utility-2-sm);
  font-weight: var(--kd-font-weight-regular);
  letter-spacing: var(--kd-letter-spacing-5);
  font-weight: var(--kd-font-weight-regular);
  color: var(--kd-color-text-secondary);
}
@media (min-width: 42rem) {
  .kd-accordion-item .kd-accordion-item-subtitle {
    font-size: var(--kd-font-size-utility-2-md);
    line-height: var(--kd-line-height-utility-2-md);
  }
}
@media (min-width: 74rem) {
  .kd-accordion-item .kd-accordion-item-subtitle {
    font-size: var(--kd-font-size-utility-2-lg);
    line-height: var(--kd-line-height-utility-2-lg);
  }
}
@media (min-width: 82rem) {
  .kd-accordion-item .kd-accordion-item-subtitle {
    font-size: var(--kd-font-size-utility-2-xlg);
    line-height: var(--kd-line-height-utility-2-xlg);
  }
}
@media (min-width: 99rem) {
  .kd-accordion-item .kd-accordion-item-subtitle {
    font-size: var(--kd-font-size-utility-2-max);
    line-height: var(--kd-line-height-utility-2-max);
  }
}

::slotted(kd-icon) {
  display: block;
}`,t={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"}}],name:"add",size:32},_32_t={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M8 15H24V17H8z"}}],name:"subtract",size:32};let c=class extends lit_element.oi{constructor(){super(...arguments),this.opened=!1,this._index=1,this._showNumber=!1,this._filledHeader=!1,this._compact=!1,this._id=crypto.randomUUID()}setIndex(e){this._index=e}setShowNumbers(e){this._showNumber=e}setFilledHeader(e){this._filledHeader=e}setCompact(e){this._compact=e}open(){this.opened||this._toggleOpenState()}close(){this.opened&&this._toggleOpenState()}_handleClick(e){e.preventDefault(),this._toggleOpenState()}_handleKeypress(e){e.preventDefault()," "!=e.key&&"Enter"!=e.key||this._toggleOpenState()}_toggleOpenState(){this.opened?this.opened=!1:this.opened=!0}get numberTemplate(){return this._showNumber?lit_html.dy`<div class="number">${this._index}</div>`:""}get iconTemplate(){return this.querySelector('[slot="icon"]')?lit_html.dy`<div class="icon"><slot name="icon"></slot></div>`:""}get subtitleTemplate(){return this.querySelector('[slot="subtitle"]')?lit_html.dy`
        <div class="kd-accordion-item-subtitle">
          <slot name="subtitle"></slot>
        </div>
      `:""}get expandIconTemplate(){return this.opened?lit_html.dy`
        <div class="expand-icon">
          <kd-icon .icon="${_32_t}"></kd-icon>
        </div>
      `:lit_html.dy`
        <div class="expand-icon"><kd-icon .icon="${t}"></kd-icon></div>
      `}render(){const e=(0,class_map.$)({"kd-accordion-item":!0,opened:this.opened,"filled-header":this._filledHeader,compact:this._compact});return lit_html.dy`
      <div class="${e}">
        <div
          class="kd-accordion-item-title"
          aria-controls="kd-accordion-item-body-${this._index}-${this._id}"
          aria-expanded=${this.opened}
          tabindex="${this._index}"
          role="button"
          @click="${e=>this._handleClick(e)}"
          @keypress="${e=>this._handleKeypress(e)}"
          id="kd-accordion-item-title-${this._index}-${this._id}"
        >
          ${this.iconTemplate} ${this.numberTemplate}

          <div class="title">
            <slot name="title"></slot>

            ${this.subtitleTemplate}
          </div>

          ${this.expandIconTemplate}
        </div>

        <div
          class="kd-accordion-item-body"
          id="kd-accordion-item-body-${this._index}-${this._id}"
          aria-labelledby="kd-accordion-item-title-${this._index}-${this._id}"
        >
          <div class="kd-accordion-item-detail">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    `}};c.styles=[accordionItem_scss_e],(0,_tslib.g)([(0,property.C)({type:Boolean})],c.prototype,"opened",void 0),(0,_tslib.g)([(0,state.S)()],c.prototype,"_index",void 0),(0,_tslib.g)([(0,state.S)()],c.prototype,"_showNumber",void 0),(0,_tslib.g)([(0,state.S)()],c.prototype,"_filledHeader",void 0),(0,_tslib.g)([(0,state.S)()],c.prototype,"_compact",void 0),(0,_tslib.g)([(0,state.S)()],c.prototype,"_id",void 0),c=(0,_tslib.g)([(0,custom_element.M)("kd-accordion-item")],c);var _templateObject,_templateObject2,_Example$parameters,_Example$parameters2,_20={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},content:[{elem:"path",attrs:{d:"M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"}}],name:"chevron--right",size:20};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}const ComponentPalettes_stories={parameters:{storySource:{source:'import { html } from \'lit\';\nimport { Button } from \'@kyndryl-design-system/shidoka-foundation\';\nimport { Link } from \'@kyndryl-design-system/shidoka-foundation\';\nimport chevronRightIcon from \'@carbon/icons/es/chevron--right/20\';\nexport default {\n  title: \'Shidoka Content/Component Palettes\',\n  decorators: [story => html`\n        <style>\n          .component-paletted-container {\n            background: var(--kd-color-background-ui-default);\n            color: var(--kd-color-text-primary);\n            padding: 3em;\n          }\n\n          .component-paletted-container .color-box {\n            width: 100%;\n            max-width: 100px;\n            height: 100px;\n            margin-right: 2em;\n            display: inline-block;\n          }\n          .primary-color {\n            background: var(--kd-color-background-accent-primary);\n          }\n\n          .secondary-color {\n            background: var(--kd-color-background-accent-secondary);\n          }\n\n          .tertiary-color {\n            background: var(--kd-color-background-accent-tertiary);\n          }\n        </style>\n        ${story()}\n      `]\n};\nexport const Example = {\n  render: () => {\n    return html`\n      <div class="kd-component-palette--darkstone-80">\n        <div class="component-paletted-container">\n          <h3>Component</h3>\n          <h4>Button</h4>\n          <kd-button\n            kind="primary-web"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Primary Button\n            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>\n          </kd-button>\n          <kd-button\n            kind="secondary"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Secondary Button\n            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>\n          </kd-button>\n          <kd-button\n            kind="tertiary"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Tertiary Button\n            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>\n          </kd-button>\n          <h4>Link</h4>\n          <kd-link\n            standalone=""\n            target="_self"\n            kind="secondary"\n            href="https://www.kyndryl.com"\n          >\n            Standalone Link\n            <kd-icon slot="icon" .icon=${chevronRightIcon}>></kd-icon>\n          </kd-link>\n          <h4>Accent Colors</h4>\n          <div class="color-box primary-color"></div>\n          <div class="color-box secondary-color"></div>\n          <div class="color-box tertiary-color"></div>\n        </div>\n      </div>\n    `;\n  }\n};\nExample.parameters = {\n  ...Example.parameters,\n  docs: {\n    ...Example.parameters?.docs,\n    source: {\n      originalSource: "{\\n  render: () => {\\n    return html`\\n      <div class=\\"kd-component-palette--darkstone-80\\">\\n        <div class=\\"component-paletted-container\\">\\n          <h3>Component</h3>\\n          <h4>Button</h4>\\n          <kd-button\\n            kind=\\"primary-web\\"\\n            type=\\"button\\"\\n            size=\\"medium\\"\\n            iconposition=\\"right\\"\\n            description=\\"\\"\\n            href=\\"\\"\\n          >\\n            Primary Button\\n            <kd-icon slot=\\"icon\\" .icon=${chevronRightIcon}></kd-icon>\\n          </kd-button>\\n          <kd-button\\n            kind=\\"secondary\\"\\n            type=\\"button\\"\\n            size=\\"medium\\"\\n            iconposition=\\"right\\"\\n            description=\\"\\"\\n            href=\\"\\"\\n          >\\n            Secondary Button\\n            <kd-icon slot=\\"icon\\" .icon=${chevronRightIcon}></kd-icon>\\n          </kd-button>\\n          <kd-button\\n            kind=\\"tertiary\\"\\n            type=\\"button\\"\\n            size=\\"medium\\"\\n            iconposition=\\"right\\"\\n            description=\\"\\"\\n            href=\\"\\"\\n          >\\n            Tertiary Button\\n            <kd-icon slot=\\"icon\\" .icon=${chevronRightIcon}></kd-icon>\\n          </kd-button>\\n          <h4>Link</h4>\\n          <kd-link\\n            standalone=\\"\\"\\n            target=\\"_self\\"\\n            kind=\\"secondary\\"\\n            href=\\"https://www.kyndryl.com\\"\\n          >\\n            Standalone Link\\n            <kd-icon slot=\\"icon\\" .icon=${chevronRightIcon}>></kd-icon>\\n          </kd-link>\\n          <h4>Accent Colors</h4>\\n          <div class=\\"color-box primary-color\\"></div>\\n          <div class=\\"color-box secondary-color\\"></div>\\n          <div class=\\"color-box tertiary-color\\"></div>\\n        </div>\\n      </div>\\n    `;\\n  }\\n}",\n      ...Example.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{example:{startLoc:{col:23,line:37},endLoc:{col:1,line:95},startBody:{col:23,line:37},endBody:{col:1,line:95}}}}},title:"Shidoka Content/Component Palettes",decorators:[story=>(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n        <style>\n          .component-paletted-container {\n            background: var(--kd-color-background-ui-default);\n            color: var(--kd-color-text-primary);\n            padding: 3em;\n          }\n\n          .component-paletted-container .color-box {\n            width: 100%;\n            max-width: 100px;\n            height: 100px;\n            margin-right: 2em;\n            display: inline-block;\n          }\n          .primary-color {\n            background: var(--kd-color-background-accent-primary);\n          }\n\n          .secondary-color {\n            background: var(--kd-color-background-accent-secondary);\n          }\n\n          .tertiary-color {\n            background: var(--kd-color-background-accent-tertiary);\n          }\n        </style>\n        ","\n      "])),story())]};var Example={render:()=>(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['\n      <div class="kd-component-palette--darkstone-80">\n        <div class="component-paletted-container">\n          <h3>Component</h3>\n          <h4>Button</h4>\n          <kd-button\n            kind="primary-web"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Primary Button\n            <kd-icon slot="icon" .icon=','></kd-icon>\n          </kd-button>\n          <kd-button\n            kind="secondary"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Secondary Button\n            <kd-icon slot="icon" .icon=','></kd-icon>\n          </kd-button>\n          <kd-button\n            kind="tertiary"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Tertiary Button\n            <kd-icon slot="icon" .icon=','></kd-icon>\n          </kd-button>\n          <h4>Link</h4>\n          <kd-link\n            standalone=""\n            target="_self"\n            kind="secondary"\n            href="https://www.kyndryl.com"\n          >\n            Standalone Link\n            <kd-icon slot="icon" .icon=','>></kd-icon>\n          </kd-link>\n          <h4>Accent Colors</h4>\n          <div class="color-box primary-color"></div>\n          <div class="color-box secondary-color"></div>\n          <div class="color-box tertiary-color"></div>\n        </div>\n      </div>\n    '])),_20,_20,_20,_20)};Example.parameters=_objectSpread(_objectSpread({},Example.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => {\n    return html`\n      <div class="kd-component-palette--darkstone-80">\n        <div class="component-paletted-container">\n          <h3>Component</h3>\n          <h4>Button</h4>\n          <kd-button\n            kind="primary-web"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Primary Button\n            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>\n          </kd-button>\n          <kd-button\n            kind="secondary"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Secondary Button\n            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>\n          </kd-button>\n          <kd-button\n            kind="tertiary"\n            type="button"\n            size="medium"\n            iconposition="right"\n            description=""\n            href=""\n          >\n            Tertiary Button\n            <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>\n          </kd-button>\n          <h4>Link</h4>\n          <kd-link\n            standalone=""\n            target="_self"\n            kind="secondary"\n            href="https://www.kyndryl.com"\n          >\n            Standalone Link\n            <kd-icon slot="icon" .icon=${chevronRightIcon}>></kd-icon>\n          </kd-link>\n          <h4>Accent Colors</h4>\n          <div class="color-box primary-color"></div>\n          <div class="color-box secondary-color"></div>\n          <div class="color-box tertiary-color"></div>\n        </div>\n      </div>\n    `;\n  }\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source)})});const __namedExportsOrder=["Example"]}}]);
//# sourceMappingURL=stories-ComponentPalettes-stories.5ae7e01b.iframe.bundle.js.map