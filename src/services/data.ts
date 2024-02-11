import { LocaleType } from './constants';

export const MENU_DATA = {
  home: {
    text: 'Hasiera',
    path: '/',
    home: true,
  },
  liburua: {
    text: 'Liburua',
    path: '/liburua',
  },
  makingof: {
    text: 'Making Of',
    path: '/makingof',
  },
  berriak: {
    text: 'Berriak',
    path: '/berriak',
  },
  info: {
    text: 'Info',
    path: '/info',
  },
};

export const PHOTOSET_IDS = {
  home: '72157670317433475',
  makingof: '72157669315421710',
};

export const WEBSITE_INFO = {
  author: 'Ane Diaz de Tuesta',
  text: '$authork egindako webgunea',
  url: 'http://www.anediaz.com',
};

interface InfoProps {
  text: string[];
  contact: {
    title: string;
    mail: string;
  }
}

export const INFO_DATA:Record<LocaleType, InfoProps> = {
  EU: {
    text: [
      'Gatza, horixe da proiektu honen izena, Leintz-Gatzako herritarrek hala deitzen diote-eta euren herriari. Gatza erretratu bilduma bat da, baina batez ere dokumentu bat da, XXI. mende hasiera honetan Euskal Herriko herri txiki bateko errolda grafikoa, alegia.',
      'Gatza proiektu irekia da, 2011. urtean abian jarri eta aurrera egin ahala halabeharrez aldatuz joan dena. Hasiera batean, gatzagarren erretratuak egin nahi nituen, bakoitza bere testuinguruan, lanean edo bizilekuan, baina lanak beste bide bat hartu zuen, buruan nituen asmoei izkin eginda, eta, azkenean, oihal beltz baten aurrean jarri eta horrelaxe erretratatu ditut gatzagarrak, bizitzan bizilekuak batzen dituen moduan liburuan fondo beltzak batuko zituelakoan.',
      'Liburu bat izan zen proiektuaren lehenengo emaitza: Gatza. Leintz-Gatzagako herritarren erretratuak izenburua duena, 2015 urtean argitaratua. Erretratu bakoitza gatzagar baten argazkia da, baina liburua Leintz-Gatzagaren aurpegia eta errolda grafikoa da. Webgune hau da proiektuaren bigarren emaitza, gatzagarren erretratuez osatutako mosaikoa jasotzen duena. Guztira 204 herritar ageri dira mosaikoan, herriko ia biztanle guztiak, hain zuzen ere. Euren jantzi arruntekin ageri dira, lagun arteko giro informalean egoten direnean moduan; gainera, interesgarria iruditu zait euren gorputz jarrerak, eskuen eta oinen posturak jasotzea argazkietan, oso adierazgarriak dira eta.',
      'Azkenik, esan nahi nuke gatzagarrekin partekatutako proiektua dela Gatza, eurekin auzolanean egindakoa.',
    ],
    contact: {
      title: 'Kontaktua',
      mail: 'e-posta',
    },
  },
  ES: {
    text: [
      'Gatza, ese es el nombre de este proyecto, el nombre que utilizan los habitantes de Leintz-Gatzaga para denominar a su pueblo. Gatza es una colección de retratos, pero sobre todo es un documento que representa el padrón gráfico de una pequeña población del País Vasco a comienzo del siglo XXI.',
      'Gatza es un proyecto abierto, que comenzó en 2011 y que ha ido evolucionando a lo largo del tiempo. Al comienzo, pensaba realizar retratros de los habitantes de Leintz-Gatzaga, cada uno en su entorno, en el lugar de trabajo o en su casa. Pero el proyecto tomó otro rumbo, y, finalmente, todos los retratos los he realizado en una misma localización sobre un fondo negro.',
      'El primer fruto de este proyecto fue un libro, Gatza. Leintz-Gatzagako herritarren erretratuak (Gatza. Retratos de los habitantes de Leintz-Gatzaga), publicado en 2015. Cada fotografía es el retrato de un habitante, y está estructurado por familias; de esta manera, el libro representa el rostro de Leintz-Gatzaga y su censo gráfico. Este sitio web es el segundo fruto del proyecto, y recoge un mosaico realizado con los retratos de los habitantes de Leintz-Gatzaga, 204 en total, casi la totalidad de los habitantes de la localidad. Pero además, se puede visualizar el libro en formato pdf, observar detalles de manos, pies y posturas así como imágenes obtenidas entre bambalinas que aportan un valor añadido.',
      'Finalmente, debo decir que Gatza es un proyecto compartido con los habitantes de Leintz-Gatzaga, y realizado conjuntamente con ellos, por lo que quiero agradecer su implicación en el mismo.',
    ],
    contact: {
      title: 'Contacto',
      mail: 'e-mail',
    },
  },
  EN: {
    text: [
      'This project is called Gatza because that is in fact how the citizens of Leintz-Gatzaga refer to their village. Gatza is a collection of portraits, but more than anything else, it is a document, in other words, a photographic census of a small village in the Basque Country at the start of the 21st century.',
      'Gatza is an open project; it was started in 2011 and has been changing in the course of its development. Initially, I wanted to produce portraits of the inhabitants of Gatzaga, each one in his or her own context in the workplace or at home, but the work took a different path. So after abandoning the intentions I had in mind, in the end, I put the inhabitants of Gatzaga in front of a black cloth and that is how I produced their portraits',
      'The first outcome of this project was a book published in 2015 and entitled Gatza. Leintz-Gatzagako herritarren erretratuak (Gatza. Portraits of the Citizens of Leintz-Gatzaga). Each portrait is a photo of one inhabitant of Gatzaga, but the book provides a face and a photographic census of the village of Leintz-Gatzaga. This website is the second outcome of the project and consists of a mosaic made up of the portraits of the people of Gatzaga. 204 inhabitants in all appear in the mosaic, nearly all the inhabitants of the village. They are wearing their everyday clothes, just as they do when they are in an informal atmosphere among friends; what is more, I felt that it would be interesting to portray their body language, the positions of their hands and feet, in the portraits because they are highly significant.',
      'Finally, I would like to stress that Gatza is a project shared with the people of Gatzaga and produced with their assistance.',
    ],
    contact: {
      title: 'Contact',
      mail: 'email',
    },
  },
  FR: {
    text: [
      "Gatza est le nom de ce projet, étant donné que les habitants de Leintz-Gatzaga appellent leur village ainsi. Gatza est une collection de portraits, mais aussi un document de recensement graphique d'un petit village du Pays Basque.",
      'Gatza est un projet ouvert démarré en 2011 et qui a évolué durant le temps. Dans un premier temps je voulais faire des simples portraits dans des différents contextes. Néanmoins, mon travail a pris une autre tournure et, malgré ma première intention, tous les portraits ont été faits sur un fond noir.',
      "Le premier résultat de ce projet était un livre nommé 'Gatza. Les portraits des habitants de Leintz-Gatzaga', publié en 2015. Chaque portrait est la photo d'un habitant, mais le livre est le visage et le recensement de Leintz-Gatzaga.",
      "Ce site Web est le deuxième résultat de ce projet, qui contient un mosaic avec tous les portraits du livre. Cette mosaïque contient 204 photos au total, presque tous les habitants du village. Ils apparaissent avec des vêtements courants, comme s'ils étaient dans une ambiance décontractée. En plus, c'est intéressant de collecter leurs expressions corporelles, les positions de leurs mains et pieds, car ils sont très significatifs.",
      'Pour finir, je dois dire que Gatza est un projet partagé et réalisé en collaboration avec les habitants de Gatzaga.',
    ],
    contact: {
      title: 'Contact',
      mail: 'email',
    },
  },
  CA: {
    text: [
      "Gatza (en èuscar, sal), el nom d'aquest projecte, és també el nom que fan servir els habitants de Leintz-Gatzaga (Guipúscoa) per referir-se al seu poble. Gatza és una col·lecció de retrats, però, sobretot, és un document que aspira a ser el padró gràfic d'una petita població del País Basc a començament del segle XXI.",
      'Gatza és un projecte obert que va començar el 2011 i ha anat evolucionant amb el pas del temps. Al començament, tenia la intenció de fer retrats dels habitants de Leintz-Gatzaga, cadascun al seu entorn, al lloc de feina o a casa seva. Però el projecte va agafar un altre rumb i, al final, he dut a terme tots els retrats en una mateixa localització, sobre un fons negre.',
      "El primer fruit d'aquest projecte va ser un llibre: Gatza. Leintz-Gatzagako herritarren erretratuak (Gatza. Retrats dels vilatans de Leintz-Gatzaga), publicat el 2015. Cada fotografia és el retrat d'un vilatà, i el llibre està estructurat per famílies, de manera que representa el rostre de Leintz-Gatzaga i el seu cens gràfic. Aquest lloc web és el segon fruit del projecte, i recull un mosaic realitzat amb els retrats dels habitants de Leintz-Gatzaga, 204 en total, gairebé la totalitat dels habitants del poble. Però, a més, es pot visualitzar el llibre en format pdf, observar detalls de mans, peus i postures, així com imatges obtingudes entre bambolines, que suposen un valor afegit.",
      'Finalment, he de dir de Gatza és un projecte compartit amb els habitants de Leintz-Gatzaga i realitzat conjuntament amb ells, per la qual cosa els vull agrair la seva implicació.',
    ],
    contact: {
      title: 'Contacte',
      mail: 'e-mail',
    },
  },
};

export const MOREINFO_DATA = {
  name: 'Joxefe Diaz de Tuesta',
  phone: '+34 677 536 846',
  mail: 'arrasateargitan@gmail.com',
  site: 'https://www.flickr.com/photos/atauri',
};

export const LIBURUA_DATA = {
  url: 'http://e.issuu.com/embed.html#29935047/49686996',
  title: 'Liburua ikusi',
  alt: 'Liburua',
};

export const BERRIAK_DATA = {
  videoUrl: 'https://www.youtube.com/embed/-B3ezMdT1JQ',
  albisteak: [
    {
      title: '2014/10/03',
      img: 'news/goiena1.png',
      src: 'https://farm6.staticflickr.com/5625/30669747305_c51d22ae66_o.png',
      id: '31764384476',
    },
    {
      title: '2015/05/15',
      img: 'news/goiena2.png',
      id: '',
    },
    {
      title: '2015/05/29',
      img: 'news/goiena3.png',
      src: 'https://farm1.staticflickr.com/255/31685194221_08e3696186_o.jpg',
      id: '31685194221',
    },
    {
      title: '2015/06/04',
      img: 'news/mondraberri.png',
      src: 'https://farm1.staticflickr.com/616/31432955160_b87fa3d073_o.jpg',
      id: '31432955160',
    },
    {
      title: '2015/06/05',
      img: 'news/puntua.png',
      src: 'https://farm1.staticflickr.com/402/31801382175_40488c157c_o.jpg',
      id: '31801382175',
    },
    {
      title: '2015/06/07',
      img: 'news/noticiasDeGipuzkoa.png',
      src: 'https://farm1.staticflickr.com/310/31801386475_57d004aab0_o.jpg',
      id: '31801386475',
    },
  ],
};
