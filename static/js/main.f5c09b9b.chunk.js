(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"Section_title__1swx5"}},19:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),i=n(4),c=n.n(i),s=n(5),r=n(6),d=n(7),b=n(12),l=n(11),u=n(3),j=n.n(u),p=n(0),O=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(p.jsx)("ul",{className:j.a.optionsList,children:e.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("button",{className:j.a[t],type:"button",onClick:function(){return n(t)},children:t})},t)}))})},_=n(8),h=n.n(_),f=function(t){var e=t.message;return Object(p.jsx)("p",{className:h.a.notification,children:e})},x=n(9),k=n.n(x),g=function(t){var e=t.good,n=t.neutral,o=t.bad,a=t.total,i=t.positivePercentage;return 0!==a?Object(p.jsxs)("ul",{className:k.a.statList,children:[Object(p.jsxs)("li",{children:["Good: ",e]}),Object(p.jsxs)("li",{children:["Neutral: ",n]}),Object(p.jsxs)("li",{children:["Bad: ",o]}),Object(p.jsxs)("li",{children:["Total: ",a]}),Object(p.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]}):Object(p.jsx)(f,{message:"No feedback given"})},v=n(10),F=n.n(v),m=function(t){var e=t.title,n=t.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:F.a.title,children:e}),n]})},L=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(s.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return(100*t.state.good/t.countTotalFeedback()).toFixed(0)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(m,{title:"Please leave feedback",children:Object(p.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(p.jsx)(m,{title:"Statistics",children:Object(p.jsx)(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(o.Component);n(18);c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={optionsList:"FeedbackOptions_optionsList__1mZGK",optionButton:"FeedbackOptions_optionButton__1JKbo",good:"FeedbackOptions_good__6sUgm FeedbackOptions_optionButton__1JKbo",neutral:"FeedbackOptions_neutral__3sPyS FeedbackOptions_optionButton__1JKbo",bad:"FeedbackOptions_bad__catJm FeedbackOptions_optionButton__1JKbo"}},8:function(t,e,n){t.exports={notification:"Notification_notification__jiXex"}},9:function(t,e,n){t.exports={statList:"Statistics_statList__1fqyn"}}},[[19,1,2]]]);
//# sourceMappingURL=main.f5c09b9b.chunk.js.map