"use strict";uBlock.restart=function(){var a,e=uBlock,t=864e5,n=["US","AU","GB","CA","FR","DE","NL","ES"],r=["NZ","JP","IT"];vAPI.app.onShutdown=function(){};var o=function(a,e){var t=null,n=new XMLHttpRequest;n.open("GET",a),n.onload=function(){t=n.response,localStorage.setItem(e,t)},n.send()},i=function(a,t){var n=new Date(a),r=(Date.now(),n.getTime(),{LastCallbackDate:n.toISOString(),SP:e.webCompanionData.searchEngine,Theme:t,extensionID:chrome.runtime.id});o("https://acs.lavasoft.com/malurl/api/urls/query/blacklist","ACS_black"),adawareTelemetry.sendEventTrackingInfo("DailyActivity",r)};function l(a,n){var r=(Date.now()+18250*t)/1e3;n&&(r=n);var o={SE_provider:a,install_date:e.webCompanionData.iDate,partner_id:adawareTelemetry.getExternalData().PID,browser_name:vAPI.browserShortName};e.SEARCH_ENGINE_URL;var i=function(a,e,t,n,r){return{host:e,path:t,name:n,value:"object"==typeof a?JSON.stringify(a):a,isSecure:!1,isHttpOnly:!1,isSession:!1,expiry:r}}(o,"defaultsearch.co","/","search_companion",r);vAPI.setCookie(i)}var s=function(a,e){return new Promise(function(t,n){adawareUtils.fetchWebCompanionData(function(e){var n=a(e);t(n)},function(){var a=e();n(a)},"http://localhost:9007/webcompanion/extension/ffnt/token")})},D=function(){!function(){var a;try{chrome.tabs.query({url:"http://*.adaware.com/*"},function(e){e.length>0&&(a=e[0],chrome.tabs.executeScript(a.id,{code:'localStorage.getItem("configuration");'},function(a){var e;e=JSON.parse(a[0]),chrome.storage.sync.set({config:e})}))})}catch(a){}}();var a=Date.now();adawareTelemetry.setInstallDate(a),vAPI.storage.set({installDate:a});var i=adawareUtils.generateUUID();adawareTelemetry.setInstallId(i),vAPI.storage.set({installId:i}),function(){function a(a){return new Promise(function(e,t){adawareUtils.httpGetAsync("http://ip-api.com/json",function(t){var o=JSON.parse(t).countryCode,i=a;n.indexOf(o)>-1?i.webCompanionData.searchEngine="1":r.indexOf(o)>-1?i.webCompanionData.searchEngine="1":i.webCompanionData.searchEngine="3",e(i)},function(e){t(a)},"application/json")})}function i(a){return new Promise(function(t,n){var r=a;vAPI.getCookie({url:"https://www.adaware.com/ext/",name:"inline"},function(n){var o=unescape(n);if(n){if("LV170101FF"===a.externalData.PID){var i=JSON.parse(o).pid;i&&(r.externalData.PID=i)}r.externalData.InstallSource="adaware/ext";var l={EXT:JSON.parse(o).ext||null,CTA:JSON.parse(o).cta||null,VN:JSON.parse(o).vn||null,SID:JSON.parse(o).sid||null};e.saveInlineParameters(l),r.trackingData.ParamPassed=l.EXT||"",r.trackingData.CTA=l.CTA||"",r.trackingData.VN=l.VN||"",r.trackingData.SID=l.SID||"",t(r)}else t(r)})})}function D(a){return new Promise(function(t,n){var r=a;vAPI.getCookie({url:"https://www.adaware.com/wp/",name:"datainstallsource"},function(n){var o=unescape(n);if(n){if("LV170101FF"===a.externalData.PID){var i=JSON.parse(o).pid;i&&(r.externalData.PID=i)}r.externalData.InstallSource="WebProtectionTest";var l={EXT:JSON.parse(o).ext||null,CTA:JSON.parse(o).cta||null,VN:JSON.parse(o).vn||null,SID:JSON.parse(o).sid||null};e.saveInlineParameters(l),r.trackingData.ParamPassed=l.EXT||"",r.trackingData.CTA=l.CTA||"",r.trackingData.VN=l.VN||"",r.trackingData.SID=l.SID||"",t(r)}else t(r)})})}function c(a){return new Promise(function(e,t){var n=a;chrome.storage.sync.get("config",function(a){a&&Object.keys(a).length>0?(n.externalData.BundleID=a.config.bundleId,n.externalData.OfferID=a.config.offerId,n.externalData.TemplateID=a.config.templateId,n.externalData.CampaignID=a.config.campaignId):(n.externalData.BundleID="",n.externalData.OfferID="",n.externalData.TemplateID="",n.externalData.CampaignID=""),e(n)})})}o("https://acs.lavasoft.com/malurl/api/urls/query/blacklist","ACS_black"),s(function(a){var e=JSON.parse(JSON.parse(a)).data,n={MK:e.mk||"",IK:e.ik||"",WCVersion:e.WCVersion||"",ParamPassed:"",CTA:"",VN:"",SID:""},r={CampaignID:e.campaignId||"",PID:e.pid||"LV170101FF",InstallSource:"WebCompanionBS",BundleID:e.bundleId||"",OfferID:e.offerId||"",TemplateID:e.templateId||""},o={searchEngine:"1",campaignId:e.campaignId||"",mk:e.mk||"",ik:e.ik||"",WCVersion:e.WCVersion||"",iDate:e.iDate||new Date(adawareTelemetry.getInstallDate()).toISOString()};if("LV170101FF"!==e.pid&&!e.iDate){var i=adawareTelemetry.getInstallDate()-365*t*10;o.iDate=new Date(i).toISOString()}return e.pid.endsWith("_sh")&&(r.PID=e.pid.replace("_sh","")),{trackingData:n,externalData:r,webCompanionData:o}},function(){return{trackingData:{MK:"",IK:"",WCVersion:"",ParamPassed:"",CTA:"",VN:"",SID:""},externalData:{CampaignID:"",PID:adawareTelemetry.getExternalData().PID||"LV170101FF",InstallSource:"",BundleID:"",OfferID:"",TemplateID:""},webCompanionData:{searchEngine:"1",campaignId:"",mk:"",ik:"",WCVersion:"",iDate:new Date(adawareTelemetry.getInstallDate()).toISOString()}}}).then(a,a).then(i,i).then(function(a){return new Promise(function(e,t){var n=a;"LV170101FF"===a.externalData.PID?(n.externalData.InstallSource="adaware",vAPI.getCookie({url:"https://www.adaware.com/",name:"config"},function(a){if(null!==a){var t=JSON.parse(a).Partner;t&&(n.externalData.PID=t)}else n.externalData.PID="";e(n)})):e(n)})}).then(D,D).then(c,c).then(function(a){adawareTelemetry.setExternalData(a.externalData),e.saveExternalData(),e.webCompanionData=a.webCompanionData,vAPI.storage.set({webCompanionData:e.webCompanionData}),l(e.NUM_TO_SEARCH_MAP[a.webCompanionData.searchEngine]),adawareTelemetry.sendEventTrackingInfo("CompleteInstall",a.trackingData),adawareTelemetry.setupUninstall()})}();var D={host:"www.adaware.com",name:"ssext",value:"installed",path:"/",isSecure:!1,isHttpOnly:!1,expiry:(Date.now()+3e5)/1e3};vAPI.setCookie(D)},c=function(a){new Promise(function(a,e){vAPI.storage.get({installDate:Date.now(),installId:adawareUtils.generateUUID()},function(e){adawareTelemetry.setInstallDate(e.installDate),adawareTelemetry.setInstallId(e.installId),a()})}).then(function(){!function(){function n(a){adawareTelemetry.setExternalData(a.externalData),e.saveExternalData(),l(e.NUM_TO_SEARCH_MAP[e.webCompanionData.searchEngine]),a.webCompanionData&&(e.webCompanionData=a.webCompanionData,vAPI.storage.set({webCompanionData:e.webCompanionData})),adawareTelemetry.sendEventTrackingInfo("CompleteUpdate",a.trackingData),adawareTelemetry.setupUninstall()}s(function(n){var r=JSON.parse(JSON.parse(n)).data,o={FromExtensionVersion:a,MK:r.mk||"",IK:r.ik||"",WCVersion:r.WCVersion||""},i={CampaignID:r.campaignId,PID:r.pid||"LV170101FF"};"LV170101FF"===i.PID&&e.webCompanionData.pid&&(i.PID=e.webCompanionData.pid);var l=adawareTelemetry.getInstallDate()-365*t*10,s=e.webCompanionData;return s.iDate=e.webCompanionData.iDate===new Date(adawareTelemetry.getInstallDate()).toISOString()||e.webCompanionData.iDate===new Date(l).toISOString()?r.iDate:e.webCompanionData.iDate,{trackingData:o,externalData:i,webCompanionData:s}},function(){var t={FromExtensionVersion:a,MK:"",IK:"",WCVersion:e.webCompanionData.WCVersion||""},n={CampaignID:"",PID:adawareTelemetry.getExternalData().PID||"LV170101FF"};return"LV170101FF"===n.PID&&e.webCompanionData.pid&&(n.PID=e.webCompanionData.pid),{trackingData:t,externalData:n}}).then(n,n)}()})},m=function(a){var n=[];n.push(new Promise(function(a,e){vAPI.storage.get({externalData:adawareTelemetry.getExternalData()},function(e){adawareTelemetry.setExternalData(e.externalData),a("externalData")})})),n.push(new Promise(function(a,t){vAPI.storage.get({webCompanionData:e.webCompanionData},function(t){e.webCompanionData=t.webCompanionData,a("webCompanionData")})})),Promise.all(n).then(function(n){"install"===a.reason?D():"update"===a.reason?(c(a.lastVersion),chrome.tabs.create({url:"https://extensions.adaware.com/securesearch/update.html"})):"startup"===a.reason&&(vAPI.storage.get({installDate:Date.now()},function(a){adawareTelemetry.setInstallDate(a.installDate)}),vAPI.storage.get({installId:adawareUtils.generateUUID()},function(a){adawareTelemetry.setInstallId(a.installId)}),vAPI.storage.get({startupTime:Date.now()},function(a){Date.now()-a.startupTime>t&&i(a.startupTime,localStorage.getItem("Background")),vAPI.storage.set({startupTime:Date.now()})}),l(e.NUM_TO_SEARCH_MAP[e.webCompanionData.searchEngine]))})},u=function(e){e.version!==vAPI.app.version&&vAPI.storage.set({version:vAPI.app.version}),a=Date.now(),setInterval(function(){i(a,localStorage.getItem("Background")),a=Date.now()},t)};return function(){vAPI.capturePreOpenedTabUrls(),vAPI.onLoadAllCompleted(),vAPI.onExtensionLaunch(m);vAPI.storage.get({version:"0.0.0.0"},u)}}(),uBlock.restart(),chrome.runtime.onMessage.addListener(function(a,e,t){if("changeTheme"==a.contents){var n={LastCallbackDate:(new Date).toISOString(),Theme:a.theme};adawareTelemetry.sendEventTrackingInfo("ThemeChangeActivity",n),t({farewell:"goodbye"})}else if("contentUrls"==a.contents){var r=JSON.parse(localStorage.getItem("ACS_black")),o={validUrls:{},unvalidUrls:{}};for(var i in a.urls)r.indexOf(a.urls[i])>-1?o.unvalidUrls[i]=a.urls[i]:o.validUrls[i]=a.urls[i];t({urls:o})}});