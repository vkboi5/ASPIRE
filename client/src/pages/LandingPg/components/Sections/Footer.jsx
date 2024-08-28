import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section text-white">
      <div className="container">
        
        
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="http://localhost:3000/static/media/logo2.94ebbf2a18b3269d61ec.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading ">
                  <h3>Useful Links</h3>
                </div>
                <ul className='text-white'>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Virtual Mentor</a></li>
                
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          
          <div className="row">
            
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                
                <p>
                  Copyright &copy; 2024, All Right Reserved{' '}
                  <a href="https://codepen.io/anupkumar92/">Aspire</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">features</a></li>
                  <li><a href="#">Eligibily Criteria</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
