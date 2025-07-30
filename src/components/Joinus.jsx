import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';



const JoinUs = () => {
  return (
    <>
    <Navbar/>

      {/* Image Section */}
      <div className="image-container">
        <img src="/join2.jpg" alt="Join Us" className="zoom-image" />
      </div>

      {/* Join Us Content */}
      <div className="container">
        <h1 className="text-center my-4">Join Us</h1>
        <p className="text-center">
          Whether you're an author or a professional looking to collaborate with us, we welcome you! Fill out the form below based on your interest.
        </p>

        {/* Forms */}
        <div className="form-container">
          {/* Sell With Us Form */}
          <div className="form-box">
            <h2>Sell With Us</h2>
            <form method="POST">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required />

              <label htmlFor="article">Article/Book Title</label>
              <input type="text" id="article" name="article" placeholder="Enter the title of your article or book" required />

              <label htmlFor="description">Article/Book Description</label>
              <textarea id="description" name="description" placeholder="Provide a brief description" required></textarea>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>

          {/* Work With Us Form */}
          <div className="form-box">
            <h2>Work With Us</h2>
            <form method="POST">
              <label htmlFor="name-work">Full Name</label>
              <input type="text" id="name-work" name="name-work" placeholder="Enter your full name" required />

              <label htmlFor="email-work">Email Address</label>
              <input type="email" id="email-work" name="email-work" placeholder="Enter your email address" required />

              <label htmlFor="experience">Experience</label>
              <textarea id="experience" name="experience" placeholder="Tell us about your previous experience" required></textarea>

              <label htmlFor="offering">What do you offer?</label>
              <textarea id="offering" name="offering" placeholder="Describe the skills or services you offer" required></textarea>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>

        {/* Directives */}
        <div className="directives">
          <p><strong>Important Directives:</strong></p>
          <ul>
            <li>For "Sell With Us", make sure your content is original and follows our content guidelines.</li>
            <li>For "Work With Us", we value creativity, dedication, and collaboration.</li>
            <li>We only accept applications from individuals who are passionate about books and literary work.</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default JoinUs;
