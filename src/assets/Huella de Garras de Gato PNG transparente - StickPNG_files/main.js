!function(){function t(e,i,n){function o(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[r]={exports:{}};e[r][0].call(d.exports,function(t){return o(e[r][1][t]||t)},d,d.exports,t,e,i,n)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}return t}()({1:[function(t,e,i){e.exports={init:function(){window.innerWidth<768?$(".ad").filter(function(){return $(this).hasClass("desktop")}).remove():$(".ad").filter(function(){return $(this).hasClass("mobile")}).remove(),/stickpng\.com/.test(window.location.hostname)&&(adsbygoogle=window.adsbygoogle||[],$(".ad .adsbygoogle").each(function(){adsbygoogle.push({})}))}}},{}],2:[function(t,e,i){var n=t("./tools");e.exports={init:function(t){var e=$("footer"),i=e.find(".newsletter-box"),o=i.find("input"),a=i.find("button"),r=i.find(".error"),s=!0;a.tap(function(t){t.preventDefault(),s&&i.submit()}),i.on("submit",function(e){if(e.preventDefault(),s){var i=o.val();if(!i)return void r.text("You need to insert your email address.").show();if(!n.isValidEmail(i))return void r.text("You need to insert a valid email address.").show();r.empty().hide(),$.ajax({method:"POST",url:"/t/subscribe",data:{email:i}}).then(function(){a.addClass("success"),s=!1,t.onNewsletterSubscribe&&t.onNewsletterSubscribe()},function(t){r.text("Sorry, we could not subscribe you at this time, please try again later.").show()})}}),o.tap(function(){$(this).focus()}),e.find(".social-links").find("a").click(t.onSocialClick)}}},{"./tools":5}],3:[function(t,e,i){var n=t("./upload-form");e.exports={init:function(){var t=$("#navigation"),e=t.find(".search-box"),i=e.find("input");e.find("button").tap(function(t){t.preventDefault(),e.submit()}),e.on("submit",function(t){t.preventDefault();var e=i.val();e&&(window.location="/search?q="+encodeURIComponent(e)+"&page=1")}),i.tap(function(){$(this).focus()}),n.init(),t.find(".upload").tap(function(){n.show()})}}},{"./upload-form":7}],4:[function(t,e,i){e.exports={render:function(t){var e=t.total,i=t.current,n=t.query;if(1===e)return"";var o=[1];3===i||4===i?o.push(-1):i>4&&o.push(0);for(var a=Math.max(i-2,2);a<=Math.min(i+2,e-1);a++)o.push(a);i+3<e?o.push(0):i+1<e&&o.push(-1),a<=e&&o.push(e);var r="",s="?";return n&&(s+="q="+n+"&"),i>1&&(r+='<a class="item prev" href="'+s+"page="+(i-1)+'"><i></i></a>'),o.forEach(function(t){r+=-1===t?'<span class="dots mobile">...</span>':0===t?'<span class="dots">...</span>':t===i?'<span class="item current">'+t+"</span>":1!==t&&t!==e?'<a class="item desktop" href="'+s+"page="+t+'">'+t+"</a>":'<a class="item" href="'+s+"page="+t+'">'+t+"</a>"}),i<e&&(r+='<a class="item next" href="'+s+"page="+(i+1)+'"><i></i></a>'),r}}},{}],5:[function(t,e,i){function n(){var t,e,i,n,o={};if(""!=(t=window.location.search))for(t=decodeURIComponent(t),e=t.substr(1).split("&"),i=0;i<e.length;i++)n=e[i].split("="),o[n[0]]=n[1];return o}function o(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(t)}function a(t,e,i,n){var o=new XMLHttpRequest;o.open("PUT",e),o.onload=function(){200==o.status?i():n("Failed upload!")},o.onerror=n,o.ontimeout=n,o.timeout=3e4,o.send(t)}e.exports={getQueryString:n,isValidEmail:o,uploadFile:a}},{}],6:[function(t,e,i){e.exports={track:function(t,e,i){window.ga&&ga("send",{hitType:"event",eventCategory:t,eventAction:e,eventLabel:i})}}},{}],7:[function(t,e,i){function n(){o.velocity("fadeOut",500),a.velocity({opacity:[0,1],translateY:[0,50]},{display:"none",duration:500,easing:[.4,0,0,1],complete:function(){r.attr("style",""),s.hide(),u.addClass("disabled"),l.wrap("<form>").closest("form").get(0).reset(),l.unwrap(),a.find("img").attr("src",""),d.empty()}})}var o,a,r,s,l,u,d,c=t("./tools");e.exports={init:function(){o=$("#overlay"),a=$("#upload-submission"),r=a.find(".form"),$spinner=a.find(".spinner"),s=a.find(".done"),l=$("#fileInput"),u=a.find(".submit"),d=a.find(".error"),l.on("change",function(t){var e=this.files&&this.files[0];if(e){if("image/png"!=e.type)return void d.text("Currently, we only accept PNG images.");var i=new FileReader;i.onload=function(t){a.find("img").attr("src",t.target.result),a.find(".submit").removeClass("disabled"),d.empty()},i.readAsDataURL(e)}}),u.tap(function(){var t=l[0].files&&l[0].files[0];return t?$("#emailInput").val()?c.isValidEmail($("#emailInput").val())?(d.empty(),r.velocity({opacity:0},500),$spinner.velocity({opacity:1,top:[0,200]},{display:"block",duration:500,easing:[.4,0,0,1]}),void $.ajax({method:"GET",url:"/t/upload-sign",data:{"file-type":t.type}}).then(function(e){c.uploadFile(t,e.url,function(){$.ajax({method:"POST",url:"/t/upload",data:{email:$("#emailInput").val(),image:e.fileName}}),$spinner.velocity({opacity:0,top:[-200,0]},{display:"none",duration:500,easing:[.4,0,0,1]}),s.velocity({opacity:1,top:[0,200]},{display:"block",duration:500,easing:[.4,0,0,1],complete:function(){setTimeout(n,500)}})})},function(t){d.text("Upload failed. Please try again."),r.velocity({opacity:1},500),$spinner.velocity("fadeOut",500)})):void d.text("You need to insert a valid email address."):void d.text("You need to insert your email address."):void d.text("You need to select a png image first!")}),o.tap(n),a.find(".close").tap(n)},show:function(){o.velocity("fadeIn",500),a.velocity({opacity:[1,0],translateY:[50,0]},{display:"block",duration:500,easing:[.4,0,0,1]})},hide:n}},{"./tools":5}],8:[function(t,e,i){function n(t,e){var i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("download",e),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}var o=t("./lib/navigation"),a=t("./lib/pagination"),r=t("./lib/footer"),s=t("./lib/tracker"),l=t("./lib/ads");$(function(){function t(){f-=1e3,0===f?(n("/assets/images/"+i+".png",i+".png"),u.hide(),d.show()):(c.text(f/1e3),setTimeout(t,1e3))}if(o.init(),l.init(),r.init({onNewsletterSubscribe:function(){localStorage.setItem("subscribed",!0),s.track("newsletter","subscribe","footer")},onSocialClick:function(){localStorage.setItem("shared",!0),s.track("social","click-"+this.className,"footer")}}),"image"===document.body.className){var e=$("#image");e.find(".image").find("img").on("contextmenu",function(t){t.preventDefault()}),e.find(".meta").find(".download").click(function(){s.track("download","download","image page")})}if("download"===document.body.className){var i=document.body.dataset.id,u=$("#info .description"),d=$("#info .description-after"),c=u.find(".number"),f=11e3;t()}var p=$("#pagination");if(p.length){p=p.eq(0);var m=p.data("pagination");m&&p.append(a.render(m))}})},{"./lib/ads":1,"./lib/footer":2,"./lib/navigation":3,"./lib/pagination":4,"./lib/tracker":6}]},{},[8]);