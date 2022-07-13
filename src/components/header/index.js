import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, HeaderSite, NavLinks } from "./HeaderElements";
import { FiMenu, FiX } from "react-icons/fi";
import { NAVLINKS } from "../../config/Data";
import logoSite from "../../assets/img/logo_site.png";
import ThemeSwitcher from "../../config/ThemeSwitcher";
// import { motion } from "framer-motion";

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = "hidden";
    }
    function enableScroll() {
      document.body.style.overflow = "";
    }

    if (isNavOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isNavOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    });
  }, []);

  return (
    <HeaderSite ref={headerRef}>
      <HeaderContainer>
        <div className="header__logo_link">
          <div className="header__logo">
            <div className="try">
              <NavLinks to="home" smooth activeClass="active" spy={true}>
                <img alt="logo_header" src={logoSite} className="logo__img" />
              </NavLinks>
            </div>
            <ThemeSwitcher />
          </div>
          {isMobile && (
            <div
              className="menuIcon"
              tabIndex="0"
              role="button"
              onKeyDown={() => setIsNavOpen(true)}
              onClick={() => setIsNavOpen(true)}
            >
              <FiMenu />
            </div>
          )}

          <div className="header__menu">
            <nav className={isMobile && isNavOpen ? "open" : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  tabIndex="0"
                  role="button"
                  onKeyDown={() => setIsNavOpen(false)}
                  onClick={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}
              <ul>
                {NAVLINKS.map((item, i) => (
                  <li key={i}>
                    <div className="closing">
                      <div className="header__item">
                        <div className="text_menu">
                          <NavLinks
                            to={item.to}
                            smooth
                            activeClass="active"
                            spy={true}
                          >
                            {item.name}
                          </NavLinks>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                {/* <li>
                  <div className="closing">
                    <div className="header__item">
                      <div className="resume">
                        <a href="#try" target="_blank" rel="noopener noreferrer">
                          Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </nav>

            {isNavOpen && (
              <div
                className="navOverlay"
                tabIndex="0"
                aria-label="overlay"
                role="button"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
          </div>
        </div>
      </HeaderContainer>
    </HeaderSite>
  );
};

export const Header404 = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <HeaderSite ref={headerRef}>
      <HeaderContainer>
        <div initial="hidden" animate="visible" className="header__logo_link">
          <div className="header__logo">
            <NavLinks to="home" smooth activeClass="active" spy={true}>
              <img alt="logo_header" src={logoSite} className="logo__img" />
            </NavLinks>

            <ThemeSwitcher />
          </div>
        </div>
      </HeaderContainer>
    </HeaderSite>
  );
};

export default Header;
