const home = () => {
  const main = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const imageParent = document.createElement('div')
  const image = document.createElement('img')
  image.id = "id";
  image.className = "image";
  image.src = '../food-13642.html'
  image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6ghC4OB1yk7uqJoEupPCdoFFfYecE5J_UQ&usqp=CAU"; 
  main.classList.add('main');
  imageParent.classList.add("image_parent")
  h3.classList.add('h3')
  p.classList.add('p')
  h3.textContent= "Welcome to Chop-life- restaurant.";
  p.textContent = `We are always there to serve you better.
  you will never regret it`;

  imageParent.appendChild(image);
  p.appendChild(imageParent);
  h3.appendChild(p);
  main.appendChild(h3);
  content.appendChild(main)
}

export default home