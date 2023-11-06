import React from "react";
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Foot = () => {
    return (
      <div className="containers">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-3">
            <div class="cont">
                <h1>Have some thing to talk to our professional?</h1>
            </div>
            <div class="cont">
              
               <a href="abc@gmail.com"><input type="tel" value="Our Email"  readOnly ></input></a> <br></br>
            </div>
            <div class="con">
          
            <a href="abc@gmail.com"><input type="tel" value="Whatsapp"  readOnly ></input></a> 
           
            <a href="abc@gmail.com"><input type="tel" value="LinkedIn"  readOnly ></input></a> 
            
            <a href="abc@gmail.com"><input type="tel" value="Instagrm"  readOnly ></input></a> 
            
            
            </div>
          </div>
          <div className="col-lg-3 col-md-12 mb-3">
          <div class="cont">
                <p>Menu</p>
            </div>
            <div class="cont">
                <p></p>
            </div>
            <div class="cont">
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Career</li>
                </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 mb-3">
          <div class="cont">
                <p>Support</p>
            </div>
            <div class="cont">
                <p></p>
            </div>
            <div class="cont">
                <ul>
                  <li>Policy</li>
                  <li>Reference</li>
                  <li>Other Service</li>
                </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 mb-3">
          <div class="cont">
                <p>Get help</p>
            </div>
            <div class="cont">
                <p></p>
            </div>
            <div class="cont">
                <ul>
                  <li>Support Center</li>
                  <li>Question Center</li>
                  <li>FAQ</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Foot;
