(this.webpackJsonpport2jav2ca=this.webpackJsonpport2jav2ca||[]).push([[0],{38:function(e,t,a){},49:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(23),r=a.n(c),s=(a(49),a(38),a(25)),o=a(44),j=a(20),h=a(6),d=a(14),l=[{heading:"This is a testcard for Noroff it is number",id:"1",made:"By Michael",time:"an hour ago"},{heading:"This is a testcard for Noroff it is number",id:"2",made:"By Michael",time:"43 minutes ago"},{heading:"This is a testcard for Noroff it is number",id:"3",made:"By Michael",time:"an hour ago"},{heading:"This is a testcard for Noroff it is number",id:"4",made:"By Michael",time:"43 minutes ago"},{heading:"This is a testcard for Noroff it is number",id:"5",made:"By Michael",time:"an hour ago"},{heading:"This is a testcard for Noroff it is number",id:"6",made:"By Michael",time:"43 minutes ago"},{heading:"This is a testcard for Noroff it is number",id:"7",made:"By Michael",time:"an hour ago"},{heading:"This is a testcard for Noroff it is number",id:"8",made:"By Michael",time:"43 minutes ago"},{heading:"This is a testcard for Noroff it is number",id:"9",made:"By Michael",time:"an hour ago"}],b=a(1);var m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ol",{children:l.map((function(e,t){return Object(b.jsx)("div",{className:"domcard",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[" ",e.heading,", ",e.id]}),Object(b.jsx)("h4",{children:e.made}),Object(b.jsx)("h6",{children:e.time}),Object(b.jsx)("button",{children:"View on site"})]},e.id)},t)}))})})},u=a(12),O=a(13),x=a(18),f=a(17),v=a(21),p=a(26);var g=function(e){var t=e.content;return Object(b.jsx)(p.a,{fluid:!0,children:Object(b.jsx)("h1",{children:t})})},y=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).state={error:null,isLoaded:!1,amiibo:[]},i}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.amiiboapi.com/api/amiibo/?name=mario").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,amiibo:t.amiibo})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,i=e.amiibo;return t?Object(b.jsxs)("div",{children:["Error: ",t.message]}):a?Object(b.jsxs)(d.a,{children:[Object(b.jsx)(g,{content:"Ajax Mario!"}),i.map((function(e){return Object(b.jsxs)(v.a,{children:[Object(b.jsx)(v.a.Img,{variant:"top",src:e.image,alt:"mario"}),Object(b.jsxs)(v.a.Body,{children:[Object(b.jsx)(v.a.Title,{children:Object(b.jsx)("p",{children:"amiiboSeries:"})}),Object(b.jsx)(v.a.Title,{children:Object(b.jsx)("h4",{children:e.amiiboSeries})}),Object(b.jsx)(v.a.Title,{children:Object(b.jsx)("p",{children:"Character:"})}),Object(b.jsx)(v.a.Title,{children:Object(b.jsx)("h4",{children:e.character})})]})]},e.amiiboSeries)}))]}):Object(b.jsx)("div",{children:"Wait a sec...:)"})}}]),a}(n.a.Component),k=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).state={data:[]},i}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){var a=JSON.parse(t.responseText);console.log(a),e.setState({data:a.amiibo})})),t.open("GET","http://www.amiiboapi.com/api/amiibo/?name=mario"),t.send()}},{key:"render",value:function(){var e=this.state.data;return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(g,{content:"Vanilla Mario!"}),e.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:e.image,alt:"mario"}),Object(b.jsxs)("h4",{children:[e.character," in ",e.amiiboSeries]})]},e.amiiboSeries)}))]})}}]),a}(i.Component),N=a(35),T=a.n(N),w=a(40),M=a(66),S=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).handleButtonClick=function(){(function(){var e=Object(w.a)(T.a.mark((function e(){var t,a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.amiiboapi.com/api/amiibo/?name=mario");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.amiibo,console.log(n),i.setState({amiibo:n});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},i.state={amiibo:[]},i}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state.amiibo;return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(g,{content:"Promise Mario!"}),e.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:e.image,alt:"mario"}),Object(b.jsxs)("h4",{children:[e.character," in ",e.amiiboSeries]})]},e.amiiboSeries)})),Object(b.jsx)(M.a,{onClick:this.handleButtonClick,className:"btn",children:"FETCH MARIOs"})]})}}]),a}(n.a.Component);var C=function(){var e=new(function(){function e(t){Object(u.a)(this,e),this.fruit=t}return Object(O.a)(e,[{key:"myFruit",value:function(){return this.fruit+" is my favorite fruit!"}}]),e}())("Pineapple");console.log(e.myFruit());var t,a=e.myFruit();t=["pinapples",11,!0],console.log(t);var i=" True or False: Would I eat "+t[1]+" "+t[0]+" in one sitting? ",n=t[2]+".";return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"yellow",children:Object(b.jsx)("h1",{children:a})}),Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:i})}),Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:" \u2193 "})}),Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:n})})]})},A=a.p+"static/media/sky.074d1d89.png",B=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this.refs.canvas,t=e.getContext("2d"),a=this.refs.image;a.onload=function(){var i=new Date;t.drawImage(a,0,0),t.font="30px Verdana",t.strokeStyle="#52ce90",t.textAlign="center",t.strokeText(i,e.width/2,e.height/2),t.stroke();var n=0;e.height;setInterval((function(){t.clearRect(0,0,e.width,e.height),t.strokeText(i,n,e.height/2),t.stroke(),(n+=5)>t.canvas.width&&(n=0)}),50)}}},{key:"render",value:function(){return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p.a,{children:Object(b.jsx)("canvas",{ref:"canvas",width:600,height:100})}),Object(b.jsx)("img",{ref:"image",src:A,className:"sky",alt:"blue sky mountain range"})]})}}]),a}(n.a.Component);var F=function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(s.a,{bg:"transparent",variant:"light",expand:"md",className:"ml-auto",children:[Object(b.jsx)(s.a.Brand,{children:"JAVASCRIPT 2 CA "}),Object(b.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(s.a.Collapse,{id:"basic-navbar-nav",className:"ml-auto",children:Object(b.jsxs)(o.a,{className:"ml-auto",children:[Object(b.jsx)(j.b,{to:"/cards",exact:!0,className:"nav-link",children:"Advanced DOM CARDS"}),Object(b.jsx)(j.b,{to:"/ajax",className:"nav-link",children:"AJAX"}),Object(b.jsx)(j.b,{to:"/promise",className:"nav-link",children:"PROMISE"}),Object(b.jsx)(j.b,{to:"/vanilla",className:"nav-link",children:"VANILLA"}),Object(b.jsx)(j.b,{to:"/canvas",className:"nav-link",children:"CANVAS"}),Object(b.jsx)(j.b,{to:"/typescript",className:"nav-link",children:"TYPESCRIPT"})]})})]}),Object(b.jsx)(d.a,{children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/cards",exact:!0,component:m}),Object(b.jsx)(h.a,{path:"/ajax",exact:!0,component:y}),Object(b.jsx)(h.a,{path:"/promise",exact:!0,component:S}),Object(b.jsx)(h.a,{path:"/vanilla",exact:!0,component:k}),Object(b.jsx)(h.a,{path:"/canvas",exact:!0,component:B}),Object(b.jsx)(h.a,{path:"/typescript",exact:!0,component:C})]})})]})};var I=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(F,{})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),L()}},[[63,1,2]]]);
//# sourceMappingURL=main.a88f7200.chunk.js.map