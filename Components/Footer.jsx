import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__content">
            <div className="col">
              <Link href="/" className="footer__links accent-link">
                Find A Store
              </Link>
              <Link href="/" className="footer__links accent-link">
                Become A Member
              </Link>
              <Link href="/" className="footer__links accent-link">
                Sign Up for Email
              </Link>
              <Link href="/" className="footer__links accent-link">
                Send Us Feedback
              </Link>
              <Link href="/" className="footer__links accent-link">
                Student Discounts
              </Link>
            </div>
            <div className="col">
              <Link href="/" className="footer__links accent-link">
                Get Help
              </Link>
              <Link href="/" className="footer__links">
                Order Status
              </Link>
              <Link href="/" className="footer__links">
                Delivery
              </Link>
              <Link href="/" className="footer__links">
                Returns
              </Link>
              <Link href="/" className="footer__links">
                Payment Options
              </Link>
            </div>
            <div className="social-links">
              <Link href="/" className="social-link">
                <img src="./img/svg/social-links/Vector.svg" alt="" />
              </Link>
              <Link href="/" className="social-link">
                <img src="./img/svg/social-links/Vector-1.svg" alt="" />
              </Link>
              <Link href="/" className="social-link">
                <img src="./img/svg/social-links/Vector-2.svg" alt="" />
              </Link>
              <Link href="/" className="social-link">
                <img src="./img/svg/social-links/Vector-3.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="foter__copytight">
            <Link href="/" className="location">
              <span>
                <img src="./img/svg/location.svg" alt="" />
              </span>{" "}
              Russia
            </Link>
            <p className="copyright">© 2023 Nike, Inc. All Rights Reserved</p>
            <ul className="footer-copyright-nav">
              <li>Guides</li>
              <li>Terms of Sale</li>
              <li>Nike Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
