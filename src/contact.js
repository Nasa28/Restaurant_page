import maps from './assets/images/maps.png';

const contact = () => {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');
  const contactInfo = document.createElement('h2');
  const contactInfor = document.createElement('h3');
  const map = document.createElement('img');
  map.classList = 'map';
  map.src = maps;
  contactDiv.classList.add('contact');

  contactInfor.textContent = 'Address: The restuarant address goes here...';
  contactInfo.textContent = 'Phone: +234111222333';

  contactInfor.appendChild(map);
  contactInfo.appendChild(contactInfor);
  contactDiv.appendChild(contactInfo);
  content.appendChild(contactDiv);
};

export default contact;