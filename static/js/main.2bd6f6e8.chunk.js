(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,a){e.exports={Project:"Projects_Project__2XY-V",Projects:"Projects_Projects__nHAny",CarouselPic:"Projects_CarouselPic__2YGMm",CarouselCaption:"Projects_CarouselCaption__1qYMx"}},17:function(e,t,a){e.exports={Resume:"Resume_Resume__1XGvX",ResumeBox:"Resume_ResumeBox__kJ4zA",ResumeSection:"Resume_ResumeSection__2NCt4",contentTitle:"Resume_contentTitle__2bhd_"}},18:function(e,t,a){e.exports={NavigationItem:"Navigation_NavigationItem__3K00j",Active:"Navigation_Active__1aQad"}},21:function(e,t,a){e.exports={Sniglet:"Variables_Sniglet__2duqY",Roboto:"Variables_Roboto__14AY9",OpenSans:"Variables_OpenSans__j6Ep-",Dosis:"Variables_Dosis__xIM_X"}},25:function(e,t,a){e.exports={App:"App_App__36atT",Section:"App_Section__3cmjs"}},32:function(e,t,a){e.exports={Header:"Header_Header__2za8y"}},35:function(e,t,a){e.exports={ContentBox:"About_ContentBox__2sPXX"}},37:function(e,t,a){e.exports={Contact:"Contact_Contact__3jwdb","form-control":"Contact_form-control__3UPNa"}},40:function(e,t,a){e.exports=a(59)},45:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/background.2c1f4e93.jpg"},59:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(20),r=a.n(i),l=(a(45),a(7)),c=a(8),s=a(12),u=a(9),m=a(11),p=a(70),d=a(71),h=a(39),f=a(32),b=a.n(f),g=a(21),v=a.n(g),_=a(61),y=a(62),E=a(72),j=a(18),w=a.n(j),k=function(e){return o.a.createElement(_.a,{className:w.a.NavigationItem},o.a.createElement(E.a,{to:e.path,activeClassName:w.a.Active},o.a.createElement(y.a,null,e.title)))},C=a(63),x=function(e){var t=w.a.Navigation+" justify-content-center";return o.a.createElement(C.a,{className:t},e.navList.map((function(e){return o.a.createElement(k,{path:e.path,title:e.title,key:e.id})})))},O=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:b.a.Header},o.a.createElement("h3",null,e.title),o.a.createElement("h1",{className:v.a.Roboto},e.name),o.a.createElement(x,{navList:e.navList})))},D=a(25),S=a.n(D),N=a(35),R=a.n(N),A=function(e){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h3",null,e.title)),o.a.createElement("hr",null),o.a.createElement("div",{className:R.a.ContentBox},e.content.map((function(e){return o.a.createElement("p",null,e)}))))},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:"About Me",content:["I'm Edwin Agbenyega, a software developer","I've been working as a data analyst for the past three years and have an even greater passion for web development!","I enjoy every step of the full stack development process and I am currently looking to find a job that would enable me to grow as a developer"]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(A,{title:this.state.title,content:this.state.content})}}]),t}(n.Component),L=a(15),P=a.n(L),T=a(14),M=a(38),F=a(64),B=a(65),H=a(66),J=a(67),U=[{src:"https://via.placeholder.com/1500x900/DDDDFF/000000?text=This+is+a+placeholder+for+the+project",altText:"Slide 1",caption:"Hangout@229"},{src:"https://via.placeholder.com/1500x900/DDFFDD/000000?text=This+is+a+placeholder+for+the+project",altText:"Slide 2",caption:"Lippia Tea"},{src:"https://via.placeholder.com/1500x900/DDDDCC/000000?text=This+is+a+placeholder+for+the+project",altText:"Slide 3",caption:"Company Catalog"}],G=(n.Component,function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={projects:[{id:0,img:{src:"https://photos.app.goo.gl/3GmDE6pjU5p34aDS8",alt:"Hangout@229"},title:"Hangout@229"},{id:1,img:{src:"https://photos.app.goo.gl/3GmDE6pjU5p34aDS8",alt:"Lippia Tea"},title:"Lippia Tea"}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{height:"56vh",padding:"2vh",backgroundColor:"rgba(0,0,0,0.05)"}},o.a.createElement("p",null,o.a.createElement("italic",null,"Unfortunately all my projects are currently being redone and will be properly displayed later!!")))}}]),t}(n.Component)),V=a(17),X=a.n(V),Q=a(68),W=a(69),Y=function(e){return o.a.createElement("div",{className:X.a.ResumeSection},o.a.createElement("h4",null,e.title),o.a.createElement("hr",null),e.content.map((function(e){return o.a.createElement(n.Fragment,null,o.a.createElement(Q.a,null,o.a.createElement(W.a,{md:"3",className:X.a.contentTitle},e.title),o.a.createElement(W.a,{md:"9"},e.details)))})))},q=function(e){var t=X.a.Resume+" "+v.a.Dosis;return o.a.createElement("div",{className:X.a.ResumeBox},o.a.createElement("div",{className:t},e.page.map((function(e){return o.a.createElement(Y,{title:e.title,content:e.content,key:e.id})}))))},z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={resume:[{id:0,type:"section",title:"Edwin Agbenyega",content:[{details:"https://www.linkedin.com/in/eddybanks03"},{details:"https://github.com/eddybanks"},{details:"eddybanks03@gmail.com"}]},{id:1,type:"section",title:"Summary",content:[{details:"Software Developer with experience in rails web application development, database management as well as data visualization and analytics. Team player with good problem solving skills and a yearning to learn and acquire new skills."}]},{id:2,type:"section",title:"Skills",content:[{title:"Programming Languages: ",details:"Python, Ruby, Java, C, C++, R (tidyverse)"},{title:"Web Development: ",details:"Ruby on rails, HTML5, CSS3, JQuery, React.js, Bootstrap, Webpack, GraphQL"},{title:"Database Management and Data Analytics: ",details:"PostgreSQL, Oracle, MySQL, MongoDB, Tableau"},{title:"Project Management & Version Control Tools: ",details:"Slack, Trello, Confluence, Git, GitHub"}]},{id:3,type:"section",title:"Work Experience",content:[{title:"Institutional Researcher: ",details:"University of New Mexico (Feb 27, 2017 ~ present)",start_date:"Feb 27, 2017",end_date:"Ongoing"},{title:"Research Assistant: ",details:"University of New Mexico (Feb 11, 2015 ~ Dec 16, 2016)",start_date:"Feb 11, 2015",end_date:"Dec 16, 2016"}]},{id:4,type:"section",title:"Education",content:[{title:"MSc. Computer Engineering: ",details:"University of New Mexico (Jan 15, 2015 ~ Jul 31, 2017)",start_date:"Jan 15, 2015",end_date:"Jul 31, 2017"},{title:"BSc. Computer Engineering: ",details:"Chungnam National University (Mar 11, 2011 ~ Feb 25, 2015)",start_date:"Mar 11, 2011",end_date:"Feb 25, 2015"}]},{id:5,type:"section",title:"Languages",content:[{title:"English: ",details:"Native"},{title:"Korean: ",details:"Higher Intermediate / Professional"},{title:"Japanese: ",details:"Lower Intermediate / Conversational"},{title:"French: ",details:"Lower Intermediate / Conversational"}]},{id:5,type:"section",title:"References",content:[{details:"References available upon request!"}]}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(q,{page:this.state.resume})}}]),t}(n.Component),K=a(37),$=a.n(K),Z=function(e){return o.a.createElement("div",{className:$.a.Contact},o.a.createElement(Q.a,null,o.a.createElement(W.a,null,o.a.createElement("p",null,"Still working on contact stuff!! :-)"),o.a.createElement("p",null,"For now, you can contact me via my linkedin or email: "),o.a.createElement("p",null,o.a.createElement("a",{href:e.contactInfo.linkedin,target:"_blank"},e.contactInfo.linkedin)),o.a.createElement("p",null,e.contactInfo.email))))},ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={contactInfo:{linkedin:"https://www.linkedin.com/in/eddybanks03",github:"https://www.github.com/eddybanks",email:"eddybanks03@gmail.com"}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(Z,{contactInfo:this.state.contactInfo})}}]),t}(n.Component),te=(a(57),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={navList:[{id:0,path:"/",title:"About",component:I},{id:1,path:"/projects",title:"Projects",component:G},{id:2,path:"/resume",title:"Resume",component:z},{id:3,path:"/contact",title:"Contact",component:ee}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:S.a.App},o.a.createElement(O,{title:"Software Developer",name:"Edwin Agbenyega",navList:this.state.navList}),o.a.createElement("section",{className:S.a.Section},o.a.createElement(d.a,null,this.state.navList.map((function(e){return o.a.createElement(h.a,{exact:!0,path:e.path,component:e.component,key:e.id})}))))))}}]),t}(n.Component));a(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.2bd6f6e8.chunk.js.map