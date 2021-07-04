const about = () =>{
  const myAbout = document.createElement('div');
  const abt = document.createElement('h1');
  const abtDetails = document.createElement('h2')
myAbout.classList.add('about')
abt.classList.add('abt')
  abt.textContent = "About Us";
  abtDetails.textContent = `Lorem Ipsum is simply dummy text of the 
  and typesetting industry. Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown printer 
  took a galley of type and scrambled it to make a type specimen book.
   It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of 
    Lorem Ipsum.`

    myAbout.appendChild(abt);
    myAbout.appendChild(abtDetails);
    content.appendChild(myAbout)
}

export default about