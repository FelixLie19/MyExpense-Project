(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(3),i=n.n(s),c=(n(9),n(10),n(0)),d=function(){return Object(c.jsx)("div",{className:"new-expense",children:Object(c.jsx)(d,{})})},l=n(4),o=(n(12),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(c.jsxs)("div",{className:"expense-date",children:[Object(c.jsx)("div",{className:"expense-date__month",children:t}),Object(c.jsx)("div",{className:"expense-date__year",children:a}),Object(c.jsx)("div",{className:"expense-date__day",children:n})]})}),r=(n(13),function(e){var t="card "+e.className;return Object(c.jsx)("div",{className:t,children:e.children})}),m=(n(14),function(e){var t=Object(a.useState)(e.title),n=Object(l.a)(t,2),s=n[0],i=n[1];console.log("ExpenseItem evaluated by React");return Object(c.jsxs)(r,{className:"expense-item",children:[Object(c.jsx)(o,{date:e.date}),Object(c.jsxs)("div",{className:"expense-item__description",children:[Object(c.jsx)("h2",{children:s}),Object(c.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(c.jsx)("button",{onClick:function(){i("Updated"),console.log(s)},children:"Change Title"})]})}),j=(n(15),function(e){return Object(c.jsxs)(r,{className:"expenses",children:[Object(c.jsx)(m,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(c.jsx)(m,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(c.jsx)(m,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(c.jsx)(m,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date})]})}),u=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{}),Object(c.jsx)(j,{items:e})]})};i.a.render(Object(c.jsx)(u,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.e00f333d.chunk.js.map