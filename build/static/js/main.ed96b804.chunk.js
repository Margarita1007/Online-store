(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo2.8d972207.png"},function(e,t,a){e.exports=a.p+"static/media/blackloupe.675687c0.svg"},function(e,t,a){e.exports=a(36)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),r=a(13),n=a(4),m=(a(25),a(3)),i=a(14),s=a.n(i),o=(a(26),function(){var e=Object(l.useState)(0),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(l.useEffect)(function(){var e=localStorage.getItem("cart");if(e){var t=JSON.parse(e);r(t.length)}}),c.a.createElement("div",{className:"header-wrapper"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:s.a,alt:"logo"})),c.a.createElement("nav",{className:"nav"},c.a.createElement("div",{className:"nav-list",id:"myTopnav"},c.a.createElement(n.b,{to:"/",className:"nav-link"},"Home"),c.a.createElement(n.b,{to:"/About",className:"nav-link"},"About"),c.a.createElement(n.b,{to:"/Products",className:"nav-link"},"Products"))),c.a.createElement("div",{className:"cart"},c.a.createElement("img",{className:"img-cart",src:"../../assets/icons/cart.png",alt:"cart"}),c.a.createElement("input",{id:"cart-counter",className:"cart-counter",type:"button",value:a,"data-counter":!0})))}),u=(a(27),a(15)),d=a.n(u),h=function(e){var t="/Products/"+e.id.toString(),a=Object(l.useState)(!1),r=Object(m.a)(a,2),i=r[0],s=r[1],o=Object(l.useState)(0),u=Object(m.a)(o,2),h=u[0],E=u[1];return Object(l.useEffect)(function(){var t=localStorage.getItem("cart");if(t){var a=JSON.parse(t).find(function(t){return t.id===e.id.toString()});a&&(s(!0),E(a.numbers),console.log(a))}}),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card__photo"},c.a.createElement("img",{className:"card__photo_img",src:e.imgsrc,alt:"card"}),c.a.createElement(n.b,{to:t},c.a.createElement("div",{className:"loupe_container"},c.a.createElement("img",{className:"loupe_img",src:d.a})))),c.a.createElement("div",{className:"card__description"},c.a.createElement("p",{className:"card__description_name"},e.name),c.a.createElement("p",{className:"card__description_price"},"$",e.price),i?c.a.createElement("p",{className:"inCart"},"In cart: ",h):c.a.createElement("button",{className:"add"},c.a.createElement("img",{className:"add-img",src:"../../../assets/icons/cart.png"}))))};a(28);var E=[{id:1,article:"card1",name:"Light misty forest",theme:"Nature",modules:3,width:180,height:120,imgsrc:"../../../assets/img/card1.jpeg",price:49.99,stock:3},{id:2,article:"card2",name:"Wolfs",theme:"Nature",modules:3,width:210,height:140,imgsrc:"../../../assets/img/card2.jpg",price:59.99,stock:0},{id:3,article:"card3",name:"Deer on the lake",theme:"Animals",modules:3,width:180,height:120,imgsrc:"../../../assets/img/card3.jpg",price:42.99,stock:1},{id:4,article:"card4",name:"Deer figures",theme:"Animals",modules:1,width:180,height:60,imgsrc:"../../../assets/img/card4.jpg",price:42.99,stock:0},{id:5,article:"card5",name:"\u0421oniferous forest",theme:"Nature",modules:1,width:240,height:60,imgsrc:"../../../assets/img/card5.jpg",price:53.99,stock:3},{id:6,article:"card6",name:"Foggy forest",theme:"Nature",modules:3,width:240,height:120,imgsrc:"../../../assets/img/card6.jpeg",price:57.99,stock:3},{id:7,article:"card7",name:"Spruce forest",theme:"Nature",modules:2,width:180,height:150,imgsrc:"../../../assets/img/card7.jpeg",price:54.99,stock:3},{id:8,article:"card8",name:"Light mistery forest",theme:"Nature",modules:3,width:180,height:120,imgsrc:"../../../assets/img/card8.jpg",price:49.99,stock:3},{id:9,article:"card9",name:"The road in the forest",theme:"Nature",modules:1,width:60,height:100,imgsrc:"../../../assets/img/card9.jpg",price:34.99,stock:3},{id:10,article:"card10",name:"Animals",theme:"Animals",modules:3,width:180,height:100,imgsrc:"../../../assets/img/card10.jpg",price:38.99,stock:3},{id:11,article:"card11",name:"Minimalism",theme:"Minimalism",modules:5,width:120,height:60,imgsrc:"../../../assets/img/card11.jpg",price:35.99,stock:3},{id:12,article:"card12",name:"Green plants",theme:"Minimalism",modules:5,width:180,height:100,imgsrc:"../../../assets/img/card12.jpg",price:37.99,stock:3},{id:13,article:"card13",name:"Travel",theme:"Travel",modules:5,width:150,height:90,imgsrc:"../../../assets/img/card13.jpg",price:41.99,stock:3},{id:14,article:"card14",name:"Greyness",theme:"Minimalism",modules:3,width:180,height:90,imgsrc:"../../../assets/img/card14.jpeg",price:42.99,stock:3},{id:15,article:"card15",name:"Abstraction",theme:"Minimalism",modules:3,width:120,height:60,imgsrc:"../../../assets/img/card15.jpg",price:33.99,stock:3},{id:16,article:"card16",name:"The outline of a deer",theme:"Minimalism",modules:1,width:60,height:90,imgsrc:"../../../assets/img/card16.jpg",price:29.99,stock:3},{id:17,article:"card17",name:"The outline of an owl",theme:"Minimalism",modules:1,width:60,height:90,imgsrc:"../../../assets/img/card17.jpeg",price:29.99,stock:3},{id:18,article:"card18",name:"Dark forest",theme:"Nature",modules:2,width:120,height:90,imgsrc:"../../../assets/img/card18.jpg",price:45.99,stock:3}],p=(a(29),function(){return c.a.createElement("div",{className:"main-filters"},c.a.createElement("div",{className:"search-filter"},c.a.createElement("div",{className:"search-wrapper"},c.a.createElement("form",{className:"search-form"},c.a.createElement("input",{type:"search",id:"search-field",placeholder:"Search...",autoComplete:"off",autoFocus:!0}),c.a.createElement("input",{type:"submit",id:"search-submit",value:"Search"})))),c.a.createElement("div",{className:"range price-filter"},c.a.createElement("legend",{className:"legend legend_price"},"Price"),c.a.createElement("div",{className:"range_price"})),c.a.createElement("fieldset",{className:"theme-filter"},c.a.createElement("legend",null,"Theme"),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"nature",name:"theme"}),c.a.createElement("label",{htmlFor:"nature"},"Nature"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"animals",name:"theme"}),c.a.createElement("label",{htmlFor:"animals"},"Animals"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"minimalism",name:"theme"}),c.a.createElement("label",{htmlFor:"minimalism"},"Minimalism")),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"travel",name:"theme"}),c.a.createElement("label",{htmlFor:"travel"},"Travel"))),c.a.createElement("fieldset",{className:"width-filter"},c.a.createElement("legend",null,"Width"),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"60-width",name:"width"}),c.a.createElement("label",{htmlFor:"60-width"},"60 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"120-width",name:"width"}),c.a.createElement("label",{htmlFor:"120-cm"},"120 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"150-width",name:"width"}),c.a.createElement("label",{htmlFor:"150-cm"},"150 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"180-width",name:"width"}),c.a.createElement("label",{htmlFor:"180-width"},"180 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"210-width",name:"width"}),c.a.createElement("label",{htmlFor:"210-width"},"210 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"240-width",name:"width"}),c.a.createElement("label",{htmlFor:"240-width"},"240 cm"),c.a.createElement("br",null))),c.a.createElement("fieldset",{className:"height-filter"},c.a.createElement("legend",null,"height"),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"60-height",name:"height"}),c.a.createElement("label",{htmlFor:"60-height"},"60 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"90-height",name:"height"}),c.a.createElement("label",{htmlFor:"90-cm"},"90 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"100-height",name:"height"}),c.a.createElement("label",{htmlFor:"100-cm"},"100 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"120-height",name:"height"}),c.a.createElement("label",{htmlFor:"120-cm"},"120 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"140-height",name:"height"}),c.a.createElement("label",{htmlFor:"140-cm"},"140 cm"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"150-height",name:"height"}),c.a.createElement("label",{htmlFor:"150-cm"},"150 cm"),c.a.createElement("br",null))),c.a.createElement("fieldset",{className:"modules-filter"},c.a.createElement("legend",null,"Number of modules"),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"1-modules",name:"modules"}),c.a.createElement("label",{htmlFor:"1-modules"},"1 module"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"2-modules",name:"modules"}),c.a.createElement("label",{htmlFor:"2-modules"},"2 modules"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"3-modules",name:"modules"}),c.a.createElement("label",{htmlFor:"3-modules"},"3 modules"),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"5-modules",name:"modules"}),c.a.createElement("label",{htmlFor:"5-modules"},"5 modules"),c.a.createElement("br",null))),c.a.createElement("div",{className:"div_clear_all hidden"},c.a.createElement("button",{className:"clear_all"},"Clear LS")),c.a.createElement("div",{className:"div_clear_filters"},c.a.createElement("button",{className:"clear_filters"},"Clear filters")),c.a.createElement("div",{className:"div_clear_cart"},c.a.createElement("button",{className:"clear_cart"},"Clear cart")))}),g=a(1),b=(a(30),function(){var e=Object(g.j)().pathname.replace(/[0-9]/g,""),t=Object(g.o)(),a=Number(t.id),l=E.find(function(e){return e.id==a});return l?c.a.createElement("div",{className:"header-title"},c.a.createElement("h3",null,c.a.createElement(n.b,{to:"/"},"Home"),c.a.createElement(n.b,{to:e},e),l.name)):c.a.createElement("div",{className:"header-title"},c.a.createElement("h3",null,c.a.createElement(n.b,{to:"/"},"Home"),c.a.createElement(n.b,{to:e}," ",e)))}),v=(a(31),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement("div",{className:"wrapper-main"},c.a.createElement(p,null),c.a.createElement("div",{className:"main-cards"},function(e){var t=e.map(function(e){return c.a.createElement("div",{className:"card",key:e.id},h(e))});return c.a.createElement(c.a.Fragment,null,t)}(E))))}),f=(a(32),function(){return c.a.createElement("div",{className:"home_wrapper"},c.a.createElement("div",{className:"home_text_block"},c.a.createElement("h1",null,"Design Your ",c.a.createElement("br",null)," Comfort Zone"),c.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias"),c.a.createElement(n.b,{to:"/products"},c.a.createElement("button",{className:"home_button"},"SHOP NOW"))),c.a.createElement("div",{className:"home_img"},c.a.createElement("img",{src:"../../../assets/img/card12.jpg"})))}),N=(a(33),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement("div",{className:"about_wrapper"},c.a.createElement("div",{className:"about_img"},c.a.createElement("img",{src:"../../../assets/img/card16.jpg"})),c.a.createElement("div",{className:"about_text_block"},c.a.createElement("h1",null,"Our story"),c.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste."))))}),k=localStorage.getItem("cart"),_=[];k&&(_=JSON.parse(k));var w={cart:_,filters:{}},j=function(){var e=Object(l.useState)(1),t=Object(m.a)(e,2),a=t[0],r=t[1],n=Object(l.useState)(!1),i=Object(m.a)(n,2),s=i[0],o=i[1],u=Object(l.useState)(0),d=Object(m.a)(u,2),h=(d[0],d[1],Object(g.o)().id);return c.a.createElement("div",{className:"button_container"},c.a.createElement("div",{className:"amount_buttons_container"},c.a.createElement("button",{className:"amount_button",onClick:function(){a>1&&r(a-1)}},"-"),c.a.createElement("h2",null,a),c.a.createElement("button",{className:"amount_button",onClick:function(){r(a+1)}},"+")),c.a.createElement("p",{className:"text_added"},s?"Added to cart":""),c.a.createElement("button",{className:"cart_button",onClick:function(){if(h){o(!0);var e={id:h,numbers:a};w.cart.find(function(e){return e.id===h})?w.cart.forEach(function(e){e.id===h&&(e.numbers+=a)}):w.cart.push(e),localStorage.setItem("cart",JSON.stringify(w.cart));var t=document.getElementById("cart-counter"),l=localStorage.getItem("cart");if(l){var c=JSON.parse(l);t.value=String(c.length)}}}},"ADD TO CART"))},y=(a(34),function(){var e=Object(g.o)().id;if(e){var t=Number(e),a=E.find(function(e){return e.id===t});return a?c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement("div",{className:"product_wrapper"},c.a.createElement("div",{className:"back"},c.a.createElement(n.b,{to:"/Products"},c.a.createElement("button",{className:"back_button"},"BACK TO PRODUCTS"))),c.a.createElement("div",{className:"product_content_wrapper"},c.a.createElement("div",{className:"product_img"},c.a.createElement("img",{src:a.imgsrc,alt:a.article})),c.a.createElement("div",{className:"product__content"},c.a.createElement("h1",{className:"product_name"},a.name),c.a.createElement("h3",{className:"product_price"}," $",a.price),c.a.createElement("p",{className:"product_info"}," ",c.a.createElement("b",null,"Theme:")," ",a.theme," "),c.a.createElement("p",{className:"product_info"}," ",c.a.createElement("b",null,"Number of modules:")," ",a.modules," "),c.a.createElement("p",{className:"product_info"}," ",c.a.createElement("b",null,"Width: ")," ",a.width," cm "),c.a.createElement("p",{className:"product_info"}," ",c.a.createElement("b",null,"Height: ")," ",a.height," cm "),c.a.createElement("p",{className:"product_info"}," ",c.a.createElement("b",null,"Stock availability: ")," ",a.stock),c.a.createElement("hr",null),c.a.createElement(j,null))))):c.a.createElement("h3",null,"Not found")}return c.a.createElement(c.a.Fragment,null,"Not found id = ",e)}),x=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o,null),c.a.createElement("main",null,c.a.createElement(g.c,null,c.a.createElement(g.a,{path:"Products",element:c.a.createElement(v,null)}),c.a.createElement(g.a,{path:"/",element:c.a.createElement(f,null)}),c.a.createElement(g.a,{path:"About",element:c.a.createElement(N,null)}),c.a.createElement(g.a,{path:"Products/:id",element:c.a.createElement(y,null)}))))},O=(a(35),document.getElementById("root"));Object(r.createRoot)(O).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(n.a,{basename:"/"},c.a.createElement(x,null))))}],[[16,1,2]]]);
//# sourceMappingURL=main.ed96b804.chunk.js.map