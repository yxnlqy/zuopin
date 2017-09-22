(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-forward" viewBox="0 0 1024 1024">'+""+'<path d="M266.717086 107.10946l39.543621-48.330752 443.761849 399.825175L310.652737 862.822111l-43.936675-43.937698 395.431098-360.281553L266.717086 107.10946z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-forward1" viewBox="0 0 1024 1024">'+""+'<path d="M768 520.533333 346.692267 938.666667 307.2 899.464533 688.9984 520.533333 307.2 141.602133 346.692267 102.4 768 520.533333z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-forward2" viewBox="0 0 1024 1024">'+""+'<path d="M325.632405 182.721555l55.132668-54.878888 385.9297 384.157333-385.9297 384.157333-55.132668-54.878888 330.797032-329.278445L325.632405 182.721555z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-icon34" viewBox="0 0 1024 1024">'+""+'<path d="M329.98248 234.845703l305.960367 277.157367-305.97981 277.137924c-10.691503 10.577916-10.691503 27.700899 0 38.259372 10.692526 10.577916 28.004821 10.577916 38.697347 0l325.613986-294.906613c5.688559-5.631254 8.124028-13.108552 7.743358-20.48966 0.38067-7.382131-2.054799-14.838963-7.743358-20.48966l-325.613986-294.926056c-10.691503-10.558473-28.004821-10.558473-38.697347 0C319.289953 207.164247 319.289953 224.286206 329.98248 234.845703z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-angleleft" viewBox="0 0 1024 1024">'+""+'<path d="M354.08 512.032 743.168 122.976c13.44-13.504 13.44-35.36 0-48.832-13.536-13.536-35.392-13.536-48.896 0L280.928 487.456c-3.392 3.424-5.92 7.36-7.584 11.584-5.088 12.512-2.592 27.36 7.552 37.472l413.344 413.344c13.504 13.504 35.328 13.504 48.864 0 13.472-13.504 13.472-35.328 0-48.864L354.08 512.032z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-forward3" viewBox="0 0 1024 1024">'+""+'<path d="M286.541745 975.227218c-11.260958 11.28837-11.260958 29.294532 0 40.309805 5.369564 5.617281 12.693451 8.425414 20.018353 8.425414 7.323887 0 14.675185-2.808133 20.320893-8.425414L806.200659 536.21634c11.261974-11.016287 11.261974-29.353416 0-40.31285L326.879977 16.582807c-11.289385-11.289385-29.351385-11.289385-40.338231 0-11.260958 10.958419-11.260958 29.021435 0 40.31082L745.568947 516.16956 286.541745 975.227218z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-forward4" viewBox="0 0 1024 1024">'+""+'<path d="M674.586466 513.407519 265.413533 74.46015C249.473684 57.317293 250.375939 30.700752 267.518797 14.760902 284.661654-1.178947 311.278195-0.276692 327.218045 16.866165L759.548872 480.775939C768.120301 489.948872 771.729323 501.828571 770.827068 513.407519 771.729323 524.83609 768.270677 536.866165 759.548872 546.039098L327.067669 1009.948872C311.127819 1027.091725 284.661654 1028.144359 267.368421 1012.054131 250.225564 996.114286 249.323308 969.347365 265.263158 952.354885L674.586466 513.407519 674.586466 513.407519Z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)