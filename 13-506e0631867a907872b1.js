(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,s=r(a(7)),l=r(a(37)),d=r(a(75)),n=r(a(74)),o=r(a(0)),u=r(a(4)),f=function(e){var t=(0,n.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},c=Object.create({}),p=function(e){var t=f(e),a=t.fluid?t.fluid.src:t.fixed.src;return c[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+l+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=o.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,l=e.onLoad,u=e.onError,f=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return o.default.createElement("img",(0,n.default)({sizes:a,srcSet:r,src:i},f,{onLoad:l,onError:u,ref:t,style:(0,n.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});v.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,d=p(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var n=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:s,hasNoScript:n,seenBefore:d},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=t.fluid?t.fluid.src:t.fixed.src,c[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,l=e.imgStyle,d=void 0===l?{}:l,u=e.placeholderStyle,c=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,w=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,x=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,n.default)({opacity:E?1:0,transition:x?"opacity "+y+"ms":"none"},d),O="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},R=(0,n.default)({opacity:this.state.imgLoaded?0:1},x&&P,d,c),C={title:t,alt:this.state.isVisible?"":a,style:R,className:p};if(h){var I=h;return o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,n.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},o.default.createElement(S,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),O&&o.default.createElement(S,{title:t,style:(0,n.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&P)}),I.base64&&o.default.createElement(v,(0,n.default)({src:I.base64},C)),I.tracedSVG&&o.default.createElement(v,(0,n.default)({src:I.tracedSVG},C)),this.state.isVisible&&o.default.createElement("picture",null,I.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),o.default.createElement(v,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,n.default)({alt:a,title:t},I))}}))}if(g){var N=g,_=(0,n.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},s);return"inherit"===s.display&&delete _.display,o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},O&&o.default.createElement(S,{title:t,style:(0,n.default)({backgroundColor:O,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},x&&P)}),N.base64&&o.default.createElement(v,(0,n.default)({src:N.base64},C)),N.tracedSVG&&o.default.createElement(v,(0,n.default)({src:N.tracedSVG},C)),this.state.isVisible&&o.default.createElement("picture",null,N.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),o.default.createElement(v,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,n.default)({alt:a,title:t},N))}}))}return null},t}(o.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var y=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});b.propTypes={resolutions:y,sizes:S,fixed:y,fluid:S,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var w=b;t.default=w},177:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i=r(a(74)),s=r(a(0)),l=r(a(152));t.default=function(e){return s.default.forwardRef(function(t,a){return s.default.createElement("div",(0,i.default)({},t,{ref:a,className:(0,l.default)(t.className,e)}))})},e.exports=t.default},197:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i=r(a(0)).default.createContext(null);t.default=i,e.exports=t.default},267:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i=r(a(74)),s=r(a(75)),l=r(a(152)),d=r(a(0)),n=r(a(268)),o=a(155),u=r(a(269)),f=r(a(174)),c=r(a(270)),p=r(a(197)),h=d.default.forwardRef(function(e,t){var a=(0,n.default)(e,{activeKey:"onSelect"}),r=a.as,u=a.activeKey,c=a.bsPrefix,h=a.children,g=a.className,m=a.onSelect,v=(0,s.default)(a,["as","activeKey","bsPrefix","children","className","onSelect"]);return c=(0,o.useBootstrapPrefix)(c,"accordion"),d.default.createElement(p.default.Provider,{value:u},d.default.createElement(f.default.Provider,{value:m},d.default.createElement(r,(0,i.default)({ref:t},v,{className:(0,l.default)(g,c)}),h)))});h.defaultProps={as:"div"},h.Toggle=u.default,h.Collapse=c.default;var g=h;t.default=g,e.exports=t.default},268:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){return Object.keys(t).reduce(function(a,d){var n,o=a[i.defaultKey(d)],u=a[d],f=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(a,[i.defaultKey(d),d].map(l)),c=t[d],p=(0,r.useRef)({}),h=(0,r.useState)(o),g=h[0],m=h[1],v=i.isProp(e,d),b=i.isProp(p.current,d);p.current=e,!v&&b&&m(o);var y=e[c],S=(0,r.useCallback)(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];y&&y.apply(void 0,[e].concat(a)),m(e)},[m,y]);return s({},f,((n={})[d]=v?u:g,n[c]=S,n))},e)};var r=a(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(179));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}e.exports=t.default},269:function(e,t,a){"use strict";var r=a(161),i=a(8);t.__esModule=!0,t.default=void 0;var s=i(a(74)),l=i(a(75)),d=r(a(0)),n=i(a(174)),o=d.default.forwardRef(function(e,t){var a=e.as,r=e.children,i=e.eventKey,o=e.onClick,u=(0,l.default)(e,["as","children","eventKey","onClick"]),f=(0,d.useContext)(n.default);return d.default.createElement(a,(0,s.default)({ref:t,onClick:function(e){f(i,e),o&&o(e)}},u),r)});o.defaultProps={as:"button"};var u=o;t.default=u,e.exports=t.default},270:function(e,t,a){"use strict";var r=a(161),i=a(8);t.__esModule=!0,t.default=void 0;var s=i(a(74)),l=i(a(75)),d=r(a(0)),n=i(a(181)),o=i(a(197)),u=d.default.forwardRef(function(e,t){var a=e.children,r=e.eventKey,i=(0,l.default)(e,["children","eventKey"]),u=(0,d.useContext)(o.default);return d.default.createElement(n.default,(0,s.default)({ref:t,in:u===r},i),d.default.createElement("div",null,d.default.Children.only(a)))});t.default=u,e.exports=t.default},271:function(e,t,a){"use strict";var r=a(161),i=a(8);t.__esModule=!0,t.default=void 0;var s=i(a(74)),l=i(a(75)),d=i(a(152)),n=r(a(0)),o=a(155),u=i(a(162)),f=i(a(177)),c=i(a(272)),p=i(a(273)),h=(0,f.default)("h5"),g=(0,f.default)("h6"),m=(0,u.default)("card-body"),v=n.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,i=e.bg,u=e.text,f=e.border,p=e.body,h=e.children,g=e.as,v=(0,l.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),b=(0,o.useBootstrapPrefix)(a,"card"),y=(0,n.useMemo)(function(){return{cardHeaderBsPrefix:b+"-header"}},[b]);return n.default.createElement(c.default.Provider,{value:y},n.default.createElement(g,(0,s.default)({ref:t},v,{className:(0,d.default)(r,b,i&&"bg-"+i,u&&"text-"+u,f&&"border-"+f)}),p?n.default.createElement(m,null,h):h))});v.displayName="Card",v.defaultProps={as:"div",body:!1},v.Img=p.default,v.Title=(0,u.default)("card-title",{Component:h}),v.Subtitle=(0,u.default)("card-subtitle",{Component:g}),v.Body=m,v.Link=(0,u.default)("card-link",{Component:"a"}),v.Text=(0,u.default)("card-text",{Component:"p"}),v.Header=(0,u.default)("card-header"),v.Footer=(0,u.default)("card-footer"),v.ImgOverlay=(0,u.default)("card-img-overlay");var b=v;t.default=b,e.exports=t.default},272:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i=r(a(0)).default.createContext(null);t.default=i,e.exports=t.default},273:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i=r(a(74)),s=r(a(75)),l=r(a(152)),d=r(a(0)),n=a(155),o=d.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,o=e.variant,u=e.as,f=(0,s.default)(e,["bsPrefix","className","variant","as"]),c=(0,n.useBootstrapPrefix)(a,"card-img");return d.default.createElement(u,(0,i.default)({ref:t,className:(0,l.default)(o?c+"-"+o:c,r)},f))});o.displayName="CardImg",o.defaultProps={as:"img",variant:null};var u=o;t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=13-506e0631867a907872b1.js.map