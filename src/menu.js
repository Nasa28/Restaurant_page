import icon from './assets/images/bg.png';
const menuMain = () => {
  const list = ["Menu_1", "Menu_2", "Menu_3", 
  "Menu_4", "Menu_5", "Menu_6",
   "Menu_7", "Menu_8"];
   const container = document.createElement("div");
   container.classList.add("menu-container");

   list.forEach((element) => {
     const h1 = document.createElement('h1');
     const h3 = document.createElement('h3');
     const hh2 = document.createElement('h2')
     const imageParent = document.createElement('div')
     const menuImg = document.createElement('img')
     menuImg.src = icon
     hh2.classList.add('price')
     menuImg.className = "my-image";
     imageParent.classList.add("image_parent")
     h1.textContent = `${element}`;
     h3.textContent = "The menu description will go here"
    hh2.textContent = "$50"
     h1.appendChild(menuImg)
     imageParent.appendChild(h1)
      imageParent.appendChild(h3)
      h3.appendChild(hh2)
     container.appendChild(imageParent)
     content.appendChild(container)
   })
}

export default menuMain