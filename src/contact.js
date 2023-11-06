import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './flex.css';
import { Modal, Button } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Add code to submit form data to backend or send email
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Contact us</h1>
      <p>In this example, each image is associated with a short description that gives viewers an idea of what the image portrays.<br></br> You can adjust these descriptions according to the content of your images.</p>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div class="arrange">
                <img src="image/viber.png" alt="Image 1" style={{ width: "128px",height:"128px", marginBottom: "10px" }} />
                <p>077-29977835</p>
              </div>
              <div class="arrange">
                <img src="image/gmail.png" alt="Image 2" style={{ width: "128px",height:"128px", marginBottom: "10px" }} />
                <p>mohammednasik68@gmail.com</p>
              </div>
              <div class="arrange">
                <img src="image/location.png" alt="Image 3" style={{ width: "128px",height:"128px" }} />
                <p><a href="#">Location</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
              <div class="conts">
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-3 col-form-label text-right">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"  className="col-sm-3 col-form-label text-right">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div class="conts">
                <div className="form-group">
                  <label htmlFor="phone"  className="col-sm-3 col-form-label text-right">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address"  className="col-sm-3 col-form-label text-right">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message"  className="col-sm-3 col-form-label text-right">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you, {formData.name}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We have received your message and will get back to you soon.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactForm;
