(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[14],{408:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return c}));var n="/assets/issuingBoxes",i="/assets/issuingBoxes/total",l="assets/id:/issuingBoxes",s="/transactions/unconfirmed",r="/transactions/unconfirmed/:id",o="oracle/frontendData",c="addresses/balances"},412:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(106),i=a(42),l=a.n(i),s=function(e,t,a,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return e(Object(n.startStructFetch)(t)),l.a[a](i,s).then((function(e){return e.body||e.data})).then((function(a){if(!a)return e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a);var i=a.errors||a.error;return i?(e(Object(n.stopStructFetch)(t,new Error(i))),Promise.reject(new Error(i))):(e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a))})).catch((function(a){return e(Object(n.stopStructFetch)(t,a)),Promise.reject(a)}))}},423:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(8),i=a(9),l=a(12),s=a(11),r=a(0),o=a.n(r),c=a(29),m=a(36),p=(a(424),a(14)),b=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?o.a.createElement("div",{className:"bi-paginate-simple"},0===this.props.forcePage?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},o.a.createElement(p.n,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0)},o.a.createElement(p.n,{className:"bi-paginate-simple__btn-icon"})),0===this.props.forcePage?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},o.a.createElement(p.d,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1)},o.a.createElement(p.d,{className:"bi-paginate-simple__btn-icon"})),o.a.createElement("span",{className:"bi-paginate-simple__status"},o.a.createElement(c.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})),o.a.createElement("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile"},o.a.createElement(c.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})),this.props.forcePage===e-1?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},o.a.createElement(p.d,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1)},o.a.createElement(p.d,{className:"bi-paginate-simple__btn-icon"})),this.props.forcePage===e-1?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},o.a.createElement(p.n,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1)},o.a.createElement(p.n,{className:"bi-paginate-simple__btn-icon"}))):null}}]),a}(o.a.Component)},424:function(e,t,a){},436:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(8),i=a(9),l=a(12),s=a(11),r=a(39),o=a.n(r),c=a(0),m=a.n(c),p=a(36),b=(a(437),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"bi-limit-selector"},m.a.createElement("span",{className:"bi-limit-selector__label"},this.props.label),this.props.items.map((function(t,a){var n=o()({"bi-btn":!0,"bi-btn--flat":!0,"bi-limit-selector__item":!0,"bi-limit-selector__item--selected":t===e.props.selected});return m.a.createElement(p.Link,{className:n,key:a,to:e.props.getLimitLink(t)},t)})))}}]),a}(m.a.PureComponent))},437:function(e,t,a){},841:function(e,t,a){},842:function(e,t,a){},869:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(8),l=a(9),s=a(17),r=a(12),o=a(11),c=a(61),m=a.n(c),p=a(0),b=a.n(p),u=a(107),f=a.n(u),d=a(29),h=a(30),_=a(20),g=a(436),k=a(423),v=a(16),E=a(412),y=a(408),O=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getAllIssuedTokens",value:function(e,t){var a=t.limit,n=t.offset;return Object(E.a)(e,y.b,"get","https://api.ergoplatform.com/api/v1/tokens",{params:{limit:a,offset:n}})}},{key:"getTotalIssuedTokens",value:function(e,t){var a=t.limit;return Object(E.a)(e,y.e,"get","https://api.ergoplatform.com/api/v1/tokens",{params:{limit:a}})}},{key:"getIssuedTokensById",value:function(t,a){return Object(E.a)(t,y.c,"get","".concat(e.apiUrl,"/tokens/").concat(a,"/issuingBox"))}},{key:"apiUrl",get:function(){return"".concat(v.a.apiUrl)}}]),e}(),N=a(168),j={getTokens:function(e){return function(t){return O.getAllIssuedTokens(t,e).then((function(a){t({payload:{offset:e.offset||0},type:N.a})}))}}},x=a(106),w=function(e){return Object(x.getStruct)(y.b)(e)},T=a(57),P=a.n(T),L=a(109),S=a(4),W=a.n(S),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},F=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var R=function(e){function t(){var e;U(this,t);for(var a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];var l=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.state={},l.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},l.elements={},l.onResize=l.onResize.bind(l),l.onTruncate=l.onTruncate.bind(l),l.calcTargetWidth=l.calcTargetWidth.bind(l),l.measureWidth=l.measureWidth.bind(l),l.getLines=l.getLines.bind(l),l.renderLine=l.renderLine.bind(l),l}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),F(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,a=this.onResize,n=document.createElement("canvas");this.canvasContext=n.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",a)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,a=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(a)}},{key:"innerText",value:function(e){var t=document.createElement("div"),a="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var n=t[a],i=document.createElement("div");return i.innerHTML="foo<br/>bar","foo\nbar"!==i[a].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),n=t[a]),n}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,a=this.calcTargetWidth,n=this.canvasContext,i=this.props.width;if(t){var l=i||Math.floor(t.parentNode.getBoundingClientRect().width);if(!l)return window.requestAnimationFrame((function(){return a(e)}));var s=window.getComputedStyle(t),r=[s["font-weight"],s["font-style"],s["font-size"],s["font-family"]].join(" ");n.font=r,this.setState({targetWidth:l},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,a=t.lines,n=t.ellipsis,i=t.trimWhitespace,l=this.state.targetWidth,s=this.innerText,r=this.measureWidth,o=this.onTruncate,c=this.trimRight,m=[],p=s(e.text).split("\n").map((function(e){return e.split(" ")})),u=!0,f=this.ellipsisWidth(this.elements.ellipsis),d=1;d<=a;d++){var h=p[0];if(0!==h.length){var _=h.join(" ");if(r(_)<=l&&1===p.length){u=!1,m.push(_);break}if(d===a){for(var g=h.join(" "),k=0,v=g.length-1;k<=v;){var E=Math.floor((k+v)/2);r(g.slice(0,E+1))+f<=l?k=E+1:v=E-1}var y=g.slice(0,k);if(i)for(y=c(y);!y.length&&m.length;){y=c(m.pop())}_=b.a.createElement("span",null,y,n)}else{for(var O=0,N=h.length-1;O<=N;){var j=Math.floor((O+N)/2);r(h.slice(0,j+1).join(" "))<=l?O=j+1:N=j-1}if(0===O){d=a-1;continue}_=h.slice(0,O).join(" "),p[0].splice(0,O)}m.push(_)}else m.push(),p.shift(),d--}return o(u),m}},{key:"renderLine",value:function(e,t,a){if(t===a.length-1)return b.a.createElement("span",{key:t},e);var n=b.a.createElement("br",{key:t+"br"});return e?[b.a.createElement("span",{key:t},e),n]:n}},{key:"render",value:function(){var e=this,t=this.elements.target,a=this.props,n=a.children,i=a.ellipsis,l=a.lines,s=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(a,["children","ellipsis","lines"]),r=this.state.targetWidth,o=this.getLines,c=this.renderLine,m=this.onTruncate,p=void 0;return"undefined"!==typeof window&&!(!t||!r)&&(l>0?p=o().map(c):(p=n,m(!1))),delete s.onTruncate,delete s.trimWhitespace,b.a.createElement("span",C({},s,{ref:function(t){e.elements.target=t}}),b.a.createElement("span",null,p),b.a.createElement("span",{ref:function(t){e.elements.text=t}},n),b.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}(p.Component);R.propTypes={children:W.a.node,ellipsis:W.a.node,lines:W.a.oneOfType([W.a.oneOf([!1]),W.a.number]),trimWhitespace:W.a.bool,width:W.a.number,onTruncate:W.a.func},R.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};var A=R,z=function(e){var t=e.children,a=e.lines,n=Object(p.useState)(!1),i=Object(L.a)(n,2),l=i[0],s=i[1],r=Object(p.useState)(!1),o=Object(L.a)(r,2),c=o[0],m=o[1],u=b.a.createElement(b.a.Fragment,null,!l&&"...",b.a.createElement("br",null),b.a.createElement("a",{href:"#!",onClick:function(e){e.preventDefault(),s(!l),console.log("here")}},b.a.createElement(d.a,{id:l?"common.token.showLess":"common.token.showMore"})));return b.a.createElement(b.a.Fragment,null,b.a.createElement(A,{lines:!l&&a,ellipsis:u,onTruncate:m},t),!c&&l&&u)},I=(a(841),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"bi-blocks-table"},this.props.tokens?this.renderTable():null)}},{key:"renderTable",value:function(){return b.a.createElement("table",{className:"bi-blocks-table__body bi-table"},b.a.createElement("thead",{className:"bi-blocks-table-header"},b.a.createElement("tr",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row"},b.a.createElement("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:1},b.a.createElement(d.a,{id:"common.token.id"})),b.a.createElement("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:2},b.a.createElement(d.a,{id:"common.token.name"})),b.a.createElement("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:1},b.a.createElement(d.a,{id:"common.token.amount"})),b.a.createElement("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:1},b.a.createElement(d.a,{id:"common.token.decimals"})),b.a.createElement("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:3},b.a.createElement(d.a,{id:"common.token.description"})))),b.a.createElement("tbody",null,this.props.tokens.map((function(e){return b.a.createElement("tr",{className:"bi-blocks-table__row bi-table__row",key:e.id},b.a.createElement("td",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell",colSpan:1},b.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},b.a.createElement(d.a,{id:"common.token.id"})),b.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:e.id,readOnly:!0})),b.a.createElement("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:2},b.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},b.a.createElement(d.a,{id:"common.token.name"})),e.name),b.a.createElement("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:1},b.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},b.a.createElement(d.a,{id:"common.token.amount"})),b.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:P()({integerSeparator:" "})(e.emissionAmount),readOnly:!0})),b.a.createElement("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:1},b.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},b.a.createElement(d.a,{id:"common.token.decimals"})),e.decimals),b.a.createElement("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:3},b.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},b.a.createElement(d.a,{id:"common.token.description"})),b.a.createElement("div",null,b.a.createElement(z,{lines:2},e.description))))}))))}}]),a}(b.a.Component)),B=(a(842),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).params=void 0,n.getPageUrl=n.getPageUrl.bind(Object(s.a)(n)),n.getLimitLink=n.getLimitLink.bind(Object(s.a)(n)),n.params=n.getParams(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.reloadTokens(this.params)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.reloadTokens(this.params))}},{key:"render",value:function(){return b.a.createElement("div",{className:"bi-data g-flex-column g-flex-column__item-fixed"},b.a.createElement(d.a,{id:"common.pages.issued-tokens.title"},(function(e){return b.a.createElement(f.a,null,b.a.createElement("title",null,e))})),b.a.createElement("div",{className:"bi-data__header g-flex-column__item-fixed g-flex"},b.a.createElement("div",{className:"bi-data__title g-flex__item"},b.a.createElement(d.a,{id:"components.issued-tokens.title"}))),this.props.tokens.isFetching&&b.a.createElement("p",{className:"base-text"},"Fetching Data..."),this.props.tokens.data&&0===this.props.tokens.data.total&&b.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},b.a.createElement(d.a,{id:"components.data.wrong-query"})),!this.props.tokens.isFetching&&null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&b.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},b.a.createElement(I,{tokens:this.props.tokens.data.items,isFetching:this.props.tokens.isFetching})),null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&b.a.createElement("div",{className:"bi-data__footer g-flex-column__item-fixed g-flex"},b.a.createElement("div",{className:"g-flex__item-fixed"},b.a.createElement(g.a,{items:[30,60,120],selected:this.params.limit,label:b.a.createElement(d.a,{id:"components.data.show"}),getLimitLink:this.getLimitLink})),b.a.createElement("div",{className:"g-flex__item-fixed"},b.a.createElement(k.a,{total:this.props.tokens.data.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.props.offset/this.params.limit)}))))}},{key:"getPageUrl",value:function(e){var t=m.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"/issued-tokens?".concat(m.a.stringify(t))}},{key:"getLimitLink",value:function(e){var t=m.a.parse(this.props.history.location.search);return t.limit=e,"/issued-tokens?".concat(m.a.stringify(t))}},{key:"reloadTokens",value:function(e){e=Object(n.a)(Object(n.a)(Object(n.a)({},this.params),e),{},{limit:e.limit||30,offset:e.offset||0}),Object.keys(e).forEach((function(t){null===e[t]&&delete e[t]})),this.props.getTokens(e),0===e.offset&&delete e.offset,30===e.limit&&delete e.limit,this.props.history.push("/issued-tokens?".concat(m.a.stringify(e)))}},{key:"getParams",value:function(){var e=m.a.parse(this.props.history.location.search),t=e.offset,a=e.limit;return t=parseInt(t,10),{limit:a=parseInt(a,10)||30,offset:t||0}}}]),a}(b.a.PureComponent)),D=Object(h.b)((function(e){return{tokens:w(e),offset:e.tokens.offset}}),(function(e){return Object(_.bindActionCreators)(Object(n.a)({},j),e)}))(B);t.default=D}}]);
//# sourceMappingURL=14.2b96092d.chunk.js.map