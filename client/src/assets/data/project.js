import { v4 as uuid } from 'uuid';

//['Auction System', 'Lexical Analysis Parser', 'Seat Booking System // Stock Management System'];
//ARCADE ['projectile-simulator', 'tic-tac-toe', 'hangman']
const projectData = [
  {
    id: uuid(),
    title: 'Online Chat App',
    desc: 'Real-time messaging service application to connect online users.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/chat-app'
    },
    techStack: [{title: 'Node JS', src: 'https://nodejs.org/en/about/'}, {title: 'React', src: 'https://reactjs.org/'}, {title: 'Material UI', src: 'https://mui.com/'}, {title: 'SocketIO', src: 'https://socket.io/'}]
  },{
    id: uuid(),
    title: 'Inform Delivery App',
    desc: 'Track application to update customers on order status via email and plot efficient delivery routes.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/inform-delivery'
    },
    techStack: [{title: 'Node JS', src: 'https://nodejs.org/en/about/'}, {title: 'React', src: 'https://reactjs.org/'}, {title: 'Material UI', src: 'https://mui.com/'}, {title: 'Formik', src: 'https://formik.org/'}, {title: 'Email JS', src: 'https://formik.org/'}, {title: 'Google Directions API', src: 'https://developers.google.com/maps/documentation/directions/overview'}]
  },{
    id: uuid(),
    title: 'Visual Algorithms',
    desc: 'An animated visualisation of data structures and advanced sorting algorithms.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/visual-algorithms'
    },
    techStack: [{title: 'HTML5', src: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'}, {title: 'CSS3', src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'}, {title: 'JavaScript', src: 'https://www.javascript.com/'}, {title: 'Canvas API', src: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'}, {title: 'p5', src: 'https://p5js.org/'}, /* 'Pathfinder', 'Sorting' */]
  },{
    id: uuid(),
    name: 'Web Scraper API',
    desc: 'Script to format selected element data from a provided web page and pass hidden access.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/web-scraper'
    },
    techStack: [{title: 'Python', src: 'https://www.python.org/'}, {title: 'Requests', src: 'https://docs.python-requests.org/en/latest/'}, {title: 'BeautifulSoup', src: 'https://beautiful-soup-4.readthedocs.io/en/latest/'}, {title: 'JSON', src: 'https://www.json.org/json-en.html'}]
  },{
    id: uuid(),
    name: 'Recipe Web App',
    desc: 'application',
    img: '',
    path: {
      demo: '',
      git: ''
    },
    techStack: [{title: 'PHP7', src: 'https://www.php.net/'}, {title: 'Bootstrap5', src: 'https://getbootstrap.com/'}, {title: 'JQuery', src: 'https://jquery.com/'}, {title: 'AJAX', src: 'https://api.jquery.com/jquery.ajax/'}, {title: 'PhpMyAdmin', src: 'https://www.phpmyadmin.net/'}, {title: 'MySQL', src: 'https://www.mysql.com/'}]
  },{
    id: uuid(),
    name: 'Electronic Programme Guide',
    desc: 'Dynamic ASCII grid can view live programme data and mark favourite shows for recording.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/programme-guide'
    },
    techStack: [{title: 'Java', src: 'https://www.java.com/en/'}, {title: 'Maven', src: 'https://maven.apache.org/'}, {title: 'XML Parser', src: 'https://commons.apache.org/proper/commons-jelly/apidocs/org/apache/commons/jelly/parser/XMLParser.html'}, {title: 'Jota Time', src: 'https://www.joda.org/joda-time/'}, {title: 'Bleb API', src: 'http://bleb.org/tv/data/listings/'}]
  },{
    id: uuid(),
    name: 'Canvas Arcade',
    desc: 'Responsive web application with account and rankings system, showcasing a collection of canvas mini-games.',
    img: '',
    path: {
      demo: '',
      git: 'https://github.com/madelinben/arcade-canvas'
    },
    techStack: [{title: 'HTML5', src: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'}, {title: 'CSS3', src: 'https://developer.mozilla.org/en-US/docs/Web/CSS'}, {title: 'JavaScript', src: 'https://www.javascript.com/'}, {title: 'Canvas API', src: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'}, {title: 'p5', src: 'https://p5js.org/'}]
  }
];

export default projectData;