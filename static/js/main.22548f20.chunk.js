(this["webpackJsonpcampo-buscar"]=this["webpackJsonpcampo-buscar"]||[]).push([[0],{21:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},41:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),s=(a(40),a(3)),l=a(4),i=a(6),u=a(5),m=(a(41),a(11)),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,"MUSIC")),r.a.createElement("div",{className:"navBar"},r.a.createElement(m.b,{to:"/"},"PESQUISA"),r.a.createElement(m.b,{to:"/historico"},"HIST\xd3RICO")))}}]),a}(n.Component),h=a(1),b=a(13),v=a.n(b),f=a(15),E=(a(21),a(34)),d=a.n(E),S=Object({NODE_ENV:"production",PUBLIC_URL:"/cypress-github-actions",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LAST_FM_API_KEY,g=d.a.create({baseURL:"http://ws.audioscrobbler.com/2.0",params:{api_key:S}}),O=(a(30),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.text),e.setData()},e}return Object(l.a)(a,[{key:"setData",value:function(){var e=(new Date).getTime(),t=this.state.text;localStorage.setItem(e.toString(),t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search"},r.a.createElement("h1",{className:"title"},"Pesquisando por artistas"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"search-input"},r.a.createElement("input",{type:"text",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})},placeholder:"Digite o nome do artista",required:!0})),r.a.createElement("div",{className:"search-button"},r.a.createElement("button",{type:"submit",value:"pesquisar"},"PESQUISAR"),r.a.createElement("button",{type:"reset",onClick:function(){window.location.reload(!1)}},"LIMPAR"))),r.a.createElement(m.b,{className:"search-rightt",to:"/mainAlb"},"Buscar por album"))}}]),a}(r.a.Component)),j=(a(31),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.resultado;return r.a.createElement("div",{className:"resultado",key:e.id},this.props.resultado.map((function(e){return console.log(e.image[1]),r.a.createElement("div",{key:e.url,className:"artista"},r.a.createElement("a",{href:e.url,target:"blank"},r.a.createElement("img",{src:e.image[2]["#text"]?e.image[1]["#text"]:"https://via.placeholder.com/64",alt:"imagem"})),r.a.createElement("a",{href:e.url,target:"blank"},r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,e.name))))})))}}]),a}(r.a.Component)),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lista:[]},e.onSearchSubmit=function(){var t=Object(f.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/?method=artist.search",{params:{artist:a,format:"json"}});case 2:n=t.sent,e.setState({lista:n.data.results.artistmatches.artist});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(O,{onSubmit:this.onSearchSubmit}),r.a.createElement(j,{resultado:this.state.lista}))}}]),a}(r.a.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.text),e.setData()},e}return Object(l.a)(a,[{key:"setData",value:function(){var e=(new Date).getTime(),t=this.state.text;localStorage.setItem(e.toString(),t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search"},r.a.createElement("h1",{className:"title"},"Pesquisando por albuns"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"search-input"},r.a.createElement("input",{type:"text",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})},placeholder:"Digite o nome do album",required:!0})),r.a.createElement("div",{className:"search-button"},r.a.createElement("button",{className:"a",type:"submit",value:"pesquisar"},"PESQUISAR"),r.a.createElement("button",{type:"reset",onClick:function(){window.location.reload(!1)}},"LIMPAR"))),r.a.createElement(m.b,{className:"search-leftt",to:"/"},"Buscar por artista"))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){this.props.resultado;return r.a.createElement("div",{className:"resultado"},this.props.resultado.map((function(e){return r.a.createElement("div",{key:e.url,className:"artista"},r.a.createElement("a",{href:e.url,target:"blank"},r.a.createElement("img",{src:e.image[2]["#text"]?e.image[1]["#text"]:"https://via.placeholder.com/64",alt:"imagem"})),r.a.createElement("a",{href:e.url,target:"blank"},r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,e.name))))})))}}]),a}(r.a.Component),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lista:[]},e.onSearchSubmit=function(){var t=Object(f.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("/?method=album.search",{params:{album:a,format:"json"}});case 2:n=t.sent,e.setState({lista:n.data.results.albummatches.album});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(N,{onSubmit:this.onSearchSubmit}),r.a.createElement(k,{resultado:this.state.lista}))}}]),a}(r.a.Component);a(65);var C=function(){var e=Object.entries(localStorage),t=Object(h.e)();return r.a.createElement("div",{className:"historico"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"HIST\xd3RICO"),r.a.createElement("button",{onClick:function(){localStorage.clear(),t.push("/historico")}},"Apagar hist\xf3rico")),e.map((function(e){return r.a.createElement("div",{className:"content-historico"},r.a.createElement("div",{className:"historico-search"},r.a.createElement("h2",null,e[1]),r.a.createElement("p",null,new Date(parseInt(e[0])).toLocaleDateString("pt-BR")," -"," ",new Date(parseInt(e[0])).toLocaleTimeString("pt-BR"))))})))},w=function(){return r.a.createElement(m.a,null,r.a.createElement(p,null),r.a.createElement(h.a,{exact:!0,path:"/",component:y}),r.a.createElement(h.a,{path:"/mainAlb",component:x}),r.a.createElement(h.a,{path:"/historico",component:C}))},A=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(w,null))};a(66);o.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.22548f20.chunk.js.map