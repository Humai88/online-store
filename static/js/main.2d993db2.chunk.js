(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{15:function(t,e,r){t.exports={wrapper:"PDP_wrapper__37RiC",imgPreviewWrapper:"PDP_imgPreviewWrapper__-Dpbi",imgPreview:"PDP_imgPreview__3d_Cv",mainImgWrapper:"PDP_mainImgWrapper__1Vm97",mainImg:"PDP_mainImg__VgaIf",descrWrapper:"PDP_descrWrapper__1QmOS",brand:"PDP_brand__1807k",name:"PDP_name__3vy2A",attrName:"PDP_attrName__1iv62",active:"PDP_active__3Gm-e",activeSwatch:"PDP_activeSwatch__SRXza",attrValuesWrapper:"PDP_attrValuesWrapper__1X0_X",attrValue:"PDP_attrValue__3_D9t",price:"PDP_price__3SZhW",btn:"PDP_btn__2nbBr",productDescr:"PDP_productDescr__1_8AD"}},17:function(t,e,r){t.exports={wrapper:"CartOverlayItem_wrapper__hskJe",brand:"CartOverlayItem_brand__1Cn-k",name:"CartOverlayItem_name__3ABpc",price:"CartOverlayItem_price__2qK0i",btnsWrapper:"CartOverlayItem_btnsWrapper__2Nvj9",attrName:"CartOverlayItem_attrName__14Y17",attrValue:"CartOverlayItem_attrValue__2Ygqp",attrValuesWrapper:"CartOverlayItem_attrValuesWrapper__6SMxl",productCount:"CartOverlayItem_productCount__-PhXM",count:"CartOverlayItem_count__2LMa9",img:"CartOverlayItem_img__2Q55-",adjustCountBtn:"CartOverlayItem_adjustCountBtn__1hQ7X"}},18:function(t,e,r){t.exports={wrapper:"CartItem_wrapper__3Z6oE",brand:"CartItem_brand__1dNdv",name:"CartItem_name__2mTbs",price:"CartItem_price__nflBp",btnsWrapper:"CartItem_btnsWrapper__TqjnH",attrName:"CartItem_attrName__3kJPy",attrValue:"CartItem_attrValue__1eKWf",attrValuesWrapper:"CartItem_attrValuesWrapper__3CQBx",productCount:"CartItem_productCount__388ft",count:"CartItem_count__17arO",totalItems:"CartItem_totalItems__1FN6g",adjustCountBtn:"CartItem_adjustCountBtn__829xK"}},34:function(t,e,r){t.exports={wrapper:"Navbar_wrapper__13BnM",underline:"Navbar_underline__2ocl3",active:"Navbar_active__lBLah",cartSection:"Navbar_cartSection__2ATzO",logo:"Navbar_logo__cZfRj",itemsCount:"Navbar_itemsCount__2mVFR",cartIcon:"Navbar_cartIcon__1gAFS"}},36:function(t,e,r){t.exports={cartWrapper:"CartOverlay_cartWrapper__L_2eQ",cartItems:"CartOverlay_cartItems__3ic2w",totalPrice:"CartOverlay_totalPrice__2LbMA",btnsWrapper:"CartOverlay_btnsWrapper__1Svg-",btn:"CartOverlay_btn__3N2rc",btnWhite:"CartOverlay_btnWhite__3beu0"}},39:function(t,e,r){t.exports={wrapper:"ProductItem_wrapper__1Eq33",content:"ProductItem_content__Io-hk",outOfStock:"ProductItem_outOfStock__2bLd6",img:"ProductItem_img__1Tz16",title:"ProductItem_title__3yPWA",price:"ProductItem_price__1Emfp"}},46:function(t,e,r){t.exports={wrapper:"Cart_wrapper__1g7Eq",header:"Cart_header__obEkW",total:"Cart_total__1Gy0S",totalPrice:"Cart_totalPrice__2eKRE"}},58:function(t,e,r){t.exports={backdrop:"Modal_backdrop__2IUaV",modal:"Modal_modal__1XgFk","slide-down":"Modal_slide-down__1gsX3"}},65:function(t,e,r){t.exports={img:"Spinner_img__15W-T",backdrop:"Spinner_backdrop__3-c1L"}},71:function(t,e,r){t.exports={main:"App_main__2E4sH"}},75:function(t,e,r){t.exports={btn:"Button_btn__3eHJY"}},76:function(t,e,r){t.exports={squareBtn:"SquareBtn_squareBtn__4g5u8"}},77:function(t,e,r){t.exports={wrapper:"PLP_wrapper__VphLj",header:"PLP_header__1Nl2b"}},87:function(t,e,r){},95:function(t,e,r){"use strict";r.r(e);var a,n,c,s,i=r(2),o=r(54),u=r.n(o),l=(r(87),r(6)),p=r(7),d=r(8),j=r(9),m=r(71),b=r.n(m),h=r(13),O=r(34),y=r.n(O),f=r(79),A=r(31),v=r(14),C=r(32),g=r(5),P=r(102),_=r(104),x=r(52),N=r(103),w=Object(N.a)(a||(a=Object(x.a)(["\n  query {\n    categories {\n      name\n    }\n  }\n"]))),k=Object(N.a)(n||(n=Object(x.a)(["\n  query ($category: String!) {\n    category(input: { title: $category }) {\n      products {\n        name\n        description\n        id\n        category\n        gallery\n        prices {\n          currency\n          amount\n        }\n        attributes {\n          type\n          name\n          items {\n            displayValue\n          }\n        }\n        inStock\n        brand\n      }\n    }\n  }\n"]))),S=Object(N.a)(c||(c=Object(x.a)(["\n  query ($id: String!) {\n    product(id: $id) {\n      description\n      id\n      name\n      inStock\n      gallery\n      category\n      attributes {\n        type\n        name\n        items {\n          displayValue\n          value\n        }\n      }\n      prices {\n        currency\n        amount\n      }\n      brand\n    }\n  }\n"]))),I=Object(N.a)(s||(s=Object(x.a)(["\n  query {\n    currencies\n  }\n"]))),T="GET_PRODUCTS_BY_CATEGORY",F="GET_CATEGORIES_LIST",V="GET_SINGLE_PRODUCT_BY_ID",U="GET_CURRENCIES_LIST",K="SET_CURRENT_CURRENCY",q="ADD_TO_CART",D="REMOVE_FROM_CART",X="ADJUST_QUANTITY",B="TOTAL_ITEMS_COUNT",R="TOTAL_PRICE",W="SET_SELECTED_ATTR",E="SET_STATUS",H=function(t){return{type:D,payload:{productId:t}}},Q=function(t,e){return{type:X,payload:{productId:t,value:e}}},z=function(t){return{type:B,payload:{productsInCart:t}}},G=function(t,e){return{type:R,payload:{productsInCart:t,currentCurrency:e}}},Y=function(t){return{type:E,payload:{status:t}}},J=new P.a({uri:"https://store-back-portfolio.herokuapp.com/",cache:new _.a}),M={categories:[],products:[],product:{id:"",name:"",inStock:!1,prices:[],gallery:[],description:"",category:"",attributes:[],brand:"",selectedAttr:[]},currencies:[],currentCurrency:"USD",cart:[],totalCount:0,totalPrice:0},L=function(t){return function(e){e(Y("loading")),J.query({query:k,variables:{category:t}}).then((function(t){var r;e((r=t.data.category.products,{type:T,payload:{products:r}}))})).catch((function(t){console.log("err:",t)})).finally((function(){e(Y("succeeded"))}))}},Z=r.p+"static/media/Ajax-Loading.a5a2590c.svg",$=r(65),tt=r.n($),et=r(0),rt=function(){return Object(et.jsx)(i.Fragment,{children:Object(et.jsx)("div",{className:tt.a.backdrop,children:Object(et.jsx)("img",{className:tt.a.img,src:Z,alt:"loading"})})})},at=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.props.getCategoriesTC()}},{key:"render",value:function(){var t=this.props,e=t.categories,r=t.status;return Object(et.jsxs)("ul",{children:["loading"===r&&Object(et.jsx)(rt,{}),e.map((function(t){return Object(et.jsx)("li",{children:Object(et.jsxs)(A.b,{activeClassName:y.a.active,to:"/products/".concat(t.name),children:[t.name,Object(et.jsx)("div",{className:y.a.underline})]})},t.name)}))]})}}]),r}(i.Component),nt=Object(v.b)((function(t){return{categories:t.products.categories,status:t.app.status}}),{getCategoriesTC:function(){return function(t){t(Y("loading")),J.query({query:w}).then((function(e){var r;t((r=e.data.categories,{type:F,payload:{categories:r}}))})).catch((function(t){console.log("err:",t)})).finally((function(){t(Y("succeeded"))}))}},getProductsByCategoryTC:L})(at),ct=function(t){return"USD"==t?"&#36;":"GBP"==t?"&#163;":"AUD"==t?"A&#36;":"JPY"==t?"&#165;":"RUB"==t?"&#8381;":t},st=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(t){var a;return Object(l.a)(this,r),(a=e.call(this,t)).state={currentCurrency:"USD"},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(p.a)(r,[{key:"handleChange",value:function(t){this.setState({currentCurrency:t.currentTarget.value}),localStorage.setItem("currency",t.currentTarget.value)}},{key:"componentDidMount",value:function(){this.props.getCurrenciesTC(),this.props.setCurrentCurrencyAC(this.state.currentCurrency);var t=localStorage.getItem("currency");this.setState({currentCurrency:t||"USD"})}},{key:"componentDidUpdate",value:function(t,e){this.state.currentCurrency!==e.currentCurrency&&this.props.setCurrentCurrencyAC(this.state.currentCurrency)}},{key:"render",value:function(){var t=this.state.currentCurrency,e=this.props,r=e.currencies,a=e.status;return Object(et.jsxs)(et.Fragment,{children:["loading"===a&&Object(et.jsx)(rt,{}),Object(et.jsx)("select",{value:t,onChange:this.handleChange,children:r.map((function(t){return Object(et.jsx)("option",{value:t,dangerouslySetInnerHTML:{__html:ct(t)}},t)}))})]})}}]),r}(i.Component),it=Object(v.b)((function(t){return{currencies:t.products.currencies,status:t.app.status}}),{getCurrenciesTC:function(){return function(t){t(Y("loading")),J.query({query:I}).then((function(e){var r;t((r=e.data.currencies,{type:U,payload:{currencies:r}}))})).catch((function(t){console.log("err:",t)})).finally((function(){t(Y("succeeded"))}))}},setCurrentCurrencyAC:function(t){return{type:K,payload:{currency:t}}}})(st),ot=r(12),ut=r(80),lt=r(75),pt=r.n(lt),dt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var t=this.props,e=t.className,r=Object(ut.a)(t,["className"]),a="".concat(pt.a.btn," ").concat(e);return Object(et.jsx)("button",Object(g.a)({className:a},r))}}]),r}(i.Component),jt=r(58),mt=r.n(jt),bt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(et.jsx)("div",{className:mt.a.backdrop,onClick:this.props.onClose})}}]),r}(i.Component),ht=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(et.jsx)("div",{className:mt.a.modal,children:Object(et.jsx)("div",{className:mt.a.content,children:this.props.children})})}}]),r}(i.Component),Ot=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(et.jsxs)(i.Fragment,{children:[Object(et.jsx)(bt,{onClose:this.props.onClose}),Object(et.jsx)(ht,{children:this.props.children})]})}}]),r}(i.Component),yt=r(36),ft=r.n(yt),At=r(76),vt=r.n(At),Ct=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=t.className,a=t.onClick,n=t.style,c=t.id,s="".concat(vt.a.squareBtn," ").concat(r||"");return Object(et.jsx)("div",{id:c,style:n,onClick:a,className:s,children:e})}}]),r}(i.Component),gt=r(17),Pt=r.n(gt),_t=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(t){var a;return Object(l.a)(this,r),(a=e.call(this,t)).decrValue=a.decrValue.bind(Object(h.a)(a)),a.incrValue=a.incrValue.bind(Object(h.a)(a)),a}return Object(p.a)(r,[{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.id,a=e.qty;0===a&&a!==t.qty&&this.props.removeProductFromCartAC(r)}},{key:"decrValue",value:function(){var t=this.props,e=t.id,r=t.qty;this.props.adjustQuantityAC(e,r-1)}},{key:"incrValue",value:function(){var t=this.props,e=t.id,r=t.qty;this.props.adjustQuantityAC(e,r+1)}},{key:"render",value:function(){var t=this.props,e=t.prices,r=t.brand,a=t.name,n=t.attributes,c=t.gallery,s=t.qty,i=t.id,o=t.currentCurrency;return Object(et.jsx)(et.Fragment,{children:Object(et.jsxs)("div",{id:i,className:Pt.a.wrapper,children:[Object(et.jsxs)("div",{className:Pt.a.productInfo,children:[Object(et.jsx)("h2",{className:Pt.a.brand,children:r}),Object(et.jsx)("h3",{className:Pt.a.name,children:a}),Object(et.jsx)("div",{className:Pt.a.price,children:e.filter((function(t){return t.currency===o})).map((function(t){return Object(et.jsxs)("div",{children:[Object(et.jsx)("span",{dangerouslySetInnerHTML:{__html:ct(t.currency)}}),t.amount]},i)}))}),n.map((function(t){return Object(et.jsxs)("div",{className:Pt.a.btnsWrapper,children:[Object(et.jsx)("div",{className:Pt.a.attrName,children:t.name}),Object(et.jsx)("div",{className:Pt.a.attrValuesWrapper,children:t.items.map((function(e){return"text"===t.type?Object(et.jsx)(Ct,{className:Pt.a.attrValue,children:e.displayValue},e.displayValue):Object(et.jsx)(Ct,{style:{background:e.displayValue,border:"none"},className:Pt.a.attrValue},e.displayValue)}))})]},t.name)}))]}),Object(et.jsxs)("div",{className:Pt.a.productCount,children:[Object(et.jsxs)("div",{className:Pt.a.count,children:[Object(et.jsx)(Ct,{className:Pt.a.adjustCountBtn,onClick:this.incrValue,children:"+"}),Object(et.jsx)("div",{className:Pt.a.totalItems,children:s}),Object(et.jsx)(Ct,{className:Pt.a.adjustCountBtn,onClick:this.decrValue,children:"-"})]}),Object(et.jsx)("img",{className:Pt.a.img,src:c[0],alt:a})]})]})})}}]),r}(i.Component),xt=Object(v.b)((function(t){return{currentCurrency:t.products.currentCurrency}}),{removeProductFromCartAC:H,adjustQuantityAC:Q})(_t),Nt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.cart,e=this.props.currentCurrency;this.props.setTotalItemsCountAC(t),this.props.setTotalPriceAC(t,e)}},{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.cart,a=e.currentCurrency;r!==t.cart&&this.props.setTotalItemsCountAC(r),r===t.cart&&a===t.currentCurrency||this.props.setTotalPriceAC(r,a)}},{key:"render",value:function(){var t=this.props,e=t.toggleShowCart,r=t.totalCount,a=t.currentCurrency,n=t.totalPrice;return Object(et.jsx)(Ot,{onClose:e,children:Object(et.jsxs)("div",{className:ft.a.cartWrapper,children:[Object(et.jsxs)("div",{className:ft.a.cartItems,children:["My bag, ",r]}),this.props.cart.map((function(t){return Object(et.jsx)(xt,{id:t.id,qty:t.qty,brand:t.brand,name:t.name,prices:t.prices,attributes:t.attributes,gallery:t.gallery},t.id)})),Object(et.jsxs)("div",{className:ft.a.totalPrice,children:[Object(et.jsx)("div",{className:ft.a.total,children:"Total"}),Object(et.jsxs)("div",{className:ft.a.total,children:[Object(et.jsx)("span",{dangerouslySetInnerHTML:{__html:ct(a)}}),n.toFixed(2)]})]}),Object(et.jsxs)("div",{className:ft.a.btnsWrapper,children:[Object(et.jsx)(A.b,{to:"/cart",children:Object(et.jsx)(dt,{onClick:e,className:ft.a.btnWhite,children:"view bag"})}),Object(et.jsx)(dt,{className:ft.a.btn,children:"check out"})]})]})})}}]),r}(i.Component),wt=Object(ot.g)(Object(v.b)((function(t){return{cart:t.products.cart,totalCount:t.products.totalCount,currentCurrency:t.products.currentCurrency,totalPrice:t.products.totalPrice}}),{setTotalItemsCountAC:z,setTotalPriceAC:G})(Nt)),kt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(t){var a;return Object(l.a)(this,r),(a=e.call(this,t)).state={showCart:!1},a.toggleShowCart=a.toggleShowCart.bind(Object(h.a)(a)),a}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.cart;this.props.setTotalItemsCountAC(t)}},{key:"componentDidUpdate",value:function(t){var e=this.props.cart;e!==t.cart&&this.props.setTotalItemsCountAC(e)}},{key:"toggleShowCart",value:function(){this.setState((function(t){return{showCart:!t.showCart}}))}},{key:"render",value:function(){var t=this.state.showCart,e=this.props.totalCount;return Object(et.jsxs)(et.Fragment,{children:[t&&Object(et.jsx)(wt,{toggleShowCart:this.toggleShowCart}),Object(et.jsxs)("div",{className:y.a.wrapper,children:[Object(et.jsx)("ul",{children:Object(et.jsx)(nt,{})}),Object(et.jsx)("img",{src:"data:image/jpeg;base64,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",className:y.a.logo}),Object(et.jsxs)("div",{className:y.a.cartSection,children:[Object(et.jsx)(it,{}),Object(et.jsxs)("div",{children:[Object(et.jsx)(f.a,{className:y.a.cartIcon,onClick:this.toggleShowCart,style:e>0?{color:"#2f7c43"}:{color:"black"}}),Object(et.jsx)("div",{style:e>0?{background:"#2f7c43"}:{background:"black"},className:y.a.itemsCount,children:e})]})]})]})]})}}]),r}(i.Component),St=Object(v.b)((function(t){return{cart:t.products.cart,totalCount:t.products.totalCount}}),{setTotalItemsCountAC:z})(kt),It=r(39),Tt=r.n(It),Ft=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var t=this.props,e=t.title,r=t.prices,a=t.imgSrc,n=t.link,c=t.inStock,s=t.currentCurrency;return Object(et.jsx)(A.b,{to:n,className:Tt.a.wrapper,children:Object(et.jsxs)("div",{style:{opacity:c?"1":"0.6"},className:Tt.a.content,children:[!c&&Object(et.jsx)("span",{className:Tt.a.outOfStock,children:"OUT OF STOCK"}),Object(et.jsx)("img",{className:Tt.a.img,src:a,alt:e}),Object(et.jsx)("div",{className:Tt.a.title,children:e}),Object(et.jsx)("div",{className:Tt.a.price,children:r.filter((function(t){return t.currency===s})).map((function(t){return Object(et.jsxs)("div",{children:[Object(et.jsx)("span",{dangerouslySetInnerHTML:{__html:ct(t.currency)}}),t.amount]},t.currency)}))})]})})}}]),r}(i.Component),Vt=r(77),Ut=r.n(Vt),Kt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.category;this.props.getProductsByCategoryTC(t)}},{key:"componentDidUpdate",value:function(t){var e=this.props.match.params.category;e!==t.match.params.category&&this.props.getProductsByCategoryTC(e)}},{key:"render",value:function(){var t=this.props.match.params.category,e=this.props,r=e.products,a=e.currentCurrency,n=e.status;return Object(et.jsxs)(et.Fragment,{children:["loading"===n&&Object(et.jsx)(rt,{}),Object(et.jsx)("div",{className:Ut.a.wrapper,children:Object(et.jsx)(et.Fragment,{children:r.map((function(e){return Object(et.jsx)(Ft,{link:"/products/".concat(t,"/").concat(e.id),inStock:e.inStock,imgSrc:e.gallery[0],title:"".concat(e.brand," ").concat(e.name),prices:e.prices,currentCurrency:a},e.id)}))})})]})}}]),r}(i.Component),qt=Object(v.b)((function(t){return{products:t.products.products,currentCurrency:t.products.currentCurrency,status:t.app.status}}),{getProductsByCategoryTC:L})(Kt),Dt=r(15),Xt=r.n(Dt),Bt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(t){var a;return Object(l.a)(this,r),(a=e.call(this,t)).state={active:[],showCart:!1},a.addToCartHandler=a.addToCartHandler.bind(Object(h.a)(a)),a.setAttrHandler=a.setAttrHandler.bind(Object(h.a)(a)),a.toggleShowCart=a.toggleShowCart.bind(Object(h.a)(a)),a}return Object(p.a)(r,[{key:"setAttrHandler",value:function(t,e,r,a){var n=this,c=this.props.match.params.id,s=this.state.active.find((function(t){return t.includes(r.split(" ").join(""))}));console.log(e),this.setState({active:s?this.state.active.filter((function(t){return t!==s})):[].concat(Object(C.a)(this.state.active),[a.currentTarget.id])},(function(){n.props.setSelectedAttributesAC(c,t,e)}))}},{key:"addToCartHandler",value:function(){var t=this.props.match.params.id;this.props.addProductToCartAC(t),this.toggleShowCart()}},{key:"toggleShowCart",value:function(){this.setState((function(t){return{showCart:!t.showCart}}))}},{key:"componentDidMount",value:function(){var t=this.props.match.params,e=t.category,r=t.id;this.props.getProductsByCategoryTC(e),this.props.getProductByIdTC(r)}},{key:"componentDidUpdate",value:function(t,e){var r=this.props.match.params.id;r!==t.match.params.id&&this.props.getProductByIdTC(r),e.active,this.state.active}},{key:"render",value:function(){var t=this,e=this.state,r=e.active,a=e.showCart,n=this.props,c=n.product,s=n.currentCurrency,i=n.status;return Object(et.jsxs)("div",{children:[a&&Object(et.jsx)(wt,{toggleShowCart:this.toggleShowCart}),"loading"===i&&Object(et.jsx)(rt,{}),Object(et.jsxs)("div",{className:Xt.a.wrapper,children:[Object(et.jsx)("div",{className:Xt.a.imgPreviewWrapper,children:c.gallery.slice(1).map((function(t){return Object(et.jsx)("img",{className:Xt.a.imgPreview,src:t},t)}))}),Object(et.jsx)("div",{className:Xt.a.mainImgWrapper,children:Object(et.jsx)("img",{className:Xt.a.mainImg,src:c.gallery[0],alt:c.name})}),Object(et.jsxs)("div",{className:Xt.a.descrWrapper,children:[Object(et.jsx)("h2",{className:Xt.a.brand,children:c.brand}),Object(et.jsx)("h3",{className:Xt.a.name,children:c.name}),this.props.product.attributes.map((function(e){return Object(et.jsxs)("div",{children:[Object(et.jsx)("div",{className:Xt.a.attrName,children:e.name}),Object(et.jsx)("div",{className:Xt.a.attrValuesWrapper,children:e.items.map((function(a){var n="".concat(a.displayValue).concat(e.name.split(" ").join(""));return"text"===e.type?Object(et.jsx)(Ct,{id:n,onClick:t.setAttrHandler.bind(t,a.displayValue,n,e.name),className:"".concat(Xt.a.attrValue," ").concat(r.includes(n)?Xt.a.active:""),children:a.displayValue},a.displayValue):Object(et.jsx)(Ct,{id:n,onClick:t.setAttrHandler.bind(t,a.displayValue,n,e.name),style:{background:a.value,border:"none"},className:"".concat(Xt.a.attrValue," ").concat(r.includes(n)?Xt.a.activeSwatch:"")},a.displayValue)}))})]},e.name)})),Object(et.jsx)("h2",{className:Xt.a.attrName,children:"Price:"}),Object(et.jsx)("div",{className:Xt.a.price,children:c.prices.filter((function(t){return t.currency===s})).map((function(t){return Object(et.jsxs)("div",{children:[Object(et.jsx)("span",{dangerouslySetInnerHTML:{__html:ct(t.currency)}}),t.amount]},t.currency)}))}),Object(et.jsx)(dt,{disabled:!c.inStock,className:Xt.a.btn,onClick:this.addToCartHandler,children:"add to cart"}),this.props&&Object(et.jsx)("div",{className:Xt.a.productDescr,dangerouslySetInnerHTML:{__html:c.description.length>400?"".concat(c.description.substring(0,400),"..."):c.description}})]})]})]})}}]),r}(i.Component),Rt=Object(v.b)((function(t){return{product:t.products.product,currentCurrency:t.products.currentCurrency,status:t.app.status}}),{getProductByIdTC:function(t){return function(e){e(Y("loading")),J.query({query:S,variables:{id:t}}).then((function(t){var r;e((r=t.data.product,{type:V,payload:{product:r}}))})).catch((function(t){console.log("err:",t)})).finally((function(){e(Y("succeeded"))}))}},addProductToCartAC:function(t){return{type:q,payload:{productId:t}}},getProductsByCategoryTC:L,setSelectedAttributesAC:function(t,e,r){return{type:W,payload:{productId:t,displayValue:e,id:r}}}})(Bt),Wt=r(18),Et=r.n(Wt),Ht=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(t){var a;return Object(l.a)(this,r),(a=e.call(this,t)).decrValue=a.decrValue.bind(Object(h.a)(a)),a.incrValue=a.incrValue.bind(Object(h.a)(a)),a}return Object(p.a)(r,[{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.id,a=e.qty;0===a&&a!==t.qty&&this.props.removeProductFromCartAC(r)}},{key:"decrValue",value:function(){var t=this.props,e=t.id,r=t.qty;this.props.adjustQuantityAC(e,r-1)}},{key:"incrValue",value:function(){var t=this.props,e=t.id,r=t.qty;this.props.adjustQuantityAC(e,r+1)}},{key:"render",value:function(){var t=this.props,e=t.prices,r=t.brand,a=t.name,n=t.attributes,c=t.gallery,s=t.qty,i=t.id,o=t.currentCurrency;return Object(et.jsx)(et.Fragment,{children:Object(et.jsxs)("div",{id:i,className:Et.a.wrapper,children:[Object(et.jsxs)("div",{className:Et.a.productInfo,children:[Object(et.jsx)("h2",{className:Et.a.brand,children:r}),Object(et.jsx)("h3",{className:Et.a.name,children:a}),Object(et.jsx)("div",{className:Et.a.price,children:e.filter((function(t){return t.currency===o})).map((function(t){return Object(et.jsxs)("div",{children:[Object(et.jsx)("span",{dangerouslySetInnerHTML:{__html:ct(t.currency)}}),t.amount]},i)}))}),n.map((function(t){return Object(et.jsxs)("div",{className:Et.a.btnsWrapper,children:[Object(et.jsx)("div",{className:Et.a.attrName,children:t.name}),Object(et.jsx)("div",{className:Et.a.attrValuesWrapper,children:t.items.map((function(e){return"text"===t.type?Object(et.jsx)(Ct,{className:Et.a.attrValue,children:e.displayValue},e.displayValue):Object(et.jsx)(Ct,{style:{background:e.displayValue,border:"none"},className:Et.a.attrValue},e.displayValue)}))})]},t.name)}))]}),Object(et.jsxs)("div",{className:Et.a.productCount,children:[Object(et.jsxs)("div",{className:Et.a.count,children:[Object(et.jsx)(Ct,{className:Et.a.adjustCountBtn,onClick:this.incrValue,children:"+"}),Object(et.jsx)("div",{className:Et.a.totalItems,children:s}),Object(et.jsx)(Ct,{onClick:this.decrValue,className:Et.a.adjustCountBtn,children:"-"})]}),Object(et.jsx)("img",{className:Et.a.img,src:c[0],alt:a})]})]})})}}]),r}(i.Component),Qt=Object(v.b)((function(t){return{currentCurrency:t.products.currentCurrency}}),{removeProductFromCartAC:H,adjustQuantityAC:Q})(Ht),zt=r(46),Gt=r.n(zt),Yt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.cart,a=e.currentCurrency;r===t.cart&&a===t.currentCurrency||this.props.setTotalPriceAC(r,a)}},{key:"render",value:function(){var t=this.props,e=t.cart,r=t.totalPrice,a=t.currentCurrency;return Object(et.jsxs)("div",{className:Gt.a.wrapper,children:[Object(et.jsx)("h2",{className:Gt.a.header,children:"Cart"}),e.map((function(t){return Object(et.jsx)(Qt,{id:t.id,qty:t.qty,brand:t.brand,name:t.name,prices:t.prices,attributes:t.attributes,gallery:t.gallery},t.id)})),Object(et.jsxs)("div",{className:Gt.a.totalPrice,children:[Object(et.jsx)("div",{className:Gt.a.total,children:"Total"}),Object(et.jsxs)("div",{className:Gt.a.total,children:[Object(et.jsx)("span",{dangerouslySetInnerHTML:{__html:ct(a)}}),r.toFixed(2)]})]})]})}}]),r}(i.Component),Jt=Object(v.b)((function(t){return{cart:t.products.cart,currentCurrency:t.products.currentCurrency,totalPrice:t.products.totalPrice}}),{removeProductFromCartAC:H,setTotalPriceAC:G})(Yt),Mt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(ot.b,{exact:!0,path:"/",render:function(){return Object(et.jsx)(ot.a,{to:"/products/clothes"})}}),Object(et.jsx)(ot.b,{path:"/products/:category",exact:!0,component:qt}),Object(et.jsx)(ot.b,{path:"/products/:category/:id",exact:!0,component:Rt}),Object(et.jsx)(ot.b,{path:"/cart",exact:!0,component:Jt})]})}}]),r}(i.Component),Lt=function(t){Object(d.a)(r,t);var e=Object(j.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(et.jsxs)(A.a,{children:[Object(et.jsx)(St,{}),Object(et.jsx)("main",{className:b.a.main,children:Object(et.jsx)(ot.d,{children:Object(et.jsx)(Mt,{})})})]})}}]),r}(i.Component),Zt=r(45),$t=r(78),te={status:"idle"},ee=Object(Zt.b)({products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return Object(g.a)(Object(g.a)({},t),{},{categories:e.payload.categories});case T:return Object(g.a)(Object(g.a)({},t),{},{products:e.payload.products});case V:return Object(g.a)(Object(g.a)({},t),{},{product:e.payload.product});case U:return Object(g.a)(Object(g.a)({},t),{},{currencies:e.payload.currencies});case K:return Object(g.a)(Object(g.a)({},t),{},{currentCurrency:e.payload.currency});case q:var r=t.products.find((function(t){return t.id===e.payload.productId})),a=t.cart.some((function(t){return t.id===e.payload.productId}));return r?Object(g.a)(Object(g.a)({},t),{},{cart:a?t.cart.map((function(t){return t.id===e.payload.productId?Object(g.a)(Object(g.a)({},t),{},{gallery:t.gallery.map((function(t){return t})),prices:t.prices.map((function(t){return Object(g.a)({},t)})),attributes:t.attributes.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{items:t.items.map((function(t){return Object(g.a)({},t)}))})})),qty:t.qty+1}):t})):[].concat(Object(C.a)(t.cart),[Object(g.a)(Object(g.a)({},r),{},{qty:1})])}):t;case D:return Object(g.a)(Object(g.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.productId}))});case X:return Object(g.a)(Object(g.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.productId?Object(g.a)(Object(g.a)({},t),{},{gallery:t.gallery.map((function(t){return t})),prices:t.prices.map((function(t){return Object(g.a)({},t)})),attributes:t.attributes.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{items:t.items.map((function(t){return Object(g.a)({},t)}))})})),qty:e.payload.value<0?0:e.payload.value}):t}))});case B:return Object(g.a)(Object(g.a)({},t),{},{totalCount:e.payload.productsInCart.reduce((function(t,e){return t+e.qty}),0)});case R:return Object(g.a)(Object(g.a)({},t),{},{totalPrice:e.payload.productsInCart.length>0?e.payload.productsInCart.map((function(t){return t.prices.filter((function(t){return t.currency===e.payload.currentCurrency})).reduce((function(t,e){return t+e.amount}),0)*t.qty})).reduce((function(t,e){return t+e})):0});case W:return Object(g.a)(Object(g.a)({},t),{},{products:t.products.map((function(t){return t.id===e.payload.productId?Object(g.a)(Object(g.a)({},t),{},{gallery:t.gallery.map((function(t){return t})),prices:t.prices.map((function(t){return Object(g.a)({},t)})),attributes:t.attributes.map((function(t){var r=t.items.find((function(r){return r.displayValue===e.payload.displayValue&&r.displayValue+t.name.split(" ").join("")===e.payload.id}));return Object(g.a)(Object(g.a)({},t),{},{items:r?[r]:t.items.map((function(t){return Object(g.a)({},t)}))})}))}):t}))});default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(g.a)(Object(g.a)({},t),{},{status:e.payload.status});default:return t}}}),re=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Zt.c)(Object(Zt.a)($t.a)),ae=Object(Zt.d)(ee,re);u.a.render(Object(et.jsx)(v.a,{store:ae,children:Object(et.jsx)(Lt,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.2d993db2.chunk.js.map