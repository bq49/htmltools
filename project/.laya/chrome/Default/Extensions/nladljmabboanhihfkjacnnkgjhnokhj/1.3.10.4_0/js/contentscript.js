"use strict";!function(){var e=function(e){var t=e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);return null!=t&&t.length>2&&"string"==typeof t[2]&&t[2].length>0?t[2]:null};document.addEventListener("DOMContentLoaded",function(t){var s=document.getElementById("ypaAdWrapper-ALGO_MIDDLE-iframe");if(s)s.onload=function(t){var s=new XMLHttpRequest;s.open("GET",t.target.src,!0),s.onreadystatechange=function(){if(4==s.readyState){var t=s.responseText;document.getElementById("ypaAdWrapper-ALGO_MIDDLE").innerHTML=t;var r,a={};r=document.getElementsByClassName("ypaAdUnit")[0].getElementsByTagName("li");for(var n=0;n<r.length;n++){var i=e(r[n].children[0].children[0].href);a[n]=i}chrome.runtime.sendMessage({contents:"contentUrls",urls:a},function(e){for(var t in e.urls.validUrls){(s=document.createElement("img")).setAttribute("src","https://ext.adaware.com/ps/images/icon_check.png"),s.setAttribute("style","float: left; margin-left:-20px"),s.setAttribute("onmouseover",'javascript:var hoverSafe = document.createElement("img");hoverSafe.setAttribute("src", "https://ext.adaware.com/ps/images/SAFE.png");hoverSafe.setAttribute("style", "float:left; margin-left: -75px;");hoverSafe.classList.add("hoverImg");this.parentElement.insertBefore(hoverSafe,this.parentElement.firstChild);'),s.setAttribute("onmouseout",'javascript:this.parentElement.getElementsByClassName("hoverImg")[0].remove();'),s.classList.add("defined"),r[t].insertBefore(s,r[t].firstChild)}for(var t in e.urls.unvalidUrls){var s;(s=document.createElement("img")).setAttribute("src","http://ext.adaware.com/ps/images/icon_close.png"),s.setAttribute("style","float: left; margin-left:-20px"),s.setAttribute("onmouseover",'javascript:var hoverUnsafe = document.createElement("img");hoverUnsafe.setAttribute("src", "https://ext.adaware.com/ps/images/UNSAFE.png");hoverUnsafe.setAttribute("style", "float:left; margin-left: -75px;");hoverUnsafe.classList.add("hoverImg");this.parentElement.insertBefore(hoverUnsafe,this.parentElement.firstChild);'),s.setAttribute("onmouseout",'javascript:this.parentElement.getElementsByClassName("hoverImg")[0].remove();'),s.classList.add("defined"),r[t].insertBefore(s,r[t].firstChild)}for(var a=document.getElementsByClassName("defined"),n=0;n<a.length;n++)a[n].parentElement.setAttribute("style","overflow:visible")})}},s.send()};else{var r,a={},n=document.getElementsByClassName("listing-result")[0].classList.contains("sponsored-container");r=n?document.getElementsByClassName("listing-result")[1].getElementsByTagName("li"):document.getElementsByClassName("listing-result")[0].getElementsByTagName("li");for(var i=0;i<r.length;i++){var l=e(r[i].children[0].children[0].href);a[i]=l}chrome.runtime.sendMessage({contents:"contentUrls",urls:a},function(e){for(var t in n?document.getElementsByClassName("listing-result")[1].setAttribute("style","overflow:initial"):document.getElementsByClassName("listing-result")[0].setAttribute("style","overflow:initial"),e.urls.validUrls){(s=document.createElement("img")).setAttribute("src","https://ext.adaware.com/ps/images/icon_check.png"),s.setAttribute("style","float: left; margin-left:-20px"),s.setAttribute("onmouseover",'javascript:var hoverSafe = document.createElement("img");hoverSafe.setAttribute("src", "https://ext.adaware.com/ps/images/SAFE.png");hoverSafe.setAttribute("style", "float:left; margin-left: -75px;");hoverSafe.classList.add("hoverImg");this.parentElement.insertBefore(hoverSafe,this.parentElement.firstChild);'),s.setAttribute("onmouseout",'javascript:this.parentElement.getElementsByClassName("hoverImg")[0].remove();'),s.classList.add("defined"),r[t].insertBefore(s,r[t].firstChild)}for(var t in e.urls.unvalidUrls){var s;(s=document.createElement("img")).setAttribute("src","http://ext.adaware.com/ps/images/icon_close.png"),s.setAttribute("style","float: left; margin-left:-20px"),s.setAttribute("onmouseover",'javascript:var hoverUnsafe = document.createElement("img");hoverUnsafe.setAttribute("src", "https://ext.adaware.com/ps/images/UNSAFE.png");hoverUnsafe.setAttribute("style", "float:left; margin-left: -75px;");hoverUnsafe.classList.add("hoverImg");this.parentElement.insertBefore(hoverUnsafe,this.parentElement.firstChild);'),s.setAttribute("onmouseout",'javascript:this.parentElement.getElementsByClassName("hoverImg")[0].remove();'),s.classList.add("defined"),r[t].insertBefore(s,r[t].firstChild)}for(var a=document.getElementsByClassName("defined"),i=0;i<a.length;i++)a[i].parentElement.setAttribute("style","overflow:visible")})}})}();