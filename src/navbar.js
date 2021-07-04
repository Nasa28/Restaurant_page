const myNav = ()=>{
  const list = ["Menu", "Contact", "About"];
  const header = document.createElement('header')
  const container = document.createElement('div')
  const logo = document.createElement('h1');
  const listContainer = document.createElement('div');
  const uList = document.createElement('ul');
  
  header.classList.add('header')
   logo.classList.add('h1');
  uList.classList.add('li');
  container.classList.add('container')

  list.forEach((element) => {
    const h2 = document.createElement('h2');
    const a = document.createElement('a');
    a.classList.add('link')
    a.setAttribute('href', '#');
    h2.textContent = `${element}`;
    a.appendChild(h2);
    uList.appendChild(a);
  });

  logo.innerHTML = "Chop-Life-Restaurant"
  container.appendChild(logo);
 listContainer.appendChild(uList)
 container.appendChild(listContainer)
 header.appendChild(container)
 content.appendChild(header)
   
}

export default myNav
