import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Navbars from './nav2.js';
import PhotoCollection from './photo.js';
import ImageSlider from './image.js';
import ImageRow from './ImageRow.js';
import Join from './join.js';
import ContactForm from './contact.js';
import Foot from './footer.js';
import Blog from './blog.js';
import Row from './cover.js';



import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS file


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Navbars></Navbars>
      <ImageSlider></ImageSlider>
      <ImageRow></ImageRow>
      <Row></Row> 
      <PhotoCollection></PhotoCollection>
      <ContactForm></ContactForm>
      <Join></Join> 
      <Blog></Blog>
       <Foot></Foot> 
      
    </div>
  );
}

export default App;
