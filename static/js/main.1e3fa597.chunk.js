(this.webpackJsonpfishertaskd1=this.webpackJsonpfishertaskd1||[]).push([[0],{20:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(51),s=a(81);const o=a(40);function r(t,a){return new Promise((function(r,i){const c=s.stringify({encrypted_metadata:t,data:a}),l={hostname:o.awsLambda.saveTaskData.host,port:443,path:o.awsLambda.saveTaskData.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(c)}},d=n.request(l,e=>{e.setEncoding("utf8"),e.on("data",()=>{}),e.on("end",r)});d.on("error",e=>{o.debug&&(console.log("ERROR:"),console.log(e)),i(e)}),d.write(c),d.end()}))}function i(t){return new Promise((function(a,r){const i=s.stringify({encrypted_metadata:t}),c={hostname:o.awsLambda.fetchLink.host,port:443,path:o.awsLambda.fetchLink.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(i)}},l=n.request(c,e=>{e.setEncoding("utf8");var t="";e.on("data",(function(e){t+=e})),e.on("end",()=>a(t))});l.on("error",e=>{o.debug&&(console.log("ERROR:"),console.log(e)),r(e)}),l.write(i),l.end()}))}}).call(this,a(7).Buffer)},40:function(e){e.exports=JSON.parse('{"taskVersion":"1.0.0","taskName":"fishertaskd1","debug":false,"awsLambda":{"saveTaskData":{"host":"de8cnjde61.execute-api.us-east-2.amazonaws.com","path":"/default/saveTaskData"},"fetchLink":{"host":"3pnzb6n9vf.execute-api.us-east-2.amazonaws.com","path":"/default/fetchLink"}}}')},44:function(e,t,a){e.exports=a(98)},54:function(e,t){},56:function(e,t){},79:function(e,t){},84:function(e,t,a){},85:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t),a.d(t,"history",(function(){return w}));var n=a(0),s=a.n(n),o=a(42),r=a.n(o),i=a(1),c=a(20);const l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84),a(85);const d=a(40);var h=a(86),u=a(87);a(92);class p extends n.Component{constructor(e){console.log("LabJsWrapperconstructor"),super(e);const t=u.parse(this.props.location.search,{ignoreQueryPrefix:!0});this.surveyUrl=t.survey_url,this.state={encryptedMetadata:t.id,sendingData:!1,link:void 0},h.isUndefined(this.state.encryptedMetadata)||this.addScript("/fishertaskd1/external/lab.js",()=>{this.addScript("/fishertaskd1/script.js")})}packageDataForExport(e){const t={};return console.log("packageDataForExport"),console.log(e),t.encrypted_metadata=this.state.encryptedMetadata,t.taskName=d.taskName,t.taskVersion=d.taskVersion,t.data=this.processLabJsData(e),JSON.stringify(t)}processLabJsData(e){return e}componentDidMount(){console.log("This is the latest labjswrapper.js");var e=this;const t=sessionStorage.getItem("taskData");if(t){console.log("taskData found in sessionStorage");const a=JSON.parse(t);if(l)return console.log("in islocalhost"),console.log(e.surveyUrl),void(e.surveyUrl&&(console.log("in that.surveyUrl"),e.setState({link:e.surveyUrl})));e.setState({sendingData:!0}),console.log("Im tryna call aws cuz i have session storage stuff"),e.setState({sendingData:!0}),e.saveTaskDataWithRetry(a,11)}window.addEventListener("message",(function(t){if("labjs.data"===t.data.type){const a=JSON.parse(t.data.json);if(l)return void(e.surveyUrl&&(console.log("in that.surveyUrl"),e.setState({link:e.surveyUrl})));e.setState({sendingData:!0}),e.saveTaskDataWithRetry(a,11)}}))}saveTaskDataWithRetry(e,t){const a=this;console.log("new saveTaskData called"),Object(c.b)(a.state.encryptedMetadata,a.packageDataForExport(e)).then(()=>{a.handleDataSaveSuccess()}).catch(n=>{t>1?setTimeout(()=>{console.log("Retrying to save task data..."),a.saveTaskDataWithRetry(e,t-1)},2e3):console.error("Failed to save task data after retries:",n)})}handleDataSaveSuccess(){this.surveyUrl?this.setState({link:this.surveyUrl}):Object(c.a)(this.state.encryptedMetadata).then(e=>this.setState({link:e}))}addScript(e,t){const a=document.createElement("script");a.src=e,a.type="module",a.onreadystatechange=t,a.onload=t,document.head.appendChild(a)}render(){return h.isUndefined(this.state.encryptedMetadata)?s.a.createElement("div",null,s.a.createElement("h2",null,"Something went wrong. Please try again.")):(h.isUndefined(this.state.link)||window.location.assign(this.state.link),this.state.sendingData?s.a.createElement("div",{className:"center",style:{visibility:"visible"}},s.a.createElement("h2",null,"Saving data... do not exit window. Check internet and Refresh if stuck here for over 30 seconds."),s.a.createElement("p",null,"If you lost internet connection during the game, then the game will restart and you will need to play again.")):null)}}var f=p,m=()=>s.a.createElement(i.c,null,s.a.createElement(i.a,{path:"/",exact:!0,component:f}));class g extends n.Component{render(){return s.a.createElement("div",null,s.a.createElement(m,null))}}var y=g,v=a(19),k=a(3);const w=Object(k.a)();console.log("render react"),r.a.render(s.a.createElement(v.a,{history:w,basename:"/fishertaskd1"},s.a.createElement(y,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1e3fa597.chunk.js.map