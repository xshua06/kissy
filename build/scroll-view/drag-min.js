/*
Copyright 2013, KISSY v1.40dev
MIT Licensed
build time: Sep 3 16:10
*/
KISSY.add("scroll-view/drag",function(l,E,F){function w(b,c,a){var c=c.timeStamp,f=b.get("scroll"+l.ucfirst(a));b.startScroll[a]=f;b.swipe[a].startTime=c;b.swipe[a].scroll=f}function x(b,c,a,f){if(!y(b,a)){var d={pageX:c.touches[0].pageX,pageY:c.touches[0].pageY},e="left"==a?"pageX":"pageY",h=b.lastPageXY,g,i=b.startScroll[a]-(d[e]-f[e]),f=c.timeStamp,m=b.minScroll,k=b.maxScroll,j=b.lastDirection,p=b.swipe,n;h[e]&&(g=d[e]==h[e],n=0<d[e]-h[e]);b.get("bounce")||(i=Math.min(Math.max(i,m[a]),k[a]));i<
m[a]?(d=m[a]-i,d*=z,i=m[a]-d):i>k[a]&&(d=i-k[a],d*=z,i=k[a]+d);d=f-p[a].startTime;if(!g&&void 0!==j[a]&&j[a]!==n||d>G)p[a].startTime=f,p[a].scroll=i;b.set("scroll"+l.ucfirst(a),i);j[a]=n;h[e]=c[e]}}function y(b,c){return!b.allowScroll[c]&&b.get("left"==c?"lockX":"lockY")?1:0}function A(b,c,a,f){if(y(b,a))f();else{var d="scroll"+l.ucfirst(a),e=b.$contentEl,h=b.get(d),g={},i=b.minScroll,m=b.maxScroll,k=c.timeStamp,c=b.swipe,j;h<i[a]?j=i[a]:h>m[a]&&(j=m[a]);void 0!==j?(d={},d[a]=j,b.scrollTo(d,{duration:b.get("bounceDuration"),
easing:b.get("bounceEasing"),queue:!1,complete:f})):b.pagesOffset?f():(j=k-c[a].startTime,c=h-c[a].scroll,0==j||0==c?f():(j=Math.min(Math.max(c/j,-B),B),g[a]={frame:H(b,j,h,d,m[a],i[a])},e.animate(g,{duration:9999,queue:!1,complete:f})))}}function H(b,c,a,f,d,e){var h=c*v,g=1,i=0;return function(c){var k=l.now();if(g){var c=k-c.startTime,j=Math.exp(c*I),c=parseInt(a+h*(1-j)/-C);c>e&&c<d?(this.lastValue===c&&(this.pos=1),this.lastValue=c,b.set(f,c)):(g=0,h*=j,a=c<=e?e:d,i=k)}else c=k-i,k=c/v,k*=Math.exp(-J*
k),c=parseInt(h*k),0===c&&(this.pos=1),b.set(f,a+c)}}function K(b){if(!this.get("disabled")){var c={pageX:b.touches[0].pageX,pageY:b.touches[0].pageY},a=this.isScrolling;this.stopAnimation();a&&(a=this.get("pageIndex"),this.fire("scrollEnd",l.mix({fromPageIndex:a,pageIndex:a},c)));D(this);this.startMousePos=c;w(this,b,"left");w(this,b,"top");this.fire("scrollStart",c);this.isScrolling=1;this.$contentEl.on(t.move,u,this)}}function u(b){var c=this.startMousePos;if(c&&this.isScrolling){var a=this.get("lockX"),
f=this.get("lockY"),d={pageX:b.touches[0].pageX,pageY:b.touches[0].pageY};if(a||f){var e=Math.abs(d.pageX-c.pageX),h=Math.abs(d.pageY-c.pageY);if(5>Math.max(e,h))return;var g;if(!(g=this.dragInitDirection))this.dragInitDirection=g=e>h?"left":"top";if(a&&"left"==g&&!this.allowScroll[g]){this.isScrolling=0;return}if(f&&"top"==g&&!this.allowScroll[g]){this.isScrolling=0;return}}l.Features.isTouchEventSupported()&&b.preventDefault();x(this,b,"left",c);x(this,b,"top",c);this.fire("scrollMove",d)}}function L(b){function c(){f++;
if(2==f){var c=function(){a.isScrolling=0;a.fire("scrollEnd",{pageX:b.pageX,pageY:b.pageY,fromPageIndex:p,pageIndex:a.get("pageIndex")})};if(a.pagesOffset){a.get("snapThreshold");var d=a.get("snapDuration"),j=a.get("snapEasing"),p=a.get("pageIndex"),n=a.get("scrollLeft"),o=a.get("scrollTop"),d={duration:d,easing:j,complete:c},j=a.pagesOffset.concat([]);a.isScrolling=0;if(g||i)if(g&&i){var q=[],r=void 0;l.each(j,function(a){a&&(0<e&&a.left>n?q.push(a):0>e&&a.left<n&&q.push(a))});var s;0<h?(s=Number.MAX_VALUE,
l.each(q,function(a){a.top>o&&s<a.top-o&&(s=a.top-o,r=q.index)})):(s=Number.MAX_VALUE,l.each(q,function(a){a.top<o&&s<o-a.top&&(s=o-a.top,r=q.index)}));void 0!=r?r!=p?a.scrollToPage(r,d):(a.scrollToPage(r),c()):c()}else g||i?(c=a._getPageIndexFromXY(g?n:o,g,g?e:h),a.scrollToPage(c,d)):(a.scrollToPage(a.get("pageIndex")),c())}else c()}}var a=this,f=0,d=a.startMousePos;if(d&&a.isScrolling){a.$contentEl.detach(t.move,u,a);var e=d.pageX-b.pageX,h=d.pageY-b.pageY,d=a.get("snapThreshold"),g=a.allowScroll.left&&
Math.abs(e)>d,i=a.allowScroll.top&&Math.abs(h)>d;a.fire("dragend",{pageX:b.pageX,pageY:b.pageY});A(a,b,"left",c);A(a,b,"top",c)}}function D(b){b.lastPageXY={};b.lastDirection={};b.swipe={left:{},top:{}};b.startMousePos=null;b.startScroll={};b.dragInitDirection=null}function M(b){b.preventDefault()}var z=0.5,t=F.Gesture,G=300,B=6,v=20,C=Math.log(0.95),I=C/v,J=0.3;l.UA.ie&&(u=l.throttle(u,30));return E.extend({bindUI:function(){this.$contentEl.on("dragstart",M).on(t.start,K,this).on(t.end,L,this)},
syncUI:function(){D(this)},destructor:function(){this.stopAnimation()},stopAnimation:function(){this.callSuper();self.isScrolling=0}},{ATTRS:{lockX:{value:!0},lockY:{value:!1},snapThreshold:{value:5},bounce:{value:!0},bounceDuration:{value:0.4},bounceEasing:{value:"easeOut"}},xclass:"scroll-view"})},{requires:["./base","node"]});