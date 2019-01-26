!function(){"use strict";var e=function(){document.getElementById("searchBoxOptions").getElementsByTagName("ul")[0].classList.toggle("closed")},t=function(){document.getElementById("languageOptions").getElementsByTagName("ul")[0].classList.toggle("closed")},n=function(){document.getElementById("themeOptions").getElementsByTagName("ul")[0].classList.toggle("closed")},a=function(){document.getElementById("settingDetail").classList.toggle("closed")},o=function(){a()},r=function(){-1===document.getElementById("settingDetail").className.indexOf("closed")&&a()};function l(){return new Promise(function(e,t){adawareUtils.httpGetAsync("http://ip-api.com/json",function(t){var n=JSON.parse(t).countryCode;e(n)},function(e){t()},"application/json")})}var s,c=function(e){var t=Math.floor((new Date).getTime()/864e5),n="";switch(e){default:var a=JSON.parse(localStorage.getItem("Animals"));if(null!=a){n=a[t%a.length];break}return void m("random");case"nature":var o=JSON.parse(localStorage.getItem("Nature"));if(null==o)return void m("nature");n=o[t%o.length];break;case"urban":var r=JSON.parse(localStorage.getItem("Urban"));if(null==r)return void m("urban");n=r[t%r.length];break;case"abstract":var l=JSON.parse(localStorage.getItem("Abstract"));if(null==l)return void m("abstract");n=l[t%l.length];break;case"food":var s=JSON.parse(localStorage.getItem("Food"));if(null==s)return void m("food");n=s[t%s.length]}var c=u(n.urls.regular,"w",2500);document.getElementById("authorNameLink").innerHTML=" "+n.user.name,document.getElementById("authorNameLink").href=n.user.links.html+"?utm_source=Secure Search Extension&utm_medium=referral",document.getElementById("backgroundImage").style.backgroundImage="url("+c+")"},u=function(e,t,n){var a=null,o="",r=e.split("?"),l=r[0],s=r[1],c="";if(s){var u=(i=s.split("#"))[0];(a=i[1])&&(s=u),r=s.split("&");for(var d=0;d<r.length;d++)r[d].split("=")[0]!=t&&(o+=c+r[d],c="&")}else{var i;u=(i=l.split("#"))[0];a=i[1],u&&(l=u)}return a&&(n+="#"+a),l+"?"+o+(c+""+t+"="+n)},d=function(e){var t,n,a;t="../_locales/"+e+"/messages.json",n=function(e){var t=JSON.parse(e),n=new Date,a=t.months.list,o=t.days.list;document.getElementById("hourText").textContent=g(n),document.getElementById("dayText").textContent=o[n.getDay()]+",",document.getElementById("monthText").textContent=a[n.getMonth()]+" ",document.getElementById("dayNumberText").textContent=n.getDate(),document.getElementById("searchText").setAttribute("placeholder",t.searchPlaceholder.message),document.getElementById("settingText").innerHTML=t.settings.message,document.getElementById("themeOptions").getElementsByTagName("p")[0].innerHTML=t.themeMessage.message,document.getElementById("languageOptions").getElementsByTagName("p")[0].innerHTML=t.languageMessage.message,document.getElementById("searchBoxOptions").getElementsByTagName("p")[0].innerHTML=t.searchEngineMessage.message,document.getElementById("reference").innerHTML=t.photoMessage.message,document.getElementById("onD").innerHTML=t.onMessage.message;for(var r=0;r<document.querySelectorAll(".themeOptionsLabel").length;r++)document.querySelectorAll(".themeOptionsLabel")[r].getElementsByTagName("span")[0].innerHTML=t[document.querySelectorAll(".themeOptionsLabel")[r].getAttribute("data-i18n")].message},(a=new XMLHttpRequest).overrideMimeType("application/json"),a.open("GET",t,!0),a.onreadystatechange=function(){4===a.readyState&&"200"==a.status&&n(a.responseText)},a.send(null)},i=function(){var e="6587d32abd99e2e2edd2b8b55f44b098952c976332c0d0e9369804d883bb9f04",t=Math.floor((new Date).getTime()/864e5)%3+1,n=new Promise(function(n,a){var o=new XMLHttpRequest,r="https://api.unsplash.com/collections/2027006/photos/?page="+t+"&per_page=100";o.open("GET",r),o.setRequestHeader("Authorization","Client-ID "+e),o.onload=(()=>n(o.response)),o.onerror=(()=>a(o.statusText)),o.send()}),a=new Promise(function(n,a){var o=new XMLHttpRequest,r="https://api.unsplash.com/collections/2039511/photos/?page="+t+"&per_page=100";o.open("GET",r),o.setRequestHeader("Authorization","Client-ID "+e),o.onload=(()=>n(o.response)),o.onerror=(()=>a(o.statusText)),o.send()}),o=new Promise(function(n,a){var o=new XMLHttpRequest,r="https://api.unsplash.com/collections/2044069/photos/?page="+t+"&per_page=100";o.open("GET",r),o.setRequestHeader("Authorization","Client-ID "+e),o.onload=(()=>n(o.response)),o.onerror=(()=>a(o.statusText)),o.send()}),r=new Promise(function(n,a){var o=new XMLHttpRequest,r="https://api.unsplash.com/collections/2310721/photos/?page="+t+"&per_page=100";o.open("GET",r),o.setRequestHeader("Authorization","Client-ID "+e),o.onload=(()=>n(o.response)),o.onerror=(()=>a(o.statusText)),o.send()}),l=new Promise(function(n,a){var o=new XMLHttpRequest,r="https://api.unsplash.com/collections/2486588/photos/?page="+t+"&per_page=100";o.open("GET",r),o.setRequestHeader("Authorization","Client-ID "+e),o.onload=(()=>n(o.response)),o.onerror=(()=>a(o.statusText)),o.send()});return Promise.all([n,a,o,r,l]).then(function(e){localStorage.setItem("Food",e[4]),localStorage.setItem("Animals",e[3]),localStorage.setItem("Abstract",e[2]),localStorage.setItem("Nature",e[1]),localStorage.setItem("Urban",e[0]),localStorage.setItem("PageNumber",t);JSON.parse(e[0]),JSON.parse(e[1]),JSON.parse(e[2]),JSON.parse(e[3]),JSON.parse(e[4]);null!==localStorage.getItem("Background")?c(localStorage.getItem("Background")):c("random")}).catch(e=>{m("random")})},m=function(){var e="random";switch(null!==localStorage.getItem("Background")&&(e=localStorage.getItem("Background")),e){default:document.getElementById("authorNameLink").innerHTML="Sydney Rae",document.getElementById("backgroundImage").style.backgroundImage="url(img/animals_default.jpg)",document.getElementById("authorNameLink").href="https://api.unsplash.com/@srz?utm_source=Secure Search Extension&utm_medium=referral";break;case"nature":document.getElementById("authorNameLink").innerHTML="Ghost Presenter",document.getElementById("backgroundImage").style.backgroundImage="url(img/nature_default.jpg)",document.getElementById("authorNameLink").href="https://api.unsplash.com/@ghostpresenter?utm_source=Secure Search Extension&utm_medium=referral";break;case"urban":document.getElementById("authorNameLink").innerHTML="Osman Rana",document.getElementById("backgroundImage").style.backgroundImage="url(img/urban_default.jpg)",document.getElementById("authorNameLink").href="https://api.unsplash.com/@osmanrana?utm_source=Secure Search Extension&utm_medium=referral";break;case"abstract":document.getElementById("authorNameLink").innerHTML="Eberhard Grossgasteiger",document.getElementById("backgroundImage").style.backgroundImage="url(img/abstract_default.jpg)",document.getElementById("authorNameLink").href="https://api.unsplash.com/@eberhardgross?utm_source=Secure Search Extension&utm_medium=referral"}},g=function(e){var t=e.getHours(),n=e.getMinutes(),a=t;return t>12?(t-=12)<10&&(a="0"+t):t<12&&(a=t<10?"0"+t:t),n<10&&(n="0"+n),a=a+":"+n};if(document.querySelector(".selectedOption").addEventListener("click",function(){e()}),document.querySelector(".languageOption").addEventListener("click",function(){t()}),document.querySelector(".themeOption").addEventListener("click",function(){n()}),document.querySelector("#settingButton").addEventListener("click",o),document.querySelector("#settingText").addEventListener("click",o),document.querySelector("#backgroundBlack").addEventListener("click",r),document.querySelector("#backgroundImage").addEventListener("click",r),document.querySelector("#searchContainer").addEventListener("click",r),document.querySelector("#clock").addEventListener("click",r),null==localStorage.getItem("firstRun")){localStorage.setItem("firstRun",!1),localStorage.setItem("Background","animals"),localStorage.setItem("search","bing"),localStorage.setItem("Language",navigator.language.substr(0,2));for(var p=0;p<document.querySelectorAll(".themeOptionsLabel").length;p++)document.querySelectorAll(".themeOptionsLabel")[p].getAttribute("value")==localStorage.getItem("Background")&&(document.querySelectorAll(".themeOptionsLabel")[p].classList.add("checked"),document.querySelector(".themeOption").setAttribute("id",document.querySelectorAll(".themeOptionsLabel")[p].getAttribute("id")),document.querySelector(".themeOption").innerHTML=document.querySelectorAll(".themeOptionsLabel")[p].innerHTML);for(p=0;p<document.querySelectorAll(".languageOptionsLabel").length;p++)document.querySelectorAll(".languageOptionsLabel")[p].getAttribute("value")==localStorage.getItem("Language")&&(document.querySelectorAll(".languageOptionsLabel")[p].classList.add("checked"),document.querySelector(".languageOption").setAttribute("id",document.querySelectorAll(".languageOptionsLabel")[p].getAttribute("value")),document.querySelector(".languageOption").innerHTML=document.querySelectorAll(".languageOptionsLabel")[p].innerHTML);setTimeout(function(){i(),document.getElementById("backgroundImage").classList.add("fadeIn")},300)}else{var h=Math.floor((new Date).getTime()/864e5)%3+1,y=new Image;parseInt(localStorage.getItem("PageNumber"))!==h?i():c(localStorage.getItem("Background")),y.onload=function(){},y.onerror=function(){m()};var b=document.getElementById("backgroundImage").style.backgroundImage;b=b.replace(/url\(['"]?(.*?)['"]?\)/i,"$1"),y.src=b,document.getElementById("backgroundImage").classList.add("fadeIn");for(p=0;p<document.querySelectorAll(".themeOptionsLabel").length;p++)document.querySelectorAll(".themeOptionsLabel")[p].getAttribute("value")==localStorage.getItem("Background")&&(document.querySelectorAll(".themeOptionsLabel")[p].classList.add("checked"),document.querySelector(".themeOption").setAttribute("id",document.querySelectorAll(".themeOptionsLabel")[p].getAttribute("id")),document.querySelector(".themeOption").innerHTML=document.querySelectorAll(".themeOptionsLabel")[p].innerHTML);for(p=0;p<document.querySelectorAll(".languageOptionsLabel").length;p++)document.querySelectorAll(".languageOptionsLabel")[p].getAttribute("value")==localStorage.getItem("Language")&&(document.querySelectorAll(".languageOptionsLabel")[p].classList.add("checked"),document.querySelector(".languageOption").setAttribute("id",document.querySelectorAll(".languageOptionsLabel")[p].getAttribute("id")),document.querySelector(".languageOption").innerHTML=document.querySelectorAll(".languageOptionsLabel")[p].innerHTML)}(s=function(){d(localStorage.getItem("Language"))})(),setInterval(s,6e4),function(){var a,o=vAPI.messaging,r=function(e){document.querySelector(".selectedOption").setAttribute("id",e),function(){var e=document.querySelector(".selectedOption").id;switch(document.getElementsByName(e)[0].classList.add("checked"),e){case"bing":document.querySelector(".selectedOption").innerHTML="Bing&#8482;";break;case"lavasoft":document.querySelector(".selectedOption").innerHTML="Adaware Secure Search";break;case"yahoo":document.querySelector(".selectedOption").innerHTML="Yahoo!&#174;";break;case"yandex":document.querySelector(".selectedOption").innerHTML="Яндекс (Yandex)";break;case"google":document.querySelector(".selectedOption").innerHTML="Google&#174;"}}()};chrome.cookies.get({url:"http://defaultsearch.co",name:"search_companion"},function(e){if(null==e){var t={url:"http://defaultsearch.co",name:"search_companion",path:"/",value:'{"SE_provider":"'+(null==localStorage.getItem("search")?"bing":localStorage.getItem("search"))+'","install_date":"2018-09-19T15:44:16.147Z","partner_id":"","browser_name":"CH"}'};chrome.cookies.set(t);var n=JSON.parse(t.value)}else n=JSON.parse(e.value);r(n.SE_provider)});new autoComplete({selector:"#searchText",minChars:1,source:function(e,t){try{a.abort()}catch(e){}var n=document.getElementById("searchText").value,o=function(e){var n=JSON.parse(e);t(n[1])};if("google"==document.getElementsByClassName("selectedOption")[0].id){var r=document.getElementsByClassName("selectLanguageOption checked")[0].getAttribute("value");l().then(function(e){var o,l,s,c,u,d,i,m="https://api.bing.com/osjson.aspx?query="+n+"&Market="+(r+"-"+e);a=adawareUtils.httpGetAsync(m,a=>{var o=JSON.parse(a),m=o[1].toString().replace(/,/g,"%0A").replace(/ /g,"+"),g="https://api.thinksuggest.org/?m=s&uc="+e+"&ul="+r+"&pid=adaware&mo=30&q="+n+"&ps="+m;adawareUtils.httpGetAsync(g,e=>{for(var a=JSON.parse(e).suggestions,r=document.getElementsByClassName("suggestion-link"),m=0;m<r.length;m++)r[m].parentNode.removeChild(r[m]);var g=0;for(var p in t(o[1]),a)if(null!=a[p]&&g<3){var h;for(var y in a[p][0])a[p][0][y]=a[p][0][y].toString().replace(/~/g,n);if(h=void 0!=a[p][0].s?a[p][0].s.replace(/~/g,n):a[p][0].l,void 0!=a[p][0].l)var b=a[p][0].l.replace(/.com/g,"");a[p][0].suggestionUrl="https://api.thinksuggest.org/?m=c&pid=adaware&t="+a[p][0].t+"&q="+n+"&h="+a[p][0].h+"&k="+b+"&s="+h,g+=1,e=a[p][0],void 0,s=void 0,c=void 0,u=void 0,d=void 0,i=void 0,l=e,s=document.createElement("div"),c=document.createElement("span"),u=document.createElement("a"),d=document.createElement("img"),i=document.createElement("span"),s.classList.add("autocomplete-suggestion-link"),s.classList.add("suggestion-link"),u.setAttribute("href",l.suggestionUrl),d.setAttribute("src","https://www.google.com/s2/favicons?domain="+l.d),d.setAttribute("valign","middle"),i.classList.add("linkSuggest"),i.innerText=l.u,c.appendChild(d),u.appendChild(c),s.appendChild(u),s.appendChild(i),u.innerHTML=u.innerHTML+l.l,document.getElementsByClassName("autocomplete-suggestions")[0].insertBefore(s,document.getElementsByClassName("autocomplete-suggestion")[0])}})})})}else l().then(function(e){var t="https://api.bing.com/osjson.aspx?query="+n+"&Market="+(r+"-"+e);a=adawareUtils.httpGetAsync(t,o)})}});var s=function(){var e=document.getElementById("searchText").value;if(""!==e){o.send("new-tab",{what:"searchBarEntry",data:e},function(e){window.location.href=e})}};document.addEventListener("click",function(a){var r=a.target.id;document.getElementById("settingDetail");if("searchEngineIcon searchEngineOption"===a.target.className)document.querySelector(".selectedOption").setAttribute("id",r),document.querySelector(".selectedOption").innerHTML=a.target.innerHTML,document.getElementsByClassName("searchEngineOption checked")[0].classList.remove("checked"),a.target.classList.add("checked"),o.send("new-tab",{what:"setSearch",search:r}),localStorage.setItem("search",r),e();else if("themeOptionsLabel selectThemeOption"===a.target.className){var l=a.target.getAttribute("value");localStorage.setItem("Background",l),document.getElementById("blurBlack").classList.add("blurMiddleC"),document.getElementById("backgroundImage").classList.add("fadeOut"),document.querySelector(".themeOption").setAttribute("id",r),document.querySelector(".themeOption").innerHTML=a.target.innerHTML,document.getElementsByClassName("selectThemeOption checked")[0].classList.remove("checked"),a.target.classList.add("checked"),chrome.runtime.sendMessage({contents:"changeTheme",theme:l},function(e){}),setTimeout(()=>{c(l);var e=new Image;e.onload=function(){},e.onerror=function(e){m()};var t=document.getElementById("backgroundImage").style.backgroundImage;t=t.replace(/url\(['"]?(.*?)['"]?\)/i,"$1"),e.src=t,document.getElementById("backgroundImage").classList.remove("fadeOut"),document.getElementById("blurBlack").classList.remove("blurMiddleC")},800),n()}else"languageOptionsLabel selectLanguageOption"===a.target.className?(l=a.target.getAttribute("value"),document.querySelector(".languageOption").setAttribute("id",r),document.querySelector(".languageOption").innerHTML=a.target.innerHTML,document.getElementsByClassName("selectLanguageOption checked")[0].classList.remove("checked"),a.target.classList.add("checked"),localStorage.setItem("Language",l),d(l),t()):-1===a.target.className.indexOf("selectedOption")&&(document.getElementById("searchText")===document.activeElement?document.getElementById("blurBlack").classList.add("blur"):document.getElementById("blurBlack").classList.remove("blur"),document.getElementById("searchBoxOptions").getElementsByTagName("ul")[0].classList.add("closed"));-1===a.target.className.indexOf("themeOption")&&(document.getElementById("searchText")===document.activeElement?document.getElementById("blurBlack").classList.add("blur"):document.getElementById("blurBlack").classList.remove("blur"),document.getElementById("themeOptions").getElementsByTagName("ul")[0].classList.add("closed")),-1===a.target.className.indexOf("languageOption")&&(document.getElementById("searchText")===document.activeElement?document.getElementById("blurBlack").classList.add("blur"):document.getElementById("blurBlack").classList.remove("blur"),document.getElementById("languageOptions").getElementsByTagName("ul")[0].classList.add("closed"))}),document.getElementById("searchButton").addEventListener("click",s),document.getElementById("searchBoxText").addEventListener("keyup",function(e){13==e.keyCode&&s(),""==document.getElementById("searchText").value&&document.getElementById("whiteArrowUp").classList.add("closed")})}()}();