import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  useEffect(() => {
    setBurgerIsOpen(false);
  }, []);
  const openBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
    burgerIsOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link href="/" className="header__logo">
              <img src="/img/svg/logo.svg" alt="" />
            </Link>
            <ul className="nav">
              <li>
                <Link href="/" className="nav__link">
                  New &amp; Featured
                </Link>
              </li>
              <li>
                <Link href="/" className="nav__link">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/" className="nav__link">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/" className="nav__link">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/" className="nav__link">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="nav__link">
                  SNKRS
                </Link>
              </li>
            </ul>
            <div className="header-links">
              <Link href="/cart" className="cart__link">
                <img src="/img/svg/cartIcon.svg" alt="" />
              </Link>
              <a href="" className="favorites__link">
                <img src="/img/svg/favoritesIcon.svg" alt="" />
              </a>
              {/* <Search /> */}
            </div>
          </div>
          <div className="mobile-nav">
            <Link onClick={() => setBurgerIsOpen(false)} href="/">
              <img src="./img//svg/logo.svg" alt="" className="header__logo" />
            </Link>

            <div className="mobile-nav__content">
              <button
                onClick={openBurger}
                className={burgerIsOpen ? "burger-btn active" : "burger-btn "}
              />

              <Link
                onClick={() => setBurgerIsOpen(false)}
                href="/cart"
                className="mobile-nav__link"
              >
                <img src="/img/svg/cartIcon.svg" alt="" />
              </Link>
              <a href="" className=" mobile-nav__link">
                <img src="/img/svg/favoritesIcon.svg" alt="" />
              </a>
              {/* <Search /> */}
            </div>
          </div>
        </div>
        <div className={burgerIsOpen ? "burger active" : "burger"}>
          <div className="burger__inner">
            <div className="burger__menu">
              <img src="./img//svg/logo.svg" alt="" className="header__logo" />
              <ul className="nav">
                <li>
                  <Link
                    onClick={() => setBurgerIsOpen(false)}
                    href="/"
                    className="nav__link"
                  >
                    New &amp; Featured
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setBurgerIsOpen(false)}
                    href="/"
                    className="nav__link"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setBurgerIsOpen(false)}
                    href="/"
                    className="nav__link"
                  >
                    Sale
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setBurgerIsOpen(false)}
                    href="/"
                    className="nav__link"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setBurgerIsOpen(false)}
                    href="/"
                    className="nav__link"
                  >
                    Kids
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setBurgerIsOpen(false)}
                    href="/catalog"
                    className="nav__link"
                  >
                    SNKRS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div
        className={burgerIsOpen ? "headeroverlay active" : "headeroverlay"}
      />
    </>
  );
};

export default Header;
