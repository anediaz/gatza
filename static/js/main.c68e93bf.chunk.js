(this.webpackJsonpgatza=this.webpackJsonpgatza||[]).push([[0],{35:function(e,a,t){e.exports=t(46)},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(26),o=t.n(i),s=t(14),l=t(17),u=t(25),c=t(5),d=t(2),m=t(15),h=t(11);function p(){var e=Object(c.a)(["\n  display: inline-block;\n  position: relative;\n  z-index: 100;\n  a {\n    text-decoration: none;\n    display: block;\n    -webkit-transition: all 0.2s ease-in-out 0s;\n    -moz-transition: all 0.2s ease-in-out 0s;\n    -o-transition: all 0.2s ease-in-out 0s;\n    -ms-transition: all 0.2s ease-in-out 0s;\n    transition: all 0.2s ease-in-out 0s;\n    color: ",";\n    background: ",';\n    &.active,\n    &:hover {\n      color: black;\n      background: white;\n    }\n    font-size: 3rem;\n    padding: 0.5rem 8rem;\n    @media (max-width: 1920px) {\n      // MacBook 13"\n      padding: 0.3rem 3rem;\n      font-size: 2rem;\n    }\n    @media (max-width: 1382px) {\n      // iPadPro Horizontal\n      font-size: 1rem;\n    }\n    @media (max-width: 1024px) {\n      //iPadPro Vertical / iPad Horizontal\n      font-size: 1rem;\n    }\n    @media (max-width: 900px) {\n      //iPhoneX horizontal\n    }\n    @media (max-width: 768px) {\n      //iPad Vertical iPhone6/7/8 Horizontal\n      font-size: 0.8rem;\n      font-weight: 200;\n      padding: 0.2rem 1.5rem;\n    }\n    @media (max-width: 480px) {\n      //iPhoneX/iPhone6/7/8 vertical\n    }\n    @media (max-width: 320px) {\n    }\n  }\n']);return p=function(){return e},e}function g(){var e=Object(c.a)(["\n  display: block;\n  padding: 0;\n  margin: 0 auto;\n"]);return g=function(){return e},e}function b(){var e=Object(c.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n"]);return b=function(){return e},e}var f=d.a.div(b()),z=d.a.ul(g()),k=d.a.li(p(),(function(e){return"active"===e.className?"black":"white"}),(function(e){return"active"===e.className?"white":""})),v=function(e){var a=e.items;return r.a.createElement(f,null,r.a.createElement(z,null,a.map((function(e,a){return r.a.createElement(k,{key:a},r.a.createElement(m.b,{to:e.path,activeClassName:"active",exact:!0},e.text))}))))},w=t(7),x=t(22),j=t.n(x),G=t(31),y=function(e,a){return"https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat("45cb4d81ed65f5a656f10046b761cc48","&extras=").concat(a,"&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=").concat(e,"&user_id=").concat("114481456@N05")},E={url:"url_n",width:"width_n",height:"height_n"},L={url:"url_l",width:"width_l",height:"height_l"};function O(){return(O=Object(G.a)(j.a.mark((function e(a,t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y(a,t));case 2:if(!(n=e.sent)||!n.ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent.photoset.photo,e.next=10;break;case 9:e.t0={Error:"Error while reading photoset=".concat(a)};case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q={getPhotos:function(e,a){return O.apply(this,arguments)}},P=t(32),_=E,I=L,C="".concat(_.url,",").concat(I.url),B=function(e){var a=e.photosetId,t=e.photos,i=void 0===t?[]:t,o=e.setPhotos,s=e.configurations;Object(n.useEffect)((function(){i&&i.length||q.getPhotos(a,C).then((function(e){return o(a,l(e))}),(function(e){return console.log("error ="+e)}))}));var l=function(e){return e.map((function(e){return{src:e[_.url],width:e[_.width],height:e[_.height],bigSrc:e[I.url]}}))};return r.a.createElement(P.a,{photos:i,configurations:s})};function N(){var e=Object(c.a)(["\n  height: 1rem;\n  width: 1rem;\n  left: calc(50% - 0.5rem);\n  top: calc(50% - 0.5rem);\n  border-color: lightseagreen;\n  border-right: none;\n  animation: "," 5s linear infinite;\n"]);return N=function(){return e},e}function W(){var e=Object(c.a)(["\n  height: 2rem;\n  width: 2rem;\n  left: calc(50% - 1rem);\n  top: calc(50% - 1rem);\n  border-color: deeppink;\n  border-top: none;\n  animation: "," 3s linear infinite;\n"]);return W=function(){return e},e}function X(){var e=Object(c.a)(["\n  height: 3rem;\n  width: 3rem;\n  left: calc(50% - 1.5rem);\n  top: calc(50% - 1.5rem);\n  border-color: deepskyblue;\n  border-left: none;\n  animation: "," 8s linear infinite;\n"]);return X=function(){return e},e}function T(){var e=Object(c.a)(["\n  position: absolute;\n  border: 0.1rem solid;\n  border-radius: 50%;\n  float: left;\n"]);return T=function(){return e},e}function A(){var e=Object(c.a)(["\n  0%{\n    transform: rotate(0deg);\n  }\n  50%{\n    transform: rotate(360deg);\n  }\n  100%{\n    transform: rotate(720deg);\n  }\n"]);return A=function(){return e},e}var H=Object(d.b)(A()),S=d.a.div(T()),J=Object(d.a)(S)(X(),H),D=Object(d.a)(S)(W(),H),F=Object(d.a)(S)(N(),H),R=function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement(J,null),r.a.createElement(D,null),r.a.createElement(F,null))};function M(){var e=Object(c.a)(["\n  clear: both;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 1rem;\n  a {\n    text-decoration: none;\n    color: white;\n    font-style: italic;\n    font-weight: bold;\n  }\n  @media screen and (max-width: 900px) {\n    font-size: 0.9rem;\n    padding: 1.2rem 1rem 0 0;\n  }\n"]);return M=function(){return e},e}function V(){var e=Object(c.a)(["\n  width: 100%;\n  float: left;\n  margin: 0 auto;\n  background-color: white;\n  min-height: 100vh;\n"]);return V=function(){return e},e}function $(){var e=Object(c.a)(['\n  height: 4rem;\n  padding: 0.5rem 0;\n  content: url("./gatza.png");\n  margin: 0 auto;\n  :before {\n    height: 4rem;\n    width: 241px;\n    padding: 0.5rem 0;\n    background-image: url("./gatza.png");\n    background-size: auto 4rem;\n    display: inline-block;\n    content: "";\n    margin: 0 auto;\n    background-repeat: no-repeat;\n  }\n  @media (max-width: 768px) {\n    height: 1.8rem;\n    :before {\n      height: 1.8rem;\n      width: 108px;\n      background-size: auto 1.8rem;\n    }\n  }\n  @media (min-width: 1920px) {\n    height: 15rem;\n    :before {\n      height: 15rem;\n      width: 422px;\n      background-size: auto 15rem;\n    }\n  }\n']);return $=function(){return e},e}function U(){var e=Object(c.a)(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  &:hover {\n    cursor: pointer;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    font-size: 0.8rem;\n  }\n"]);return U=function(){return e},e}function K(){var e=Object(c.a)(["\n  padding-top: 1.25rem;\n  background-color: black;\n  height: 11.4rem;\n  position: relative;\n  @media (max-width: 768px) {\n    padding-top: 0.8rem;\n    height: 6.5rem;\n  }\n  @media (min-width: 1920px) {\n    padding-top: 10rem;\n    height: 35.4rem;\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(c.a)(['\n  color: white;\n  background-color: black;\n  font-family: "Raleway", sans-serif;\n']);return Q=function(){return e},e}var Y=d.a.div(Q()),Z=d.a.div(K()),ee=d.a.div(U()),ae=d.a.div($()),te=d.a.div(V()),ne=d.a.div(M()),re=function(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),i=a[0],o=a[1],c=function(e,a){o(Object(l.a)(Object(l.a)({},i),{},Object(s.a)({},e,a)))},d=[{minWidth:1024,cols:7,margin:5},{minWidth:480,maxWidth:1023,cols:7,margin:1},{maxWidth:479,cols:4,margin:1}],p=Object(n.lazy)((function(){return t.e(5).then(t.bind(null,47))})),g=Object(n.lazy)((function(){return t.e(3).then(t.bind(null,48))})),b=Object(n.lazy)((function(){return t.e(4).then(t.bind(null,49))}));return r.a.createElement(m.a,null,r.a.createElement(Y,null,r.a.createElement(Z,null,r.a.createElement(ee,null,r.a.createElement(ae,null)),r.a.createElement(v,{items:w.f})),r.a.createElement(te,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(R,null)},r.a.createElement(h.a,{exact:!0,path:w.f[0].path,render:function(){return r.a.createElement(B,{photosetId:w.b,photos:i[w.b],setPhotos:c})}}),r.a.createElement(h.a,{path:w.f[1].path,component:p}),r.a.createElement(h.a,{path:w.f[2].path,render:function(){return r.a.createElement(B,{photosetId:w.e,photos:i[w.e],setPhotos:c,configurations:d})}}),r.a.createElement(h.a,{path:w.f[3].path,component:g}),r.a.createElement(h.a,{path:w.f[4].path,component:b}))),r.a.createElement(ne,null,function(){var e=r.a.createElement("a",{href:w.g.url,target:"_blank",rel:"noopener noreferrer",key:2},w.g.author),a=w.g.text.split("$author");return[a[0]&&r.a.createElement("div",{key:1},a[0]),e,a[1]&&r.a.createElement("div",{key:3},a[1])]}())))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e){e.exports=JSON.parse('{"b":"72157670317433475","e":"72157669315421710","f":[{"id":"home","text":"Hasiera","path":"/","home":true},{"id":"liburua","text":"Liburua","path":"/liburua"},{"id":"makingof","text":"Making Of","path":"/makingof"},{"id":"berriak","text":"Berriak","path":"/berriak"},{"id":"info","text":"Info","path":"/info"}],"a":{"videoUrl":"https://www.youtube.com/embed/-B3ezMdT1JQ","albisteak":[{"title":"2014/10/03","img":"news/goiena1.png","src":"https://farm6.staticflickr.com/5625/30669747305_c51d22ae66_o.png","id":"31764384476"},{"title":"2015/05/15","img":"news/goiena2.png","id":""},{"title":"2015/05/29","img":"news/goiena3.png","src":"https://farm1.staticflickr.com/255/31685194221_08e3696186_o.jpg","id":"31685194221"},{"title":"2015/06/04","img":"news/mondraberri.png","src":"https://farm1.staticflickr.com/616/31432955160_b87fa3d073_o.jpg","id":"31432955160"},{"title":"2015/06/05","img":"news/puntua.png","src":"https://farm1.staticflickr.com/402/31801382175_40488c157c_o.jpg","id":"31801382175"},{"title":"2015/06/07","img":"news/noticiasDeGipuzkoa.png","src":"https://farm1.staticflickr.com/310/31801386475_57d004aab0_o.jpg","id":"31801386475"}]},"d":{"url":"http://e.issuu.com/embed.html#29935047/49686996","src":"liburua.png","title":"Liburua ikusi","alt":"Liburua"},"c":{"EU":{"text":["Gatza, horixe da proiektu honen izena, Leintz-Gatzako herritarrek hala deitzen diote-eta euren herriari. Gatza erretratu bilduma bat da, baina batez ere dokumentu bat da, XXI. mende hasiera honetan Euskal Herriko herri txiki bateko errolda grafikoa, alegia.","Gatza proiektu irekia da, 2011. urtean abian jarri eta aurrera egin ahala halabeharrez aldatuz joan dena. Hasiera batean, gatzagarren erretratuak egin nahi nituen, bakoitza bere testuinguruan, lanean edo bizilekuan, baina lanak beste bide bat hartu zuen, buruan nituen asmoei izkin eginda, eta, azkenean, oihal beltz baten aurrean jarri eta horrelaxe erretratatu ditut gatzagarrak, bizitzan bizilekuak batzen dituen moduan liburuan fondo beltzak batuko zituelakoan.","Liburu bat izan zen proiektuaren lehenengo emaitza: Gatza. Leintz-Gatzagako herritarren erretratuak izenburua duena, 2015 urtean argitaratua. Erretratu bakoitza gatzagar baten argazkia da, baina liburua Leintz-Gatzagaren aurpegia eta errolda grafikoa da. Webgune hau da proiektuaren bigarren emaitza, gatzagarren erretratuez osatutako mosaikoa jasotzen duena. Guztira 204 herritar ageri dira mosaikoan, herriko ia biztanle guztiak, hain zuzen ere. Euren jantzi arruntekin ageri dira, lagun arteko giro informalean egoten direnean moduan; gainera, interesgarria iruditu zait euren gorputz jarrerak, eskuen eta oinen posturak jasotzea argazkietan, oso adierazgarriak dira eta.","Azkenik, esan nahi nuke gatzagarrekin partekatutako proiektua dela Gatza, eurekin auzolanean egindakoa."],"contact":{"title":"Kontaktua","mail":"e-posta"}},"ES":{"text":["Gatza, ese es el nombre de este proyecto, el nombre que utilizan los habitantes de Leintz-Gatzaga para denominar a su pueblo. Gatza es una colecci\xf3n de retratos, pero sobre todo es un documento que representa el padr\xf3n gr\xe1fico de una peque\xf1a poblaci\xf3n del Pa\xeds Vasco a comienzo del siglo XXI.","Gatza es un proyecto abierto, que comenz\xf3 en 2011 y que ha ido evolucionando a lo largo del tiempo. Al comienzo, pensaba realizar retratros de los habitantes de Leintz-Gatzaga, cada uno en su entorno, en el lugar de trabajo o en su casa. Pero el proyecto tom\xf3 otro rumbo, y, finalmente, todos los retratos los he realizado en una misma localizaci\xf3n sobre un fondo negro.","El primer fruto de este proyecto fue un libro, Gatza. Leintz-Gatzagako herritarren erretratuak (Gatza. Retratos de los habitantes de Leintz-Gatzaga), publicado en 2015. Cada fotograf\xeda es el retrato de un habitante, y est\xe1 estructurado por familias; de esta manera, el libro representa el rostro de Leintz-Gatzaga y su censo gr\xe1fico. Este sitio web es el segundo fruto del proyecto, y recoge un mosaico realizado con los retratos de los habitantes de Leintz-Gatzaga, 204 en total, casi la totalidad de los habitantes de la localidad. Pero adem\xe1s, se puede visualizar el libro en formato pdf, observar detalles de manos, pies y posturas as\xed como im\xe1genes obtenidas entre bambalinas que aportan un valor a\xf1adido.","Finalmente, debo decir que Gatza es un proyecto compartido con los habitantes de Leintz-Gatzaga, y realizado conjuntamente con ellos, por lo que quiero agradecer su implicaci\xf3n en el mismo."],"contact":{"title":"Contacto","mail":"e-mail"}},"EN":{"text":["This project is called Gatza because that is in fact how the citizens of Leintz-Gatzaga refer to their village. Gatza is a collection of portraits, but more than anything else, it is a document, in other words, a photographic census of a small village in the Basque Country at the start of the 21st century.","Gatza is an open project; it was started in 2011 and has been changing in the course of its development. Initially, I wanted to produce portraits of the inhabitants of Gatzaga, each one in his or her own context in the workplace or at home, but the work took a different path. So after abandoning the intentions I had in mind, in the end, I put the inhabitants of Gatzaga in front of a black cloth and that is how I produced their portraits","The first outcome of this project was a book published in 2015 and entitled Gatza. Leintz-Gatzagako herritarren erretratuak (Gatza. Portraits of the Citizens of Leintz-Gatzaga). Each portrait is a photo of one inhabitant of Gatzaga, but the book provides a face and a photographic census of the village of Leintz-Gatzaga. This website is the second outcome of the project and consists of a mosaic made up of the portraits of the people of Gatzaga. 204 inhabitants in all appear in the mosaic, nearly all the inhabitants of the village. They are wearing their everyday clothes, just as they do when they are in an informal atmosphere among friends; what is more, I felt that it would be interesting to portray their body language, the positions of their hands and feet, in the portraits because they are highly significant.","Finally, I would like to stress that Gatza is a project shared with the people of Gatzaga and produced with their assistance."],"contact":{"title":"Contact","mail":"email"}},"FR":{"text":["Gatza est le nom de ce projet, \xe9tant donn\xe9 que les habitants de Leintz-Gatzaga appellent leur village ainsi. Gatza est une collection de portraits, mais aussi un document de recensement graphique d\'un petit village du Pays Basque.","Gatza est un projet ouvert d\xe9marr\xe9 en 2011 et qui a \xe9volu\xe9 durant le temps. Dans un premier temps je voulais faire des simples portraits dans des diff\xe9rents contextes. N\xe9anmoins, mon travail a pris une autre tournure et, malgr\xe9 ma premi\xe8re intention, tous les portraits ont \xe9t\xe9 faits sur un fond noir.","Le premier r\xe9sultat de ce projet \xe9tait un livre nomm\xe9 \'Gatza. Les portraits des habitants de Leintz-Gatzaga\', publi\xe9 en 2015. Chaque portrait est la photo d\'un habitant, mais le livre est le visage et le recensement de Leintz-Gatzaga.","Ce site Web est le deuxi\xe8me r\xe9sultat de ce projet, qui contient un mosaic avec tous les portraits du livre. Cette mosa\xefque contient 204 photos au total, presque tous les habitants du village. Ils apparaissent avec des v\xeatements courants, comme s\'ils \xe9taient dans une ambiance d\xe9contract\xe9e. En plus, c\'est int\xe9ressant de collecter leurs expressions corporelles, les positions de leurs mains et pieds, car ils sont tr\xe8s significatifs.","Pour finir, je dois dire que Gatza est un projet partag\xe9 et r\xe9alis\xe9 en collaboration avec les habitants de Gatzaga."],"contact":{"title":"Contact","mail":"email"}},"CA":{"text":["Gatza (en \xe8uscar, sal), el nom d\'aquest projecte, \xe9s tamb\xe9 el nom que fan servir els habitants de Leintz-Gatzaga (Guip\xfascoa) per referir-se al seu poble. Gatza \xe9s una col\xb7lecci\xf3 de retrats, per\xf2, sobretot, \xe9s un document que aspira a ser el padr\xf3 gr\xe0fic d\'una petita poblaci\xf3 del Pa\xeds Basc a comen\xe7ament del segle XXI.","Gatza \xe9s un projecte obert que va comen\xe7ar el 2011 i ha anat evolucionant amb el pas del temps. Al comen\xe7ament, tenia la intenci\xf3 de fer retrats dels habitants de Leintz-Gatzaga, cadascun al seu entorn, al lloc de feina o a casa seva. Per\xf2 el projecte va agafar un altre rumb i, al final, he dut a terme tots els retrats en una mateixa localitzaci\xf3, sobre un fons negre.","El primer fruit d\'aquest projecte va ser un llibre: Gatza. Leintz-Gatzagako herritarren erretratuak (Gatza. Retrats dels vilatans de Leintz-Gatzaga), publicat el 2015. Cada fotografia \xe9s el retrat d\'un vilat\xe0, i el llibre est\xe0 estructurat per fam\xedlies, de manera que representa el rostre de Leintz-Gatzaga i el seu cens gr\xe0fic. Aquest lloc web \xe9s el segon fruit del projecte, i recull un mosaic realitzat amb els retrats dels habitants de Leintz-Gatzaga, 204 en total, gaireb\xe9 la totalitat dels habitants del poble. Per\xf2, a m\xe9s, es pot visualitzar el llibre en format pdf, observar detalls de mans, peus i postures, aix\xed com imatges obtingudes entre bambolines, que suposen un valor afegit.","Finalment, he de dir de Gatza \xe9s un projecte compartit amb els habitants de Leintz-Gatzaga i realitzat conjuntament amb ells, per la qual cosa els vull agrair la seva implicaci\xf3."],"contact":{"title":"Contacte","mail":"e-mail"}},"more":{"name":"Joxefe Diaz de Tuesta","phone":"+34 677 536 846","mail":"arrasateargitan@gmail.com","site":"https://www.flickr.com/photos/atauri"}},"g":{"author":"Ane Diaz de Tuesta","text":"$authork egindako webgunea","url":"http://www.anediaz.com"}}')}},[[35,1,2]]]);
//# sourceMappingURL=main.c68e93bf.chunk.js.map