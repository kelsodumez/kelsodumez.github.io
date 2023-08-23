(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0f40":function(e,t,n){"use strict";var i=n("471e"),a=n.n(i);a.a},1279:function(e,t,n){"use strict";var i=n("e8e2"),a=n.n(i);a.a},"1ba2":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Resume")]),n("div",{staticClass:"paragraph"},[e._v(" I'm "),n("strong",[e._v("Kelso du Mez")]),e._v(", a second-year Game Design student at the University of Canterbury. "),n("br"),e._v(" Feel free to "),n("router-link",{attrs:{to:"/contact"}},[e._v("contact me")]),e._v(". "),n("br"),e._m(0)],1),e._m(1),n("div",{staticStyle:{clear:"both"}}),e._m(2)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[n("div",{staticStyle:{clear:"both"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"photo"},[n("img",{attrs:{src:"img/resume-photo.png",height:"224",width:"224",alt:"Kelso du Mez"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"full-content"},[n("h2",[e._v("Education")]),n("h3",[e._v("University of Canterbury (2020 - present)")]),n("h4",[e._v("Bachelors of Product Design")]),n("div",[e._v("Majoring in Applied Immersive Game Design")])])}],s=n("2b0e"),r=s["a"].extend({name:"Resume",components:{}}),o=r,l=(n("6a6a"),n("2877")),c=Object(l["a"])(o,i,a,!1,null,"10ef357e",null);t["default"]=c.exports},"1e66":function(e,t,n){"use strict";var i=n("dec8"),a=n.n(i);a.a},"22fb":function(e,t,n){"use strict";var i=n("2541"),a=n.n(i);a.a},2541:function(e,t,n){},"33e6":function(e,t,n){},"416f":function(e,t,n){},"471e":function(e,t,n){},"4d97":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Projects")]),n("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" The following are some projects I've made or heavily contributed to. ")]),n("ProjectsList",{attrs:{projects:e.projects}}),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"20px"}},[e._v(" There is more to see on "),n("a",{attrs:{target:"_blank",href:"https://keslo.itch.io"}},[e._v("itch.io")])])}],s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[n("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(n){return e.showDetails(t)}}},[n("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),n("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[n("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),n("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.visible?n("div",[n("div",{staticClass:"overlay"}),n("div",{staticClass:"dialog",style:{"background-color":e.color}},[n("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),n("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[n("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),n("div",{staticClass:"dialog-content"},[n("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),n("div",{staticClass:"dialog-bottom"},[n("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},c=[],u=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),p=u,d=(n("1e66"),n("2877")),m=Object(d["a"])(p,l,c,!1,null,"e66acff8",null),h=m.exports,g=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:h},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),v=g,f=(n("5935"),Object(d["a"])(v,r,o,!1,null,"190958aa",null)),b=f.exports,_=function(){function e(e,t,n,i,a,s,r){void 0===a&&(a="#000000"),void 0===s&&(s=!1),void 0===r&&(r=!1),this.id=e,this.name=t,this.htmlDescription=i,this.iconUrl=n,this.isHigh=s,this.isWide=r,this.accentColor=a}return e}(),y=_,w=[new y("project-1","Coldstar","img/projects/planet-view.png",'\n    <div class="paragraph">\n     <strong>Coldstar</strong> is a immersive VR escape room I made with a colleague where the player must repair their ship before it hurtles into the star it orbits.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/9O4_VzIwzgI" title="Coldstar Trailer" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        <ul>\n        <li><b>Genre:</b> VR, Puzzle, Horror</li>\n        <li><b>Engine:</b> Unity</li>\n        <li><b>Team Size:</b> 2</li>\n        <li><b>Awards & Recognition:</b> Voted second best escape-room by School of Product Design faculty and students at UC (2023)</li>\n        </ul>   \n        My Roles and Responsibilities :\n        <ul>\n\n        <li>Level Design</li>\n        <ul>\n        <li>Designed the layout and puzzles of the engine bay, and implemented it into Unity</li>\n        </ul>\n\n        <li>3D Modelling</li>\n        <ul>\n        <li>Utilised Blender to create several key models within Coldstar, including the Engine, Screwdriver, Cold Gun, etc.</li>\n        </ul>\n\n        <li>Programming</li>\n        <ul>\n        <li>Made use of key design patterns to implement several scripts; Such as shooting the cold gun, swiping the access card, etc.</li>\n        </ul>\n        </ul>\n\n        <div class="notice">\n        Download a free copy on <a href="https://olivercoates1.itch.io/coldstar" target="_blank">itch.io</a>.\n        Source code is available on <a href="https://github.com/oliver-coates/Coldstar" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/planet-view.png" height=200 width=1068 alt="Cockpit View"/>\n        <img class="phone-screenshot" src="img/projects/engine-screenshot.png" height=200 width=1068 alt="Engine Bay"/>\n\n\n    </div>\n    ',"#cd8965",!0),new y("project-2","Tuhua","img/projects/tuhuacover.png",'\n    <div class="paragraph">\n        <strong>Tuhua</strong> is a serious text-based game made for a client project where the player must work through a series of small narratives in order to maximise the amount of lives they save in a volcanic emergency. The main intention of this game is to educate about the appropriate actions to take in the event of an eruption.\n    </div>\n\n    <div class="paragraph center">\n    <iframe class="youtube" src="https://www.youtube.com/embed/B3HxeH0Z9Ok" title="Tuhua demo" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        <ul>\n        <li><b>Genre:</b> Text-based, Educational, Narrative</li>\n        <li><b>Engine:</b> Unity WebGL</li>\n        <li><b>Team Size:</b> 6</li>\n        </ul>   \n    </div>\n\n    <div class="paragraph">\n    Skills used:\n    <ul>\n    <li>Made key design decisions throughout production</li>\n    <li>Was writer for the project, with some editing by another group member\n    </ul>\n\n    <div class="notice">\n        A WebGL build of the game is available on <a href="https://olivercoates1.itch.io/tuhua" target="_blank">Itch</a>.\n    </div>\n    </div>\n\n    <div class="paragraph center">\n    <img class="pc-screenshot" src="img/projects/couplewindow.png" alt="View from window of Tuhua\'s eruption" />\n    <img class="pc-screenshot" src="img/projects/garage.png" alt="Jeremy looking for jumper cables" />\n    <img class="pc-screenshot" src="img/projects/exterior.png" alt="Jeremy picking up grant" />\n    <img class="pc-screenshot" src="img/projects/emergencyvehicle.png" alt="Firetrucks passing Jeremy & Grant" />\n    <img class="pc-screenshot" src="img/projects/ashcloud.png" alt="Jeremy & Grant driving through ash" />\n    <img class="pc-screenshot" src="img/projects/eruption.png" alt="Tuhua erupting" />\n\n    </div>\n    ',"#DA4756",!0),new y("project-3","Star Jumper","img/projects/starjumper.png",'\n    <div class="paragraph">\n        <strong>Star Jumper</strong> is an attempt at using procedural generation that i created with some friends in year 13 of High School\n    </div>\n\n    <div class="paragraph">\n        <ul>\n        <li><b>Genre:</b> Rogue-Like, Hack & Slash</li>\n        <li><b>Engine:</b> Unity</li>\n        <li><b>Team Size:</b> 3</li>\n        </ul>   \n    </div>\n\n    <div class="paragraph">\n        My Roles and Responsibilities :\n        <ul>\n\n        <li>Level Design</li>\n        <ul>\n        <li>Designed the layout of most of the rooms used in the procedurally generated dungeon</li>\n        </ul>\n\n        <li>Programming</li>\n        <ul>\n        <li>Implemented a primitive form of procedural generation that populated a 2d array with room objects then placed them into the level</li>\n        <li>Implemented Enemy AI pathfinding and behaviour</li>\n        <li>Implemented basic character controller that allowed player to melee attack and dash \n        </ul>\n        </ul>\n\n        <div class="notice">\n        Download a free copy on <a href="https://keslo.itch.io/star-jumper" target="_blank">itch.io</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/starjumper.png" alt="screenshot" />\n\n    </div>\n    ',"#383838",!0)],j=s["a"].extend({name:"GameProjects",components:{ProjectsList:b},data:function(){return{projects:w}}}),k=j,C=Object(d["a"])(k,i,a,!1,null,null,null);t["default"]=C.exports},5935:function(e,t,n){"use strict";var i=n("416f"),a=n.n(i);a.a},"6a6a":function(e,t,n){"use strict";var i=n("33e6"),a=n.n(i);a.a},"8cdb":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"http-404"},[e._v("404 :<")])},a=[],s=(n("1279"),n("2877")),r={},o=Object(s["a"])(r,i,a,!1,null,"7c256de2",null);t["default"]=o.exports},b8fa:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Let's get in touch")]),n("div",{staticStyle:{"margin-bottom":"40px"}},[e._v("I'm looking for an internship!"),n("br"),e._v("Feel free to contact me about any opportunity")]),n("ul",[n("li",[n("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),n("a",{attrs:{href:"mailto:kelsodumez@email.com",target:"_blank"}},[e._v("kelsodumez@gmail.com")])]),n("li",[n("i",{staticClass:"fa fa-github fa-lg fa-fw"}),n("a",{attrs:{href:"https://github.com/kelsodumez",target:"_blank"}},[e._v("github.com/kelsodumez")])]),n("li",[n("i",{staticClass:"fa fa-gamepad fa-lg fa-fw"}),n("a",{attrs:{href:"https://keslo.itch.io",target:"_blank"}},[e._v("keslo.itch.io")])])])])}],s=(n("0f40"),n("2877")),r={},o=Object(s["a"])(r,i,a,!1,null,"af0ca41c",null);t["default"]=o.exports},dec8:function(e,t,n){},e8e2:function(e,t,n){},f820:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-bottom":"80px"}},[n("h1",[e._v("Hello!")]),n("div",{staticClass:"paragraph"},[e._m(0),n("div",{staticStyle:{"margin-top":"40px"}},[e._v("I'm "),n("strong",[e._v("currently looking for work experience")]),e._v(", specifically programming positions, but am open to any and all offers. You can reach me at "),n("a",{attrs:{href:"mailto:kelsodumez@gmail.com"}},[e._v("kelsodumez@gmail.com")]),e._v(" or "),n("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(".")],1)]),e._m(1),n("div",{staticStyle:{clear:"both"}})])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" I'm "),n("strong",[e._v("Kelso du Mez")]),e._v(", a second year game design student at the University of Canterbury."),n("br"),e._v(" Game Development is a strong passion of mine, with most of my expertise lying in gameplay programming in Unity, I also have experience working in VR. "),n("div",[e._v("In the next 5 years I aspire to create a complete and moderately successful indy-game.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"photo"},[n("img",{attrs:{src:"img/resume-photo.png",height:"224",width:"224",alt:"Kelso du Mez"}})])}],s=(n("22fb"),n("2877")),r={},o=Object(s["a"])(r,i,a,!1,null,"4f7d05df",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.a4f22ab5.js.map