(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),c=n(19),i=n.n(c),o=(n(28),n(7));n(29);var d=!1;function l(){window.innerWidth<=900&&(d?(document.getElementById("navbarWrapper").style.height="9vh",document.getElementById("navbarOpener").innerHTML="...",document.getElementById("navbarOpener").style.transform="rotate(0deg)",document.getElementById("navbarOpener").style.top="-0.45em"):(document.getElementById("navbarWrapper").style.height="100vh",document.getElementById("navbarOpener").innerHTML="+",document.getElementById("navbarOpener").style.transform="rotate(45deg)",document.getElementById("navbarOpener").style.top="-0.15em"),d=!d)}var u=function(){return Object(s.jsxs)("div",{id:"navbarWrapper",children:[Object(s.jsx)("div",{id:"navbarOpener",onClick:l,children:"..."}),Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("div",{id:"navLogo",children:"Bubbles"})}),Object(s.jsx)("div",{id:"navbarBreaker"}),Object(s.jsxs)("div",{id:"navList",onClick:l,children:[Object(s.jsx)("a",{href:"https://github.com/ishaanmehta4/bubbles",target:"_blank",children:Object(s.jsx)("div",{id:"navJoin",children:"GitHub"})}),Object(s.jsx)("a",{href:"/#homegrid2",children:Object(s.jsx)("div",{id:"navJoin",children:"Start your own Podcast"})}),Object(s.jsx)(o.b,{to:"/favourites",children:Object(s.jsx)("div",{id:"navStarred",children:"Favourites"})})]})]})},j=(n(35),n.p+"static/media/mockup1.ead28266.png"),b=n.p+"static/media/bubblet.67675e0d.png",p=n.p+"static/media/illustration.84dd371a.jpg";var h=function(){return document.title="Home | Bubbles",Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{id:"homegrid",children:[Object(s.jsx)("div",{id:"bubblecon",children:Object(s.jsx)("img",{src:b,alt:""})}),Object(s.jsxs)("div",{id:"herotext",children:[Object(s.jsx)("span",{id:"sitename",children:"Bubbles"}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{id:"podeasy",children:["Podcasts made ",Object(s.jsx)("b",{children:"easy"}),"."]}),Object(s.jsx)("div",{id:"joinintro",children:"Start your own podcast within 30 seconds, just send 'Join' to our facebook page."}),Object(s.jsx)("a",{href:"https://m.me/bubblespodcasts",target:"_blank",children:Object(s.jsx)("div",{id:"joinbutton",className:"homepagebutton",children:"Join Now"})}),Object(s.jsx)("a",{href:"#homegrid2",children:Object(s.jsx)("div",{id:"knowmorebutton",className:"homepagebutton",children:"Know More"})})]}),Object(s.jsx)("div",{id:"mockupimgcon",children:Object(s.jsx)("img",{src:j,alt:"",id:"mockupimg"})})]}),Object(s.jsxs)("div",{id:"homegrid2",children:[Object(s.jsxs)("div",{className:"panel",id:"imgpanel",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("a",{href:"https://m.me/bubblespodcasts",target:"_blank",children:Object(s.jsx)("div",{id:"createaccountbutton",className:"homepagebutton",children:"Open facebook page and signup"})})]}),Object(s.jsxs)("div",{className:"panel",id:"textpanel",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("em",{children:"Bubbles"})," is probably the easiest way to create and manage podcasts (or audio-blogs). You don't even need to visit the website to add new podcasts, it all can be done by using Facebook messenger."]}),Object(s.jsx)("br",{}),Object(s.jsx)("h3",{children:"How does it work?"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["You visit our ",Object(s.jsx)("a",{href:"https://fb.me/bubblespodcasts",traget:"_blank",children:"Facebook page"})," and send a message saying ",Object(s.jsx)("b",{children:"'Join'"})," to sign up."]}),Object(s.jsx)("li",{children:"That's it. Your Bubbles blog is ready to use. You will be guided on how to manage your account."}),Object(s.jsx)("li",{children:"Adding content to your new blog is as simple as sending voicenotes on Messenger. The voicenotes or audio attachments you send will automatically be added to your blog."}),Object(s.jsx)("li",{children:"Your regular listeners can also 'star' your profile, and they would be notified about any new audios you upload."})]})]})]}),Object(s.jsxs)("div",{id:"homeFooter",children:[Object(s.jsxs)("span",{children:["Developed and maintained by ",Object(s.jsx)("a",{href:"https://instagram.com/1shaan_/",target:"_blank",children:"Ishaan Mehta"}),"."]}),Object(s.jsx)("a",{href:"https://www.linkedin.com/in/ishaanmehta4/",target:"_blank",children:Object(s.jsx)("span",{children:"Get in touch"})}),Object(s.jsx)("a",{href:"https://github.com/ishaanmehta4/bubbles/",target:"_blank",children:Object(s.jsx)("span",{children:"View on GitHub"})})]})]})},m=n(2),v=n(4),O=n.n(v),f=n(9),x=n(10);n(37);var g=function(e){var t="";return"audio"===e.type?t=Object(s.jsx)("div",{className:"mediaPlayer audioPlayer",children:Object(s.jsxs)("audio",{controls:!0,children:[Object(s.jsx)("source",{src:e.url,type:"audio/mp4"}),"Your browser does not support the audio element."]})}):"video"===e.type?t=Object(s.jsx)("div",{className:"mediaPlayer videoPlayer",children:Object(s.jsxs)("video",{controls:!0,children:[Object(s.jsx)("source",{src:e.url,type:"video/mp4"}),"Your browser does not support the audio element."]})}):"youtube"===e.type&&(t=Object(s.jsx)("div",{className:"mediaPlayer videoPlayer",children:Object(s.jsx)("iframe",{width:"",height:"",src:"https://www.youtube.com/embed/"+e.url,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})),t},y=(n(38),n(21)),w=n.n(y);var k=function(e){var t=e.postData.createdAt,n=Object(s.jsx)("div",{children:Object(s.jsx)(o.b,{to:"/posts/".concat(e.postData.username,"/"),children:Object(s.jsxs)("div",{className:"postUsername",children:["@",e.postData.username]})})});return Object(s.jsxs)("div",{className:"postCardCon",children:["favourites"==e.referrer&&n,Object(s.jsx)(o.b,{to:"/posts/".concat(e.postData.username,"/").concat(e.postData.slug),children:Object(s.jsx)("div",{className:"postTitle",children:e.postData.title})}),Object(s.jsxs)("div",{className:"postTimeStamp",children:[Object(s.jsx)("i",{className:"lni lni-calendar"}),w()(t).fromNow()]}),Object(s.jsx)(g,{url:e.postData.url,type:e.postData.type})]})};n(40);var B=function(){document.title="Favourites | Bubbles";var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],c=localStorage.getItem("favourites")||"";return Object(a.useEffect)(Object(f.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/fav/"+c);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.map((function(e){return Object(s.jsx)(k,{postData:e,referrer:"favourites"})})),r(a);case 8:case"end":return e.stop()}}),e)}))),[]),Object(s.jsx)("div",{style:{paddingTop:"10vh",height:"100vh"},id:"favouritesContainer",children:Object(s.jsx)("div",{children:n})})},P=n(22),S=(n(41),""),C=0;var N=!1,I=0;function E(e){"init"==e&&++I%2==0||(N?(document.querySelector("#favouriteButtonCon > span").innerHTML='<i class="lni lni-checkmark"></i>Already favourited',document.getElementById("favouriteButtonCon").classList.add("favourited")):(document.getElementById("favouriteButtonCon").classList.remove("favourited"),document.querySelector("#favouriteButtonCon > span").innerHTML='<i class="lni lni-star"></i>Add to favourites'))}function D(){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(O.a.mark((function e(){var t,n,s,a,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==(t=(t=localStorage.getItem("favourites")||"")&&t.split(","))&&(t=[]),void 0!==t.find((function(e){return e===S}))){C--,document.getElementById("favCountSpan").innerHTML=C,n=[],s=0,a=Object(P.a)(t);try{for(a.s();!(r=a.n()).done;)(c=r.value)!==S&&(n[s]=c,s++)}catch(i){a.e(i)}finally{a.f()}localStorage.setItem("favourites",n.toString())}else C++,document.getElementById("favCountSpan").innerHTML=C,"0"!==t&&""!==t||(t=[]),t.push(S),localStorage.setItem("favourites",t.toString());return N=!N,E("handler"),e.next=9,fetch("/api/setfavourite/".concat(S,"/").concat(C));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){var e=localStorage.getItem("favourites")||"";""!=e?(e=e.split(",")).find((function(e){return e===S}))&&(N=!0,E("init")):localStorage.setItem("favourites","")}var F=function(e){return S=e.user.username,C=e.user.favouritesCount,setTimeout(L,1e3),Object(s.jsxs)("div",{id:"profilePanelGrid",children:[Object(s.jsxs)("div",{id:"profileTopPanel",children:[Object(s.jsx)("div",{id:"profilePictureCon",children:Object(s.jsx)("img",{src:e.user.profilePicture})}),Object(s.jsxs)(o.b,{to:"/posts/"+e.user.username,children:[Object(s.jsx)("div",{id:"profileName",children:e.user.name}),Object(s.jsxs)("div",{id:"username",children:["@",e.user.username]})]})]}),Object(s.jsx)("div",{id:"favouriteButtonCon",className:"",onClick:D,children:Object(s.jsxs)("span",{children:[Object(s.jsx)("i",{className:"lni lni-star"}),"Add to favourites"]})}),Object(s.jsxs)("div",{className:"bottomPanelData",children:[Object(s.jsx)("i",{className:"lni lni-mic"}),e.user.postCount," Uploads"]}),Object(s.jsxs)("div",{className:"bottomPanelData",children:[Object(s.jsx)("i",{className:"lni lni-star-filled"}),"Favourited by ",Object(s.jsx)("span",{id:"favCountSpan",children:C})," users"]})]})};n(42);var H=function(e){var t=Object(m.f)().username;document.title="@".concat(t," | Bubbles");var n=Object(a.useState)({}),r=Object(x.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)([]),d=Object(x.a)(o,2),l=d[0],u=d[1],j=Object(s.jsx)("h2",{style:{padding:"2em"},id:"profilePlaceholder",children:"User does not exist"});return c.username&&(j=Object(s.jsx)(F,{user:c})),Object(a.useEffect)(Object(f.a)(O.a.mark((function e(){var n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/profile/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,i(s);case 7:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(f.a)(O.a.mark((function e(){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/allposts/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=a.map((function(e){return Object(s.jsx)(k,{postData:e,referrer:"profile"})})),u(r);case 8:case"end":return e.stop()}}),e)}))),[]),Object(s.jsxs)("div",{id:"profilePageGrid",children:[Object(s.jsx)("div",{id:"profilePanelCon",children:j}),Object(s.jsx)("div",{id:"postListCon",children:l})]})};n(43);var M=function(e){var t=Object(m.f)(),n=t.username,r=t.slug,c=Object(a.useState)({}),i=Object(x.a)(c,2),o=i[0],d=i[1],l=Object(a.useState)({}),u=Object(x.a)(l,2),j=u[0],b=u[1],p=Object(s.jsx)("h2",{style:{padding:"2em"}});o.username&&(p=Object(s.jsx)(F,{user:o}));var h=Object(s.jsx)("h2",{style:{padding:"2em"},id:"profilePlaceholder",children:"Post does not exist"});return j.username&&(h=Object(s.jsx)(k,{postData:j,referrer:"post"})),document.title="".concat(j.title||"Podcasts "," | Post on Bubbles"),Object(a.useEffect)(Object(f.a)(O.a.mark((function e(){var t,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/post/".concat(n,"/").concat(r,"/"));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,b(s);case 7:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(f.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/profile/"+j.username);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)}))),[j]),Object(s.jsxs)("div",{id:"profilePageGrid",children:[Object(s.jsx)("div",{id:"profilePanelCon",children:p}),Object(s.jsx)("div",{id:"postListCon",children:h})]})};var _=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(u,{}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{exact:!0,path:"/",component:h}),Object(s.jsx)(m.a,{exact:!0,path:"/favourites",component:B}),Object(s.jsx)(m.a,{exact:!0,path:"/posts/:username",component:H}),Object(s.jsx)(m.a,{exact:!0,path:"/posts/:username/:slug",component:M})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),J()}},[[44,1,2]]]);
//# sourceMappingURL=main.9deee9b7.chunk.js.map