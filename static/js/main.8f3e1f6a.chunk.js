(this["webpackJsonpvideo-store-consumer"]=this["webpackJsonpvideo-store-consumer"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/char_vic_v2.f2bdc132.jpg"},52:function(e,t,a){e.exports=a(90)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(13),l=a.n(c),o=(a(57),a(42)),i=a(43),r=a(48),m=a(47),u=a(5),d=(a(58),function(e){return n.a.createElement("button",{className:"Movie-name-button",onClick:function(){e.onClickCallBack(e.movie),console.log(e.movie)}},e.movie.title)}),p=(a(59),a(17)),v=function(e){var t=Object(s.useState)([]),a=Object(u.a)(t,2),c=a[0],l=a[1];Object(s.useEffect)((function(){p.get("https://moviestar13.herokuapp.com/movies/").then((function(e){l(e.data)}))}),[]);var o=c.map((function(t){return n.a.createElement(d,{key:t.id,movie:t,onClickCallBack:e.setSelectedMovieCallBack})}));return n.a.createElement("div",{className:"MovieList"},n.a.createElement("h3",null,"Movie List:"),o)},h=(a(77),function(e){return n.a.createElement("button",{className:"Customer-name-button",onClick:function(){e.setSelectedCustomerCallBack(e.customer),console.log(e.customer)}},e.customer.name)}),f=(a(78),a(17)),E=function(e){var t=Object(s.useState)([]),a=Object(u.a)(t,2),c=a[0],l=a[1];Object(s.useEffect)((function(){f.get("https://moviestar13.herokuapp.com/customers/").then((function(e){l(e.data)}))}),[]);var o=c.map((function(t){return n.a.createElement(h,{key:t.id,customer:t,setSelectedCustomerCallBack:e.setSelectedCustomerCallBack})}));return n.a.createElement("div",{className:"CustomerList"},n.a.createElement("h3",null,"Customer List:"),o)},g=a(17),b=function(e){var t=Object(s.useState)({}),a=Object(u.a)(t,2),c=a[0],l=a[1];return Object(s.useEffect)((function(){void 0!=c.title&&g.post("https://moviestar13.herokuapp.com/add/",{external_id:c.external_id,title:c.title,image_url:c.image_url,overview:c.overview,release_date:c.release_date}).then((function(t){e.setDisplayMessage({message:"Successfully Added Movie "+c.title,severity:"success"}),console.log("Successfully Added Movie: "+c.title),console.log(t.data)})).catch((function(t){e.setDisplayMessage({message:"Failed to add movie "+c.title,severity:"error"}),console.log(t.response.data.errors),console.log("FAILED to add new movie to library!")}))}),[c]),n.a.createElement("button",{onClick:function(t){t.preventDefault(),l(e.movie)},className:"MainButton",id:"Hotpink"},"Add Movie to Library")},y=(a(79),function(e){return e.movie.title?n.a.createElement("div",{className:"Search-detail-movie-container"},n.a.createElement("h3",null,"Movie Details:"),n.a.createElement("p",null,n.a.createElement("span",{className:"Search-detail-movie-details"},"Movie: "),e.movie.title,", ",n.a.createElement("span",{className:"Search-detail-movie-details"},"Release Date: "),e.movie.release_date),n.a.createElement("p",null,n.a.createElement("span",{className:"Search-detail-movie-details"},"Overview: ")," ",e.movie.overview),n.a.createElement("img",{src:e.movie.image_url,alt:"alt"})):null}),C=(a(80),a(17)),k=function(e){var t=Object(s.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(s.useState)(""),i=Object(u.a)(o,2),r=i[0],m=i[1],p=Object(s.useState)([]),v=Object(u.a)(p,2),h=v[0],f=v[1];Object(s.useEffect)((function(){C.get("https://moviestar13.herokuapp.com/movies?query="+r).then((function(e){f(e.data)}))}),[r]);var E=Object(s.useState)([]),g=Object(u.a)(E,2),k=g[0],M=g[1],S=function(e){M(e)},N=h.map((function(e){return n.a.createElement(d,{key:e.id,movie:e,onClickCallBack:S})}));return n.a.createElement("div",{className:"Search"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(c)}},n.a.createElement("input",{className:"Searchbar",type:"text",onChange:function(e){var t,a,s=(t=e.target.value,a=Object(u.a)(t,1),e.target.name=a[0],t);l(s)},name:"title",placeholder:"Search movie title",value:c}),n.a.createElement("div",null,n.a.createElement("input",{type:"submit",value:"Submit Movie Search",className:"MainButton"}))),h&&n.a.createElement("h4",null,"Results"),N,n.a.createElement(y,{movie:k}),n.a.createElement(b,{movie:k,setDisplayMessage:e.setDisplayMessage}))},M=(a(81),a(25)),S=a.n(M),N=a(17),O=function(e){var t=Object(s.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(s.useState)({movie:"",customer:""}),i=Object(u.a)(o,2),r=i[0],m=i[1];return Object(s.useEffect)((function(){if(""!=r.movie){var t=new Date;t.setDate(t.getDate()+7),N.post("https://moviestar13.herokuapp.com/rentals/"+r.movie+"/check-out",{customer_id:r.customer,due_date:t}).then((function(a){l(e.customer.name+" checked out: "+r.movie+"! Due Date "+S()(t).format("LL")),e.setDisplayMessage({message:e.customer.name+" Successfully Checked Out Movie "+r.movie,severity:"success"}),console.log("Successfully Checked Out Movie"+r.movie)})).catch((function(t){e.setDisplayMessage({message:"Failed to check out movie",severity:"error"}),console.log("FAILED ON API CALL")}))}}),[r]),n.a.createElement("span",null,n.a.createElement("button",{className:"Checkout-checkIn-checkOut MainButton",onClick:function(t){t.preventDefault(),m({movie:e.movie,customer:e.customer.id})}},"Check Out Movie"),n.a.createElement("p",null,c))},A=(a(83),a(17)),j=function(e){var t=Object(s.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(s.useState)({movie:"",customer:""}),i=Object(u.a)(o,2),r=i[0],m=i[1];return Object(s.useEffect)((function(){""!=r.movie&&A.post("https://moviestar13.herokuapp.com/rentals/"+r.movie+"/return",{customer_id:r.customer}).then((function(t){l(e.customer.name+" returned "+r.movie+" !"),e.setDisplayMessage({message:e.customer.name+" Successfully Returned Movie "+r.movie,severity:"success"}),console.log("Successfully Returned Movie"+r.movie),console.log(t.data)})).catch((function(t){e.setDisplayMessage({message:"Failed to return movie",severity:"error"}),console.log(t.response.data.errors),console.log("FAILED ON API CALL")}))}),[r]),n.a.createElement("span",null,n.a.createElement("button",{className:"Return-checkIn-checkOut MainButton",onClick:function(t){t.preventDefault(),m({movie:e.movie,customer:e.customer.id})}},"Return Movie"),n.a.createElement("p",null,c))},w=(a(84),a(44)),D=a.n(w),x=a(110),L=a(111),_={alert:{left:"0",pointerEvents:"none",position:"fixed",top:0,width:"100%",zIndex:"1500"},form:{alignItems:"center",backgroundColor:"#fff",borderRadius:"5px",boxShadow:"0 10px 15px 0 #ccc",display:"flex",flexDirection:"column",justifyContent:"space-around",width:"400px",height:"300px",margin:"0 auto",padding:"50px 0"},input:{width:"200px"},main:{backgroundColor:"#eef",height:"100vh",padding:"80px 20px"},text:{fontSize:"1.2rem",fontWeight:"700",marginBottom:"20px"}},B=function(e){var t=Object(s.useState)({severity:"",message:""}),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(s.useState)(null),i=Object(u.a)(o,2),r=i[0],m=i[1];Object(s.useEffect)((function(){d(e.displayMessage)}),[e.displayMessage]);var d=function(e){null!==e&&""!=e.message&&(m(!0),l(e),setTimeout((function(){m(!1)}),5e3))};return n.a.createElement(L.a,{in:r,timeout:{enter:300,exit:1e3}},n.a.createElement(x.a,{style:_.alert,severity:c.severity},c.message))},R=a(45),I=a(46),F=a(20),W=a(4),P=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={selectedMovie:{},selectedCustomer:{},displayMessage:null},s}return Object(i.a)(a,[{key:"setSelectedMovie",value:function(e){this.setState({selectedMovie:e})}},{key:"setSelectedCustomer",value:function(e){this.setState({selectedCustomer:e})}},{key:"onClearSelection",value:function(){this.setState({selectedMovie:{}}),this.setState({selectedCustomer:{}})}},{key:"setDisplayMessage",value:function(e){console.log("in setDisplayMessage\n"+e),this.setState({displayMessage:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Movie Star Rentals")),n.a.createElement(F.a,null,n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"App-nav-link-container"},n.a.createElement(F.b,{className:"App-nav-link",to:"/"},"Home")),n.a.createElement("li",{className:"App-nav-link-container"},n.a.createElement(F.b,{className:"App-nav-link",to:"/library"},"Library")),n.a.createElement("li",{className:"App-nav-link-container"},n.a.createElement(F.b,{className:"App-nav-link",to:"/search"},"Search")),n.a.createElement("li",{className:"App-nav-link-container"},n.a.createElement(F.b,{className:"App-nav-link",to:"/customers"},"Customers")))),n.a.createElement(B,{displayMessage:this.state.displayMessage}),n.a.createElement("div",{className:"CheckoutReturn"},n.a.createElement(O,{movie:this.state.selectedMovie.title,customer:this.state.selectedCustomer,setDisplayMessage:this.setDisplayMessage.bind(this)}),n.a.createElement(j,{movie:this.state.selectedMovie.title,customer:this.state.selectedCustomer,setDisplayMessage:this.setDisplayMessage.bind(this)}),n.a.createElement("button",{className:"MainButton",onClick:this.onClearSelection.bind(this)},"Clear Movie/Customer"),n.a.createElement("p",{className:"ShowSelected"},"  ",n.a.createElement(R.a,null),"  Movie: ",this.state.selectedMovie.title),n.a.createElement("p",{className:"ShowSelected"}," ",n.a.createElement(I.a,null)," Customer: ",this.state.selectedCustomer.name)),n.a.createElement(W.c,null,n.a.createElement(W.a,{exact:!0,path:"/"},n.a.createElement("div",{className:"logo"},n.a.createElement("img",{src:D.a,alt:"girl in red and purple sunglasses"}))),n.a.createElement(W.a,{path:"/library"},n.a.createElement(v,{setSelectedMovieCallBack:this.setSelectedMovie.bind(this)})),n.a.createElement(W.a,{path:"/search"},n.a.createElement(k,{setDisplayMessage:this.setDisplayMessage.bind(this)})),n.a.createElement(W.a,{path:"/customers"},n.a.createElement(E,{setSelectedCustomerCallBack:this.setSelectedCustomer.bind(this)})))),n.a.createElement("div",{className:"App-selections"},n.a.createElement("div",{className:"App-selected"},n.a.createElement(y,{movie:this.state.selectedMovie})),this.state.selectedCustomer.name&&n.a.createElement("div",{className:"App-selected-customer-container App-selected "},n.a.createElement("h3",{className:"App-customer-detail-title"},"Customer Details:"),n.a.createElement("p",null,n.a.createElement("span",{className:"App-customer-detail"},"Name:")," ",this.state.selectedCustomer.name,",  ",n.a.createElement("span",{className:"App-customer-detail"},"Registered At: ")," ",S()(this.state.selectedCustomer.registered_at).format("LL")),n.a.createElement("ul",null,n.a.createElement("li",{className:"App-list-style"},n.a.createElement("span",{className:"App-customer-detail"},"Address: ")," ",this.state.selectedCustomer.address),n.a.createElement("li",{className:"App-list-style"},n.a.createElement("span",{className:"App-customer-detail"},"City: ")," ",this.state.selectedCustomer.city),n.a.createElement("li",{className:"App-list-style"},n.a.createElement("span",{className:"App-customer-detail"},"State: ")," ",this.state.selectedCustomer.state),n.a.createElement("li",{className:"App-list-style"},n.a.createElement("span",{className:"App-customer-detail"},"Postal Code: ")," ",this.state.selectedCustomer.postal_code),n.a.createElement("li",{className:"App-list-style"},n.a.createElement("span",{className:"App-customer-detail"},"Phone: "),"Phone: ",this.state.selectedCustomer.phone),n.a.createElement("li",{className:"App-list-style"},n.a.createElement("span",{className:"App-customer-detail"},"Account Credit: ")," ",this.state.selectedCustomer.account_credit),n.a.createElement("li",{className:"App-list-style"},n.a.createElement("span",{className:"App-customer-detail"},"Movies Checked Out: ")," ",this.state.selectedCustomer.movies_checked_out_count)))))}}]),a}(s.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(n.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/video-store-consumer",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/video-store-consumer","/service-worker.js");T?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):z(e)}))}}()}},[[52,1,2]]]);
//# sourceMappingURL=main.8f3e1f6a.chunk.js.map