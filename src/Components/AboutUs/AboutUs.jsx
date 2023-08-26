import React from 'react';

function AboutUs() {
  return (
    <div className="container">
      <h2 className="mt-4 mb-4">About Us</h2>
      <p>
        Welcome to our website! We are a dedicated team of professionals
        passionate about providing high-quality products and services to our
        customers.
      </p>
      <p>
        Our mission is to make your life easier by offering a wide range of
        products that cater to your needs. Whether you're looking for
        state-of-the-art technology, stylish fashion, or household essentials,
        we have you covered.
      </p>
      <p>
        We take pride in our commitment to customer satisfaction and strive to
        exceed your expectations. If you have any questions or feedback, please
        don't hesitate to contact us through our{' '}
        <a href="/contact-us">Contact Us</a> page.
      </p>

      {/* Social Media Links */}
      <div className="mt-4">
        <h3>Connect with Us:</h3>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-social btn-linkedin"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-social btn-github"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/your-facebook-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-social btn-facebook"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
