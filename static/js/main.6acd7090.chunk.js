(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),l=c(5),o=c(7),i=c(6),r=c(1),d=c.n(r),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam",isSelected:!0},e.handleClick=function(t){e.setState({selectedGood:t,isSelected:!0})},e.handleClickClear=function(){e.setState({isSelected:!1,selectedGood:null})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.selectedGood,s=t.isSelected;return Object(u.jsxs)("main",{className:"section container",children:[s?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c," ","is selected",Object(u.jsx)("button",{onClick:this.handleClickClear,"data-cy":"ClearButton",type:"button",className:"delete ml-3"})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(t){return Object(u.jsxs)("tr",{"data-cy":"Good",className:c===t?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:c===t?Object(u.jsx)("button",{onClick:e.handleClickClear,"data-cy":"RemoveButton",type:"button",className:"button is-info",children:"-"}):Object(u.jsx)("button",{onClick:function(){return e.handleClick(t)},"data-cy":"AddButton",type:"button",className:"button",children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]})}))})})]})}}]),c}(d.a.Component);n.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6acd7090.chunk.js.map