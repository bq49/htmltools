var adawareTelemetry=function(){"use strict";var t={ProductID:"SrExt",Type:""},n="https://adaware.com/sr/uninstall.html?",e=null,r={ExtensionLocale:vAPI.getUILanguage(),ExtensionVersion:vAPI.app.version},a={PID:"",CampaignID:"",InstallSource:"",BundleID:"",OfferID:"",TemplateID:"",extensionID:chrome.runtime.id},o={true:1,false:0},i=!1,s=0,l=0,u={ListChange:"*",UserAction:"*",ToggleAdblocking:"*",ToggleACS:"*",TogglePopups:"*",WhitelistYoutube:"*",WarningPageShown:["DomainName","Url"],WarningPageButtons:["DomainName","Url"]},p=function(t,n,e,r){this.init(t,n,e,r)};p.prototype.init=function(t,n,e,r){var a;for(a=0;a<arguments.length;a++){var o=arguments[a];if(o){var i=Object.getOwnPropertyNames(o);for(var s in i){var l=i[s];null!==o[l]&&(this[l]=o[l])}}}},p.prototype.getFormatted=function(){var t={},n=Object.getOwnPropertyNames(this);for(var e in n){var r=n[e];t[r]=this[r]}return function(t){for(var n=Object.getOwnPropertyNames(t),e=0;e<n.length;e++){var r=n[e];null!==t[r]&&void 0!==t[r]||delete t[r]}}(t),{Data:t}};var c=function(){var t,n={name:(t=function(){var t,n=navigator.userAgent,e=n.match(/(vivaldi|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([0-9|\.]+)/i)||[];if(/trident/i.test(e[1]))return"IE "+((t=/\brv[ :]+([0-9|\.]+)/g.exec(n)||[])[1]||"");if("Firefox"===e[1]&&null!=(t=n.match(/\b(PaleMoon)\/([0-9|\.]+)/)))return t.slice(1).join(" ");if("Chrome"===e[1]&&null!=(t=n.match(/\b(OPR|Edge)\/([0-9|\.]+)/)))return t.slice(1).join(" ").replace("OPR","Opera");e=e[2]?[e[1],e[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=n.match(/version\/([0-9|\.]+)/i))&&e.splice(1,1,t[1]);return e.join(" ")}().split(" "))[0],version:t[1],lang:navigator.language||navigator.userLanguage};this.BrowserFamily=n.name,this.BrowserVersion=n.version,this.BrowserLocale=n.lang,this.Platform=function(){var t="other";-1!=navigator.appVersion.indexOf("Win")?t="windows":-1!=navigator.appVersion.indexOf("Mac")?t="mac":-1!=navigator.appVersion.indexOf("Linux")&&(t="linux");return t}()};var f=function(){this.init()};function g(t){var n="",e=Object.getOwnPropertyNames(t);for(var r in e){var a=e[r];n=n+a+"="+t[a]+"&"}return n.substring(0,n.length-1)}return f.prototype.init=function(){e=new c},f.prototype.setupUninstall=function(){var t={InstallDate:new Date(s).toISOString(),ExtensionVersion:r.ExtensionVersion,OptInStatus:o[i],PID:a.PID,InstallSource:a.InstallSource,InstallId:l};!function(t){var e=n;e+=g(t);try{vAPI.setUninstallURL(e)}catch(t){}}(new p(t))},f.prototype.sendEventTrackingInfo=function(n,c,f){void 0===f&&(f=!0);var v=null;(v=f?new p(e,r,a,c):new p(c)).InstallDate=new Date(s).toISOString(),v.OptInStatus=o[i],v.InstallId=l,t.Type=n;var I,h,m="https://flow.lavasoft.com/v1/event-stat?"+g(t);if(!1===i){var O=Object.keys(u);if(O.indexOf(n)>-1&&"*"===u[n])return;if(O.indexOf(n)>-1){var d,y=u[n];for(d=0;d<y.length;d++)v[y[d]]=null}}I=v.getFormatted(),h=m,adawareUtils.httpPostAsync(h,JSON.stringify(I),function(t){JSON.parse(t)},function(t){try{JSON.parse(t)}catch(t){}},function(){},"application/json")},f.prototype.setOptinStatus=function(t){i=t},f.prototype.getOptinStatus=function(){return i},f.prototype.setInstallDate=function(t){s=t;new Date(s).toString()},f.prototype.getInstallDate=function(){return s},f.prototype.setInstallId=function(t){l=t},f.prototype.getInstallId=function(){return l},f.prototype.setExternalData=function(t){for(var n in t)a.hasOwnProperty(n)&&t[n]&&(a[n]=t[n])},f.prototype.getExternalData=function(){return a},new f}();