import './style.css'
import navBar from './navbar';

const loadPage = () =>{
  const content = Document.getElementById('content')
  content.appendChild(navBar)
}