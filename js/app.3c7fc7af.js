(function(){"use strict";var t={3003:function(t,e,i){var o=i(9242),r=i(2483),n=i(3396);function a(t,e,i,o,r,a){const c=(0,n.up)("product-item");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.products,(t=>((0,n.wg)(),(0,n.j4)(c,{key:t.id,id:t.id,title:t.title,image:t.image,description:t.description,price:t.price},null,8,["id","title","image","description","price"])))),128))])])}var c=i(7139);const s={class:"product"},u={class:"product__data"},d={class:"product__image"},l=["src","alt"],p={class:"product__text"},m={class:"product__actions"};function _(t,e,i,o,r,a){const _=(0,n.up)("base-badge");return(0,n.wg)(),(0,n.iD)("li",s,[(0,n._)("div",u,[(0,n._)("div",d,[(0,n._)("img",{src:i.image,alt:i.title},null,8,l)]),(0,n._)("div",p,[(0,n._)("h3",null,(0,c.zw)(i.title),1),(0,n.Wm)(_,{mode:"highlight","no-margin-left":!0},{default:(0,n.w5)((()=>[(0,n._)("h4",null,"$"+(0,c.zw)(i.price),1)])),_:1}),(0,n._)("p",null,(0,c.zw)(i.description),1)])]),(0,n._)("div",m,[(0,n._)("button",{onClick:e[0]||(e[0]=t=>a.addToCart({id:this.id,image:this.image,title:this.title,price:this.price}))}," Add to Cart ")])])}var g={props:["id","image","title","price","description"],methods:{addToCart(){this.$store.dispatch("cart/add")}}},h=i(89);const f=(0,h.Z)(g,[["render",_],["__scopeId","data-v-44c6cdf5"]]);var v=f,w=i(65),k={components:{ProductItem:v},computed:{...(0,w.Se)("products",["products"])}};const b=(0,h.Z)(k,[["render",a],["__scopeId","data-v-7485bd6a"]]);var y=b;const C=t=>((0,n.dD)("data-v-2e046109"),t=t(),(0,n.Cn)(),t),I=C((()=>(0,n._)("h2",null,"Your Cart",-1)));function D(t,e,i,o,r,a){const s=(0,n.up)("base-badge"),u=(0,n.up)("cart-item");return(0,n.wg)(),(0,n.iD)("section",null,[I,(0,n._)("h3",null,[(0,n.Uk)("Total Amount: "),(0,n.Wm)(s,{mode:"elegant"},{default:(0,n.w5)((()=>[(0,n.Uk)("$"+(0,c.zw)(a.cartTotal),1)])),_:1})]),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.cart.items,(t=>((0,n.wg)(),(0,n.j4)(u,{key:t.productId,"prod-id":t.productId,title:t.title,image:t.image,price:t.price,qty:t.qty},null,8,["prod-id","title","image","price","qty"])))),128))])])}const x=["src","alt"],T={class:"item__data"},j={class:"item__total"};function A(t,e,i,o,r,a){return(0,n.wg)(),(0,n.iD)("li",null,[(0,n._)("div",null,[(0,n._)("img",{src:i.image,alt:i.title},null,8,x)]),(0,n._)("div",null,[(0,n._)("h3",null,(0,c.zw)(i.title),1),(0,n._)("div",T,[(0,n._)("div",null,[(0,n.Uk)(" Price per Item: "),(0,n._)("strong",null,"$"+(0,c.zw)(i.price),1)]),(0,n._)("div",null,[(0,n.Uk)(" Quantity: "),(0,n._)("strong",null,(0,c.zw)(i.qty),1)])]),(0,n._)("div",j,"Total: $"+(0,c.zw)(a.itemTotal),1),(0,n._)("button",{onClick:e[0]||(e[0]=t=>a.remove(i.prodId))},"Remove")])])}var O={props:["prodId","title","image","price","qty"],computed:{itemTotal(){return(this.price*this.qty).toFixed(2)}},methods:{remove(){this.$store.dispatch("cart/remove")}}};const q=(0,h.Z)(O,[["render",A],["__scopeId","data-v-071fec9a"]]);var $=q,H={components:{CartItem:$},computed:{cart(){return this.$store.getters["cart/getCart"]},cartTotal(){return this.$store.getters["cart/cartTotal"]}}};const F=(0,h.Z)(H,[["render",D],["__scopeId","data-v-2e046109"]]);var W=F;const z=t=>((0,n.dD)("data-v-22ebb182"),t=t(),(0,n.Cn)(),t),U=z((()=>(0,n._)("h2",null,"Shop Admin",-1))),B=z((()=>(0,n._)("p",null,"There isn't much to do at the moment - sorry ...",-1))),M=[U,B];function P(t,e){return(0,n.wg)(),(0,n.iD)("section",null,M)}const Z={},L=(0,h.Z)(Z,[["render",P],["__scopeId","data-v-22ebb182"]]);var S=L;const V=(0,r.p7)({history:(0,r.PO)(),routes:[{path:"/",redirect:"/products"},{path:"/products",component:y},{path:"/cart",component:W},{path:"/admin",component:S}]});var G=V;function N(t,e,i,o,r,a){const c=(0,n.up)("the-header"),s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n.Wm)(s)],64)}const Y={key:0};function K(t,e,i,o,r,a){const s=(0,n.up)("router-link"),u=(0,n.up)("base-badge");return(0,n.wg)(),(0,n.iD)("header",null,[(0,n._)("h1",null,[(0,n.Wm)(s,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("VueShop")])),_:1})]),(0,n._)("nav",null,[(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(s,{to:"/products"},{default:(0,n.w5)((()=>[(0,n.Uk)("Products")])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(s,{to:"/cart"},{default:(0,n.w5)((()=>[(0,n.Uk)("Cart")])),_:1}),(0,n.Wm)(u,{mode:"elegant"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,c.zw)(a.cart.qty),1)])),_:1})]),a.isAuth?((0,n.wg)(),(0,n.iD)("li",Y,[(0,n.Wm)(s,{to:"/admin"},{default:(0,n.w5)((()=>[(0,n.Uk)("Admin")])),_:1})])):(0,n.kq)("",!0)])]),(0,n._)("div",null,[a.isAuth?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:e[0]||(e[0]=(...t)=>a.login&&a.login(...t))},"Login")),a.isAuth?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:e[1]||(e[1]=(...t)=>a.logout&&a.logout(...t))},"Logout")):(0,n.kq)("",!0)])])}var E={methods:{login(){this.$store.dispatch("logIn")},logout(){this.$store.dispatch("logOut")}},computed:{isAuth(){return this.$store.getters.showAuth},cart(){return this.$store.getters["cart/getCart"]}}};const Q=(0,h.Z)(E,[["render",K],["__scopeId","data-v-e1923f24"]]);var R=Q,J={components:{TheHeader:R},data(){return{products:[{id:"p1",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",title:"Book Collection",description:"A collection of must-read books. All-time classics included!",price:99.99},{id:"p2",image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",title:"Mountain Tent",description:"A tent for the ambitious outdoor tourist.",price:129.99},{id:"p3",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",title:"Food Box",description:"May be partially expired when it arrives but at least it is cheap!",price:6.99}]}},provide(){return{products:this.products}}};const X=(0,h.Z)(J,[["render",N]]);var tt=X;function et(t,e,i,o,r,a){return(0,n.wg)(),(0,n.iD)("span",{class:(0,c.C_)(["badge",["badge--"+i.mode,{nml:i.noMarginLeft}]])},[(0,n.WI)(t.$slots,"default",{},void 0,!0)],2)}var it={props:["mode","noMarginLeft"]};const ot=(0,h.Z)(it,[["render",et],["__scopeId","data-v-2e1832fc"]]);var rt=ot,nt={showAuth(t){return t.isLoggedIn}},at={logIn(t){t.commit("setAuth",!0)},logOut(t){t.commit("setAuth",!1)}},ct={setAuth(t,e){t.isLoggedIn=e}},st={products(t){return t.products}},ut={namespaced:!0,state(){return{products:[{id:"p1",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",title:"Book Collection",description:"A collection of must-read books. All-time classics included!",price:99.99},{id:"p2",image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",title:"Mountain Tent",description:"A tent for the ambitious outdoor tourist.",price:129.99},{id:"p3",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",title:"Food Box",description:"May be partially expired when it arrives but at least it is cheap!",price:6.99}]}},getters:st},dt={getCart(t){return t.cart},cartTotal(t){return t.cart.total.toFixed(2)}},lt=(i(7658),{addProductToCart(t,e){const i=t.cart.items.findIndex((t=>t.productId===e.id));if(i>=0)t.cart.items[i].qty++;else{const i={productId:e.id,title:e.title,image:e.image,price:e.price,qty:1};t.cart.items.push(i)}t.cart.qty++,t.cart.total+=e.price},removeProductFromCart(t,e){const i=t.cart.items.findIndex((t=>t.productId===e)),o=t.cart.items[i];t.cart.items.splice(i,1),t.cart.qty-=o.qty,t.cart.total-=o.price*o.qty}}),pt={namespaced:!0,state(){return{cart:{items:[],total:0,qty:0}}},getters:dt,mutations:lt};const mt=(0,w.MT)({modules:{products:ut,cart:pt},state(){return{isLoggedIn:!1}},getters:nt,actions:at,mutations:ct});var _t=mt;const gt=(0,o.ri)(tt);gt.use(G),gt.use(_t),gt.component("base-badge",rt),gt.mount("#app")}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,o,r,n){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],n=t[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((function(t){return i.O[t](o[s])}))?o.splice(s--,1):(c=!1,n<a&&(a=n));if(c){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,r,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(s)var d=s(i)}for(e&&e(o);u<a.length;u++)n=a[u],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},o=self["webpackChunkvue_vuex2"]=self["webpackChunkvue_vuex2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(3003)}));o=i.O(o)})();
//# sourceMappingURL=app.3c7fc7af.js.map