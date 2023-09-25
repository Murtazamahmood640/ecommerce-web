import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import '../Home.css'
export const Contact = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to a server)
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      comment: '',
    });
  };


  const heroContent = {
    title: 'Welcome to Our E-commerce Store',
    description: 'Discover the latest trends in fashion for men, women, and children.',
    image: "src/assets/images/banner1-removebg-preview.png",
  };
  return (
    
        <>
          <Header/>
        <div className='Container'>
          <Hero {...heroContent} />
          <div className='Heading'>
            <h1>Get In Touch</h1>
          </div>
          <div className='contact-container'>
          <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  
            </div>
      
        </div>
        <Footer/>
        </>  )
   
  
};

export default Contact;


 