import React from 'react'

const Footer = () => {
  return (
    <>
    <div id="footerbg">
      <div className='container-fluid' id="footerwidth">
        <div className="row pt-4 pb-3">
          <div className="col-6 col-md-3 col-lg-3">
            <p>ABOUT</p>
            <small>Contact Us</small><br/>
            <small>About Us</small><br/>
            <small>Careers</small><br/>
            <small>Flipkart Stories</small><br/>
            <small>Press</small>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <p>HELP</p>
            <small>Payments</small><br/>
            <small>Shipping</small><br/>
            <small>Cancellation & Returns</small><br/>
            <small>FAQ</small>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <p>CONSUMER POLICY</p>
            <small>Terms of Use</small><br/>
            <small>Security</small><br/>
            <small>Privacy</small><br/>
            <small>Sitemap</small>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <p>Mail Us:</p>
            <small>Flipkart Internet Private Limited, </small><br/>
            <small>Buildings Alyssa, Begonia & </small><br/>
            <small>Clove Embassy Tech Village, </small><br/>
            <small>Bengaluru, 560103, Karnataka, India</small>
            <hr/>
            <p>Social</p>
            <a href="#" className="me-4"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="me-4"><i className="fa-brands fa-x-twitter"></i> </a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer