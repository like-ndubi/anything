import React from 'react';

const Footer = () => {
  return (
    <section className="row px-4 py-3 bg-info text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
      <div className="col-md-4 mb-3">
        <h5 className="text-center mb-3" style={{ fontSize: '1.1rem' }}>About Us</h5>
        <p className="small mb-2">
          We are a passionate bookstore committed to connecting readers with diverse stories, fostering a love for reading, and creating a warm, welcoming space where every visitor feels inspired and valued.
        </p>
        <p className="small mb-2">
          Your local bookstore offering curated reads, friendly service, and a cozy space for every book lover.
        </p>
      </div>

      <div className="col-md-4 mb-3">
        <h5 className="text-center mb-3" style={{ fontSize: '1.1rem' }}>Contact Us</h5>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control form-control-sm mb-2"
          />
          <textarea
            placeholder="Leave a comment"
            rows="4"
            className="form-control form-control-sm mb-2"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn btn-outline-dark btn-sm w-50"
          />
        </form>
      </div>

      <div className="col-md-4 mb-3">
        <h5 className="text-center mb-3" style={{ fontSize: '1.1rem' }}>Stay Connected</h5>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/fb.png" alt="Facebook" width="28" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/in.png" alt="Instagram" width="28" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src="/x.png" alt="X" width="28" />
          </a>
        </div>
        <p className="small text-center mb-0">
          Have questions or need book recommendations? Reach out to us anytime—we’re here to help!
        </p>
      </div>

      <div className="col-12">
        <h6 className="text-center mt-4 mb-0 small text-white" style={{ fontSize: '0.8rem' }}>
          Developed by Dismas Ndubi. &copy; 2025. All Rights Reserved
        </h6>
      </div>
    </section>
  );
};

export default Footer;
