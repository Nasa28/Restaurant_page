import './assets/css/style.css';

import myNav from './navbar';
import home from './home';
import menuMain from './menu';
import contact from './contact';
import about from './about';

const content = document.getElementById('content');
  myNav();
  home()

  document.addEventListener('click', (event) => {
    const value = event.target.innerText;
  
    if (value === "Home"){
      content.innerHTML = '';
      myNav();
      home()
    }

    if (value === "Menu"){
    content.innerHTML = '';
      myNav();
      menuMain()
    }

    if (value === "ORDER"){
      content.innerHTML = '';
        myNav();
        menuMain()
      }

    if (value === "Contact"){
    content.innerHTML = '';
    myNav();
    contact()
    }

    if (value === "About"){
      content.innerHTML = '';
      myNav();
      about()
    }
 
  });
  
  
