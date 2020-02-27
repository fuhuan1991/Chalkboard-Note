(this.webpackJsonpjs=this.webpackJsonpjs||[]).push([[0],{122:function(e,t,a){e.exports=a(213)},127:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},186:function(e,t,a){},189:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),s=(a(127),a(128),a(14)),l=a(13),c=a(17),u=a(15),m=a(18),h=(a(129),a(130),a(47)),d=a(216),p=a(20),f=a(8),g=a(40),v=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,e.json().then((function(e){t.error=e})),Promise.reject(t)},b=function(){var e=document.cookie.match(/jwt_token=([^;]*)[;]?/);return e.length>=2?e[1]:""},E=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},y={color:"#e2231a"},S={marginBottom:"10px",width:"350px",display:"block"},w=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"big_title"},"Log in"),r.a.createElement(h.a,{initialValues:{name:"",password:""},validate:function(e){var t={};return e.name||(t.name="name required"),e.password||(t.password="password required"),t},onSubmit:function(t,a){var n=a.setSubmitting;(function(e){var t=e.name,a=e.password,n="/api/users/login?name=".concat(t,"&password=").concat(a);return Object(g.a)(n,{method:"GET"}).then(v)})(t).then((function(t){e.onSuccess(t)})).catch((function(t){e.onFailure(t),n(!1)}))}},(function(t){var a=t.values,n=t.errors,i=t.touched,o=t.handleChange,s=t.handleBlur,l=t.handleSubmit,c=t.isSubmitting,u=t.submitForm,m=t.isValid;return r.a.createElement("form",{onSubmit:l},r.a.createElement("span",{className:"chalkboard_font"},"name:")," ",n.name&&i.name&&r.a.createElement("span",{style:y},n.name),r.a.createElement(d.a,{style:S,name:"name",onChange:o,onBlur:s,value:a.name,placeholder:"please insert user name"}),r.a.createElement("span",{className:"chalkboard_font"},"password:")," ",n.password&&i.password&&r.a.createElement("span",{style:y},n.password),r.a.createElement(d.a,{style:S,name:"password",onChange:o,onBlur:s,value:a.password,placeholder:"please insert password"}),r.a.createElement("div",null,r.a.createElement(p.a,{onClick:function(){return e.OnSitchToSignup()},style:{marginRight:"10px"}},r.a.createElement(f.a,{type:"left"})," Go to Sign up"),r.a.createElement(p.a,{onClick:function(){return u()},type:"primary",disabled:c||E(i)||!m},"Login ",r.a.createElement(f.a,{type:"right"}))))})))},_=a(219),N=function(e,t,a){_.a[e]({message:t,description:a})},O=function(e,t){return N("success",e,t)},k=function(e,t){return N("error",e,t)},j={color:"#e2231a"},C={marginBottom:"10px",width:"350px",display:"block"},x=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"big_title"},"Sign up"),r.a.createElement(h.a,{initialValues:{name:"",password:"",email:""},validate:function(e){var t,a={};return e.name?e.name.length>100&&(a.name="name should be shorter than 100 characters"):a.name="name required",e.password?e.password.length>20&&(a.password="password should be shorter than 20 characters"):a.password="password required",e.email?(t=e.email,/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t)?e.email.length>100&&(a.email="email E-mail should be shorter than 100 characters"):a.email="invalid E-mail address"):a.email="E-mail required",a},onSubmit:function(t,a){var n=a.setSubmitting;(function(e){return Object(g.a)("api/users",{headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+b()}),method:"POST",body:JSON.stringify(e),mode:"cors",cridentials:"include"}).then(v)})(t).then((function(){e.onSuccess()})).catch((function(t){e.onFailure(t)})).finally((function(){n(!1)}))}},(function(t){var a=t.values,n=t.errors,i=t.touched,o=t.handleChange,s=t.handleBlur,l=t.handleSubmit,c=t.isSubmitting,u=t.submitForm,m=t.isValid;return r.a.createElement("form",{onSubmit:l},r.a.createElement("span",{className:"chalkboard_font"},"name:")," ",n.name&&i.name&&r.a.createElement("span",{style:j},n.name),r.a.createElement(d.a,{style:C,name:"name",onChange:o,onBlur:s,value:a.name,placeholder:"please insert user name"}),r.a.createElement("span",{className:"chalkboard_font"},"password:")," ",n.password&&i.password&&r.a.createElement("span",{style:j},n.password),r.a.createElement(d.a,{style:C,name:"password",onChange:o,onBlur:s,value:a.password,placeholder:"please insert password"}),r.a.createElement("span",{className:"chalkboard_font"},"email:")," ",n.email&&i.email&&r.a.createElement("span",{style:j},n.email),r.a.createElement(d.a,{style:C,name:"email",onChange:o,onBlur:s,value:a.email,placeholder:"please insert email"}),r.a.createElement("div",null,r.a.createElement(p.a,{onClick:function(){return e.OnSitchToLogin()},style:{marginRight:"10px"}},r.a.createElement(f.a,{type:"left"}),"Go to Login"),r.a.createElement(p.a,{onClick:function(){return u()},type:"submit",disabled:c||E(i)||!m},"Sign up",r.a.createElement(f.a,{type:"right"}))))})))},I=a(59),A=(a(186),a(217)),F=a(51),T=a(218),X={color:"#e2231a",marginLeft:"12px",position:"absolute",left:"27px"},L=function(e){var t=function(){var t;(t=e.noteId,Object(g.a)("api/notes/".concat(t),{method:"DELETE"}).then(v)).then((function(){e.onCancel(),O("Note Deleted"),e.onDeleteSuccess()})).catch((function(e){k("Error")}))};return r.a.createElement("div",{className:"node_form"},r.a.createElement(h.a,{initialValues:{title:e.title,description:e.description},validate:function(e){var t={};return e.title?e.title.length>100&&(t.title="title should be shorter than 100 characters"):t.title="title required",e.description?e.description.length>1e3&&(t.description="description should be shorter than 1000 characters"):t.description="description required",t},onSubmit:function(t,a){var n=a.setSubmitting;e.noteId?function(e){return Object(g.a)("api/notes",{headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+b()}),mode:"cors",cridentials:"include",method:"PUT",body:JSON.stringify(e)}).then(v)}(Object(F.a)({},t,{userId:e.userId,noteId:e.noteId})).then((function(){e.onSuccess(),n(!1)})).catch((function(t){e.onFailure(t),n(!1)})):function(e){var t=e.userId;return Object(g.a)("api/notes/".concat(t),{headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+b()}),mode:"cors",cridentials:"include",method:"POST",body:JSON.stringify(e)}).then(v)}(Object(F.a)({},t,{userId:e.userId})).then((function(){e.onSuccess(),n(!1)})).catch((function(t){e.onFailure(t),n(!1)}))}},(function(a){var n=a.values,i=a.errors,o=a.touched,s=a.handleChange,l=a.handleBlur,c=a.handleSubmit,u=a.isSubmitting,m=a.submitForm,h=a.isValid;return r.a.createElement("form",{onSubmit:c,className:"inner_form"},r.a.createElement(d.a,{name:"title",onChange:s,onBlur:l,value:n.title,placeholder:"please insert title"}),i.title&&o.title&&r.a.createElement("span",{style:Object(F.a)({},X,{top:"51px"})},i.title),r.a.createElement(d.a.TextArea,{name:"description",onChange:s,onBlur:l,value:n.description,placeholder:"please insert description"}),i.description&&o.description&&r.a.createElement("span",{style:Object(F.a)({},X,{top:"658px",width:"300px"})},i.description),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},e.noteId&&r.a.createElement(T.a,{title:"Are you sure\uff1f",okText:"Yes",cancelText:"No",onConfirm:t},r.a.createElement(p.a,{type:"danger",onClick:function(){},style:{marginRight:"10px"}},"Delete")),r.a.createElement(p.a,{onClick:function(){return m()},type:"primary",style:{marginRight:"10px"},disabled:u||E(o)&&!e.noteId||!h},e.noteId?"Update":"Save"),r.a.createElement(p.a,{onClick:function(){return e.onCancel()},style:{marginRight:"10px"}},"Cancel")))})))},B=function(e){function t(e){var a;return Object(s.a)(this,t),console.log("desktop created"),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).fetchAllNotes=function(e){(function(e){return Object(g.a)("api/notes/getUserNotes/".concat(e),{method:"GET"}).then(v)})(e).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({noteArray:e})})).catch((function(e){k("error",e.error.message)}))},a.renderNoteArray=function(e){return 0===e.length?r.a.createElement("span",{className:"chalkboard_font empty_msg"},"No notes"):e.map((function(e){return r.a.createElement("div",{note_id:e.noteId,key:e.noteId,onClick:a.openDetailView.bind(Object(I.a)(a),e.noteId),className:"note_cell"},r.a.createElement("div",{className:"title"},e.title),r.a.createElement("div",{className:"description"},e.description))}))},a.openDetailView=function(e){var t=a.getNoteInfoById(a.state.noteArray,e);t?a.setState({detailView:!0,targetNote:t}):console.log("can not get note with id "+e)},a.getNoteInfoById=function(e,t){var a=e.filter((function(e){return e.noteId===t}));return a.length>0?a[0]:null},a.onAddNewNote=function(){a.setState({target:null,targetNote:null,detailView:!0})},a.state={noteArray:[],detailView:!1,targetNote:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchAllNotes(this.props.userId)}},{key:"render",value:function(){var e=this,t=this.renderNoteArray(this.state.noteArray);return r.a.createElement("div",{className:"desktop"},r.a.createElement(A.a,{visible:this.state.detailView,footer:null,closable:!1,width:600,wrapClassName:"node_modal"},r.a.createElement(L,{key:Math.random(),title:this.state.targetNote?this.state.targetNote.title:"",description:this.state.targetNote?this.state.targetNote.description:"",userId:this.props.userId,noteId:this.state.targetNote?this.state.targetNote.noteId:"",onSuccess:function(){e.fetchAllNotes(e.props.userId),O("Note updated"),e.setState({detailView:!1,targetNote:null})},onFailure:function(e){k("Error")},onDeleteSuccess:function(){e.fetchAllNotes(e.props.userId),e.setState({detailView:!1,targetNote:null})},onCancel:function(){e.setState({detailView:!1,targetNote:null})}})),r.a.createElement("h1",{className:"big_title"},"Notes"),r.a.createElement(p.a,{type:"primary",onClick:function(){return e.onAddNewNote()}},r.a.createElement(f.a,{type:"plus-circle"}),"Add new note"),r.a.createElement("div",{className:"note_container"},t),r.a.createElement(p.a,{type:"primary",onClick:function(){return e.props.onLogout()}},r.a.createElement(f.a,{type:"left"}),"log out"))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onLoginSucc=function(e){e.json().then((function(e){document.cookie="jwt_token=".concat(e.jwt),a.setState({userId:e.userId}),O("Login successful","Welcom back"),a.switchToStage("DESKTOP")()})).catch((function(){k("Login failed","invalid user")}))},a.onLoginFail=function(e){k("Login failed",e.error.message)},a.onSignupSucc=function(){O("Sign up successful","Please log in"),a.switchToStage("LOGIN")()},a.onSignupFail=function(e){console.log(e,e.error),k("Sign up failed",e.error.message)},a.switchToStage=function(e){return function(){a.setState({currentStage:e})}},a.onLogout=function(){a.setState({currentStage:"LOGIN",userId:""})},a.state={currentStage:"LOGIN",userId:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"note_management"},"LOGIN"===this.state.currentStage&&r.a.createElement(w,{onSuccess:this.onLoginSucc,onFailure:this.onLoginFail,OnSitchToSignup:this.switchToStage("SIGNUP")}),"SIGNUP"===this.state.currentStage&&r.a.createElement(x,{onSuccess:this.onSignupSucc,onFailure:this.onSignupFail,OnSitchToLogin:this.switchToStage("LOGIN")}),"DESKTOP"===this.state.currentStage&&r.a.createElement(B,{userId:this.state.userId,onLogout:this.onLogout}))}}]),t}(n.Component),M=(a(189),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).degree=Math.floor(360*Math.random()),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={};return e=this.props.available?"square available":"X"===this.props.chess_pieces?"square head":"O"===this.props.chess_pieces?"square tail":"square",r.a.createElement("button",{className:e,onClick:this.props.handleClick},r.a.createElement("div",{className:"inner",style:{transform:"rotate(".concat(this.degree,"deg)")}}))}}]),t}(r.a.Component)),P=a(33),z=a.n(P),q=z.a.size;q<8?(console.log("minium size is 8*8"),q=8):q>16&&(console.log("maximum size is 16*16"),q=16),q%2!==0&&(console.log("length must be even"),q++);var D=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderSquare",value:function(e,t){var a=this;return r.a.createElement(M,{chess_pieces:this.props.currentState[e][t],available:this.props.currentAvailabeState[e][t],handleClick:function(){return a.props.handleClick(e,t)},key:100*e+t})}},{key:"generateSquares",value:function(e){for(var t=[],a=0;a<=q-1;a++)t.push(this.renderSquare(e,a));return t}},{key:"generateRows",value:function(){for(var e=[],t=0;t<=q-1;t++)e.push(r.a.createElement("div",{className:"board-row",key:"R"+t},this.generateSquares(t)));return e}},{key:"generateFinishPopup",value:function(){var e=this.props.number_of_O>this.props.number_of_X?"tail":"head";return r.a.createElement("div",{className:"mask"},r.a.createElement("div",{className:"finish_popup"},r.a.createElement("div",{className:e}),r.a.createElement("span",null,e," is the winner!")))}},{key:"generateInitialPopup",value:function(){var e=this;return r.a.createElement("div",{className:"mask"},r.a.createElement("div",{className:"finish_popup"},r.a.createElement("div",{className:"selection",onClick:function(){e.props.handleModeSelection(!0)}},"Single Player"),r.a.createElement("div",{className:"selection",onClick:function(){e.props.handleModeSelection(!1)}},"Two Players")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"board"},this.props.gameFinished&&this.generateFinishPopup(),this.props.initialization&&this.generateInitialPopup(),this.generateRows())}}]),t}(r.a.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"generateCoin",value:function(e,t){for(var a="X"===e?"head":"tail",n=[],i=60;t>0;)n.push(r.a.createElement("div",{className:a,style:{bottom:i+"px"},key:i})),i+=10,t--;return n}},{key:"render",value:function(){var e=this.props.x_number,t=this.props.o_number;return r.a.createElement("div",{className:"scores"},r.a.createElement("div",{style:{height:"100%",width:"50%"}},this.generateCoin("X",e),r.a.createElement("div",{style:{position:"absolute",bottom:"0px",width:"80px",textAlign:"center"}},e)),r.a.createElement("div",{style:{height:"100%",width:"50%"}},this.generateCoin("O",t),r.a.createElement("div",{style:{position:"absolute",bottom:"0px",width:"80px",textAlign:"center"}},t)))}}]),t}(r.a.Component),G=a(119),J={X:"O",O:"X",head:"tail",tail:"head"},U=function(e){return J[e]},W=z.a.size;W<8?(console.log("\u6700\u5c0f\u5c3a\u5bf8\u4e3a8*8"),W=8):W>16&&(console.log("\u6700\u5927\u5c3a\u5bf8\u4e3a16*16"),W=16),W%2!==0&&(console.log("\u671f\u76fc\u5c3a\u5bf8\u5fc5\u987b\u4e3a\u5076\u6570"),W++);var H=[[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]],Z={SearchForReversiblePieces:function(e,t,a,n){var r,i=[],o=[e,t],s=U(a),l=!0,c=!1,u=void 0;try{for(var m,h=H[Symbol.iterator]();!(l=(m=h.next()).done);l=!0){var d=m.value,p=[].concat(o),f=[],g=[];for(p[0]+=d[0],p[1]+=d[1];!((r=p)[0]<0||r[0]>=W)&&!(r[1]<0||r[1]>=W)&&null!==n[p[0]][p[1]];){if(n[p[0]][p[1]]===s){f.splice.apply(f,[f.length,0].concat(g));break}g.push(Object(G.a)(p)),p[0]+=d[0],p[1]+=d[1]}i.splice.apply(i,[i.length,0].concat(f))}}catch(v){c=!0,u=v}finally{try{l||null==h.return||h.return()}finally{if(c)throw u}}return i},searchAvailable:function(e,t){for(var a=!0,n=Array(W).fill(null),r=[],i=0;i<=W-1;i++)r[i]=n.slice(0);for(var o=W-1;o>=0;o--)for(var s=W-1;s>=0;s--){this.SearchForReversiblePieces(o,s,e,t).length>0&&!t[o][s]&&(r[o][s]=!0,a=!1)}return{availableState:r,noMoreMove:a}},CaculatePoints:function(e){for(var t={X:0,O:0},a=W-1;a>=0;a--)for(var n=W-1;n>=0;n--)"X"===e[a][n]&&t.X++,"O"===e[a][n]&&t.O++;return t}},K=z.a.size;K<8?(console.log("\u6700\u5c0f\u5c3a\u5bf8\u4e3a8*8"),K=8):K>16&&(console.log("\u6700\u5927\u5c3a\u5bf8\u4e3a16*16"),K=16),K%2!==0&&(console.log("\u671f\u76fc\u5c3a\u5bf8\u5fc5\u987b\u4e3a\u5076\u6570"),K++);var $=function(e,t){for(var a=[],n=0,r=null,i=K-1;i>=0;i--)for(var o=K-1;o>=0;o--){var s=Z.SearchForReversiblePieces(i,o,e,t);if(s.length>0&&!t[i][o]){var l=s.length;Q(i,o)?l=1/0:Y(i,o)&&(l*=2),l>n&&(r=[i,o],n=l),a.push({pos:[i,o],value:l})}}return r},Q=function(e,t){return 0===e&&0===t||(0===e&&t===K-1||(e===K-1&&0===t||e===K-1&&t===K-1))},Y=function(e,t){return 0===e||(e===K-1||(0===t||t===K-1))},ee=z.a.size;ee<8?(console.log("minium size is 8*8"),ee=8):ee>16&&(console.log("maximum size is 16*16"),ee=16),ee%2!==0&&(console.log("length must be even"),ee++);var te=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleModeSelection=function(e){a.setState({_single:e,_initialization:!1})};var n=a.initialCurrentState();return a.state={_initialization:!0,_single:!0,_currentState:n,_currentAvailabeState:a.initialCurrentAvailabeState(n),_isForX:!1,_numberO:2,_numberX:2,_gameFinished:!1,_doubleMove:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"initialCurrentState",value:function(){for(var e=Array(ee).fill(null),t=[],a=0;a<=ee-1;a++)t[a]=e.slice(0);return t[ee/2-1][ee/2-1]="X",t[ee/2-1][ee/2]="O",t[ee/2][ee/2-1]="O",t[ee/2][ee/2]="X",t}},{key:"initialCurrentAvailabeState",value:function(e){for(var t=Array(ee).fill(null),a=[],n=0;n<=ee-1;n++)a[n]=t.slice(0);for(var r=Z.searchAvailable("X",e).availableState,i=0;i<=ee-1;i++)for(var o=0;o<=ee-1;o++)r[i][o]&&(a[i][o]=!0);return a}}]),Object(l.a)(t,[{key:"handleClick",value:function(e,t){return this.state._currentState[e][t]?(console.log("occupied!"),!1):this.state._gameFinished?(console.log("game is over!"),!1):this.state._isForX&&this.state._single?(console.log("not your turn!"),!1):void(this.state._currentAvailabeState[e][t]&&this.land(e,t,this.state._single))}},{key:"land",value:function(e,t,a){var n,r,i,o=this,s=this.state._isForX?"X":"O",l=this.state._isForX?"O":"X",c=this.state._currentState,u=!1;n=Z.SearchForReversiblePieces(e,t,l,c),c[e][t]=s;for(var m=n.length-1;m>=0;m--){var h=n[m][0],d=n[m][1];c[h][d]=s}r=Z.searchAvailable(s,c),i=Z.CaculatePoints(c);var p=!this.state._isForX,f=r.availableState,g=!1;if(i.X+i.O===64)u=!0,a=!1;else if(r.noMoreMove){var v=Z.searchAvailable(U(s),c);v.noMoreMove?(u=!0,a=!1):this.state._single?this.state._isForX?(console.log("computer double move"),a=!0,p=this.state._isForX,f=v.availableState,g=!0):(console.log("human double move"),a=!1,p=this.state._isForX,f=v.availableState,g=!0):(p=this.state._isForX,f=v.availableState,g=!0)}a&&new Promise((function(e,t){setTimeout((function(){return e()}),1e3)})).then((function(){o.computerMove()}));this.setState({_currentState:c,_currentAvailabeState:f,_isForX:p,_numberO:i.O,_numberX:i.X,_gameFinished:u,_doubleMove:g})}},{key:"clearBoard",value:function(){var e=this.initialCurrentState(),t=this.initialCurrentAvailabeState(e);this.setState({_initialization:!0,_single:!0,_currentState:e,_currentAvailabeState:t,_isForX:!1,_numberO:2,_numberX:2,_gameFinished:!1})}},{key:"computerMove",value:function(){var e=$("O",this.state._currentState);this.land(e[0],e[1],!1)}},{key:"render",value:function(){var e=this,t="";if(this.state._gameFinished)t=this.state._numberO>this.state._numberX?"winner is tail!":this.state._numberO<this.state._numberX?"winner is head!":"want a second round?";else if(this.state._doubleMove){var a=this.state._isForX?"head":"tail",n=this.state._isForX?"tail":"head";t="".concat(n," has no moves, so ").concat(a," moves again.")}else t="Current player: "+(this.state._isForX?"head":"tail");return window.move=function(){var t=$("O",e.state._currentState);e.land(t[0],t[1],!1)},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"status white_font"},"If you play alone, you play as tail and you move first, computer play as head."),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement("div",{className:"status white_font",style:{display:"inline-block"}},t),r.a.createElement("span",{className:this.state._isForX?"coin_icon head":"coin_icon tail"}),r.a.createElement(D,{initialization:this.state._initialization,currentState:this.state._currentState,currentAvailabeState:this.state._currentAvailabeState,gameFinished:this.state._gameFinished,number_of_O:this.state._numberO,number_of_X:this.state._numberX,handleClick:function(t,a){return e.handleClick(t,a)},handleModeSelection:this.handleModeSelection}),r.a.createElement(V,{x_number:this.state._numberX,o_number:this.state._numberO}),r.a.createElement("div",{className:"status white_font"},'number of "tail"s: ',this.state._numberO),r.a.createElement("div",{className:"status white_font"},'number of "head"s: ',this.state._numberX)),r.a.createElement("button",{className:"clear",onClick:function(){return e.clearBoard()}},"RESET")))}}]),t}(r.a.Component),ae=a(215),ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).next=function(){a.carousel.next()},a.previous=function(){a.carousel.prev()},a.sliderEnter=function(){a.setState({mouseOverSlide:!0})},a.sliderLeave=function(){a.setState({mouseOverSlide:!1})},a.state={mouseOverSlide:!1},a.carousel=r.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"white_font",style:{textAlign:"center",marginTop:"40px",marginBottom:"0px",fontSize:"50px"}},"Hello, my name is Huan."),r.a.createElement("h1",{className:"white_font",style:{textAlign:"center",fontSize:"50px"}},"I am a programmer."),r.a.createElement("h1",{className:"white_font",style:{marginBottom:"0px"}},"ABOUT ME"),r.a.createElement("hr",{className:"line"}),r.a.createElement("p",{className:"white_font"},"I am a master\u2019s student in computer science at Tufts and am very passionate in applying programing skills to create better experience for users. This semester, I am building a mobile attendance system for faculties based on android system.I have 2-year full time working experience as a front-end engineer before joining Tufts this year. I have tackled complex technical problems and demonstrated strong programming skills at Lenovo and GrowingIO."),r.a.createElement("h1",{className:"white_font",style:{marginBottom:"0px"}},"PROJECTS"),r.a.createElement("hr",{className:"line"}),r.a.createElement("h1",{className:"white_font"},"1. GrowingIO.com"),r.a.createElement("div",{className:"slider",onMouseEnter:this.sliderEnter,onMouseLeave:this.sliderLeave},r.a.createElement(ae.a,{ref:function(t){return e.carousel=t}},r.a.createElement("div",{className:"p0 img"}),r.a.createElement("div",{className:"p1 img"}),r.a.createElement("div",{className:"p2 img"}),r.a.createElement("div",{className:"p3 img"}),r.a.createElement("div",{className:"p4 img"})),r.a.createElement("div",{className:this.state.mouseOverSlide?"arrowLeft":"arrowLeft hide",onClick:this.previous},r.a.createElement(f.a,{type:"left",style:{fontSize:32,marginTop:"12px",marginLeft:"5px",color:"white"}})),r.a.createElement("div",{className:this.state.mouseOverSlide?"arrowRight":"arrowRight hide",onClick:this.next},r.a.createElement(f.a,{type:"right",style:{fontSize:32,marginTop:"12px",marginLeft:"5px",color:"white"}}))),r.a.createElement("h2",{className:"white_font"},"About this project"),r.a.createElement("hr",{className:"line"}),r.a.createElement("p",{className:"white_font"},"GrowingIO is a leading analytic platform provider in China. They help customer track data, building dashboard and drive quick insights. I was part of the platform team and our goal is to ensure that users (enterprise user) can manage their data easily.\xa0\xa0",r.a.createElement("a",{className:"info_link",href:"https://www.growingio.com/"},"Visit this site"),r.a.createElement("br",null),"My role in the team:",r.a.createElement("br",null)),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"Designed a new data management module."),r.a.createElement("li",null,"Refactored old react components to improve cohesion"),r.a.createElement("li",null,"Developed a react component library for company\u2019s common components.")),r.a.createElement("h2",{className:"white_font",style:{marginBottom:"0px"}},"Technical Sheet"),r.a.createElement("p",{className:"white_font"},"Code technologies involved while developing this project."),r.a.createElement("hr",{className:"line"}),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Redux"),r.a.createElement("li",null,"RxJS"),r.a.createElement("li",null,"Node.js"),r.a.createElement("li",null,"Javascript ES6 & Typescript"),r.a.createElement("li",null,"CSS3 & less"),r.a.createElement("li",null,"Webpack")),r.a.createElement("h1",{className:"white_font"},"2. Chalkboard Note"),r.a.createElement(R,null),r.a.createElement("h2",{className:"white_font"},"About this project"),r.a.createElement("hr",{className:"line"}),r.a.createElement("p",{className:"white_font"},"This is a online note management app, you can create, store and modify your notes.",r.a.createElement("br",null),"There is a default account with some existing notes, name: guest, password: 123.",r.a.createElement("br",null)),r.a.createElement("h2",{className:"white_font",style:{marginBottom:"0px"}},"Technical Sheet"),r.a.createElement("p",{className:"white_font"},"Code technologies involved while developing this project."),r.a.createElement("hr",{className:"line"}),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Javascript ES6"),r.a.createElement("li",null,"CSS3"),r.a.createElement("li",null,"Spring Boot"),r.a.createElement("li",null,"PostgreSQL"),r.a.createElement("li",null,"Docker"),r.a.createElement("li",null,"AWS")),r.a.createElement("h1",{className:"white_font"},"3. Reversi Game"),r.a.createElement(te,null),r.a.createElement("h2",{className:"white_font"},"About this project"),r.a.createElement("hr",{className:"line"}),r.a.createElement("p",{className:"white_font"},"This is a little game like Reversi. Players take turns placing disks on the board with their assigned color facing up. During a play, any disks of the opponent's color that are in a straight line and bounded by the disk just placed and another disk of the current player's color are turned over to the current player's color. The object of the game is to have the majority of disks turned to display your color when the last playable empty square is filled.\xa0\xa0",r.a.createElement("a",{className:"info_link",href:"https://en.wikipedia.org/wiki/Reversi"},"What is Reversi?")),r.a.createElement("h2",{className:"white_font",style:{marginBottom:"0px"}},"Technical Sheet"),r.a.createElement("p",{className:"white_font"},"Code technologies involved while developing this project."),r.a.createElement("hr",{className:"line"}),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Javascript ES6"),r.a.createElement("li",null,"CSS3")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t){e.exports={size:8}}},[[122,1,2]]]);
//# sourceMappingURL=main.2b13332e.chunk.js.map