import Link from "next/link";

const Header = () => {
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
          <button className="burger-btn active" />
          <div className="burger">
            <div className="burger__inner">
              <div className="buerger__menu">
                <img
                  src="./img//svg/logo.svg"
                  alt=""
                  className="header__logo"
                />
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
              </div>
            </div>
          </div>
        </div>
        <div className="headeroverlay" />
      </header>
    </>
  );
};

export default Header;
