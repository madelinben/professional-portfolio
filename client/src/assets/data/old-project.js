import { v4 as uuid } from 'uuid';

const projectData = [
  {
    id: uuid(),
    title: 'Smart Assistant',
    desc: 'Personal smart assistant interface, Alfred will become a completely tailored butler and know it all.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/smart-assistant'
    },
    tech: [],
    tags: [],
    fav: false
  },{
    id: uuid(),
    title: 'Media Streaming Service',
    desc: 'Personal streaming site to access and organise personal media content.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/media-streaming-service'
    },
    tech: [],
    tags: [],
    fav: true
  },{
    id: uuid(),
    title: 'Online Chat App',
    desc: 'Real-time messaging service application to connect online users.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/chat-app'
    },
    tech: [{title: 'Node JS', src: 'https://nodejs.org/en/about/'}, {title: 'React', src: 'https://reactjs.org/'}, {title: 'Material UI', src: 'https://mui.com/'}, {title: 'SocketIO', src: 'https://socket.io/'}],
    tags: [],
    fav: true
  },{
    id: uuid(),
    title: 'Djikstras Pathfinder',
    desc: 'Interactive grid produces user generated obstacles for the algorithm to navigate.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/dijkstras-pathfinder'
    },
    tech: [],
    tags: [],
    fav: true
  },{
    id: uuid(),
    title: 'Wikipedia Web Scraper',
    desc: 'In the works. Script to format selected element data from a provided web page and pass hidden access.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/web-scraper'
    },
    tech: [{title: 'Python', src: 'https://www.python.org/'}, {title: 'Requests', src: 'https://docs.python-requests.org/en/latest/'}, {title: 'BeautifulSoup', src: 'https://beautiful-soup-4.readthedocs.io/en/latest/'}, {title: 'JSON', src: 'https://www.json.org/json-en.html'}],
    tags: [],
    fav: false
  },{
    id: uuid(),
    title: 'Environment Monitoring System',
    desc: 'University Group Project to develop a home environment system using the ESP32 and PlatformIO.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/'
    },
    tech: [],
    tags: [],
    fav: true
  },{
    id: uuid(),
    title: 'Embedded Systems',
    desc: 'Snippet resource regarding "baremetal" embedded software engineering using the ESP32.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/embedded-systems'
    },
    tech: [],
    tags: [],
    fav: false
  },{
    id: uuid(),
    title: 'Cloud Computing',
    desc: 'Cloud web service utilising virtualisation and load balancing strategies on a RESTful API to distribute a large scale application.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/cloud-computing'
    },
    tech: [],
    tags: [],
    fav: false
  },{
    id: uuid(),
    title: 'Order Management System',
    desc: 'University Final Year Project to demonstrate the efficiency of Big Data algorithms by developing an order management system in TypeScript and NodeJS.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/final-year-project'
    },
    tech: [{title: 'Node JS', src: 'https://nodejs.org/en/about/'}, {title: 'React', src: 'https://reactjs.org/'}, {title: 'Bootstrap5', src: 'https://getbootstrap.com/'}, {title: 'Formik', src: 'https://formik.org/'}, {title: 'Google Directions API', src: 'https://developers.google.com/maps/documentation/directions/overview'}],
    tags: [],
    fav: true
  },{
    id: uuid(),
    title: 'Professional Portfolio',
    desc: 'Professional webpage to showcase personal projects and achievements.',
    img: '',
    path: {
      demo: 'http://www.madelinben.co.uk/',
      git: 'https://github.com/madelinben/professional-portfolio'
    },
    tech: [],
    tags: [],
    fav: false
  },{
    id: uuid(),
    title: 'Lexical Analysis Parser',
    desc: 'Programming language theory, parsing grammar tokens/lexicon to decipher and compute functional and mathematical code.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/lexical-analysis-parser'
    },
    tech: [],
    tags: [],
    fav: false
  },{
    id: uuid(),
    title: 'Recipe Web App',
    desc: 'Programming language theory, parsing grammar tokens/lexicon to decipher and compute functional and mathematical code.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/lexical-analysis-parser'
    },
    tech: [{title: 'PHP7', src: 'https://www.php.net/'}, {title: 'Bootstrap5', src: 'https://getbootstrap.com/'}, {title: 'JQuery', src: 'https://jquery.com/'}, {title: 'AJAX', src: 'https://api.jquery.com/jquery.ajax/'}, {title: 'PhpMyAdmin', src: 'https://www.phpmyadmin.net/'}, {title: 'MySQL', src: 'https://www.mysql.com/'}],
    tags: [],
    fav: false
  },{
    id: uuid(),
    title: 'Electronic Programme Guide',
    desc: 'University Group Project to develop a console application that can view live programme data by populating a dynamic ASCII grid and mark favourite shows for recording. Data is obtained utilising the Bleb API.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/programme-guide'
    },
    tech: [{title: 'Java', src: 'https://www.java.com/en/'}, {title: 'Maven', src: 'https://maven.apache.org/'}, {title: 'XML Parser', src: 'https://commons.apache.org/proper/commons-jelly/apidocs/org/apache/commons/jelly/parser/XMLParser.html'}, {title: 'Jota Time', src: 'https://www.joda.org/joda-time/'}, {title: 'Bleb API', src: 'http://bleb.org/tv/data/listings/'}],
    tags: [],
    fav: true
  },{
    id: uuid(),
    name: 'Canvas Arcade',
    desc: 'Responsive web application with account and rankings system, showcasing a collection of canvas mini-games.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/arcade-canvas'
    },
    tech: [{title: 'HTML5', src: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'}, {title: 'CSS3', src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'}, {title: 'JavaScript', src: 'https://www.javascript.com/'}, {title: 'Canvas API', src: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'}, {title: 'p5', src: 'https://p5js.org/'}],
    tags: [],
    fav: false
  },{
    id: 'visual-algorithms',
    title: 'Visual Algorithms',
    desc: 'An animated visualisation of data structures and advanced sorting algorithms.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/visual-algorithms',
      readme: 'https://raw.githubusercontent.com/madelinben/visual-algorithms/c97805146c37d5671b610970ed215c50a8eb2a28/README.md'
    },
    tech: [{title: 'HTML5', src: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'}, {title: 'CSS3', src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'}, {title: 'JavaScript', src: 'https://www.javascript.com/'}],
    tags: ['visualisation', 'data', 'sorting', 'algorithm', 'javascript', 'js', 'css'],
    fav: true
  },{
    id: uuid(),
    title: 'Projectile Simulator',
    desc: 'A-Level Project to develop a forms application to visualise physics algorithms to students. Implementing a login system that utilises a normalised Access database.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/'
    },
    tech: [],
    tags: ['vb', '.net', 'winforms', 'access', 'database', 'rdbms', 'login', 'authentication', 'sha256', 'xml', 'parser', 'projectile', 'physics', 'algorithm'],
    fav: false
  }
];

export default projectData;