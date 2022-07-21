import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, HeaderSite } from "./HeaderElements";
import { FiMenu, FiX } from "react-icons/fi";
import { NAVLINKS } from "../../config/Data";
import logoSite from "../../assets/img/logo_new.png";
import ThemeSwitcher from "../../config/ThemeSwitcher";
import { NavLink } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

const ContentDrop = styled.div`
  max-height: 340px;

  .megamenu {
    position: absolute;
    top: 5rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    gap: 40px;
    box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    margin-left: -100px;

    ::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      right: 0;
      margin: auto;
      top: -20px;
      bottom: auto;
      border: 10px solid transparent;
      border-bottom-color: #fff;
    }

    ${devices.smartphone} {
      justify-content: flex-start;
      flex-wrap: wrap;
      position: static;
      box-shadow: none;
      /* visibility: visible; */
      overflow: hidden;
      visibility: visible;
      opacity: 1;
      height: 0;
      max-width: 200px;
      margin-left: 0px;
      gap: 20px;
      margin-top: 0px;
      margin-bottom: 0px;
      height: ${(props) => {
        return `${props.isDropdown ? "319" : "0"}px`;
      }};
      /* height: ${(props) => {
        const inner = document.getElementById(props.itemName);
        return `${props.isDropdown && inner ? inner.clientHeight : 0}px`;
      }}; */
      transition: height 0.35s;

      ::before {
        content: "";
        display: none;
      }
    }
  }

  .content_name {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    align-items: flex-start;

    ${devices.smartphone} {
      padding: 4px 20px;
      border-left: 1px solid #00000030;
    }

    li:first-child {
      align-items: flex-start;
      text-align: left;

      ::after {
        content: "";
        border-bottom: 1px solid #ababab;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 150px;
        margin-top: 8px;

        ${devices.smartphone} {
          border-left: 1px solid #ababab;
          border-bottom: 0px solid #ababab;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 150px;
          margin-top: 8px;
          content: "";
        }
      }
    }

    .megamenu_item {
      font-size: 13px;
      font-weight: 400;
      text-align: left;
    }

    .header_megamenu {
      font-weight: 600;
      text-transform: uppercase;
      text-align: left;
    }
  }

  .megamenu_link {
    a:hover {
      color: #d48317;
    }
  }

  .drop {
    ${devices.smartphone} {
      height: 100%;
      transition: 0.3s ease-in-out;
    }
  }
`;
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

  const [dropdown, setDropdown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  const humberHandle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsNavOpen(false);
  };

  const humberHandle2 = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // // setIsNavOpen(true);
    setDropdown((value) => !value);
  };

  console.log(dropdown);

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
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    });
  }, []);

  return (
    <HeaderSite ref={headerRef}>
      <HeaderContainer>
        <div className="header__logo_link">
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
              <ul className="bisa">
                {NAVLINKS.map((item, i) => (
                  <li key={i}>
                    <div className="closing">
                      <div className="header__item">
                        <div className="text_menu">
                          {item.megamenu === true ? (
                            <>
                              <NavLink
                                className="navmenu"
                                onClick={() => humberHandle2()}
                                to={item.to}
                                state={{ from: item.angka }}
                              >
                                {item.name}
                                {item.megamenu === true ? <BiCaretDown /> : ""}
                              </NavLink>
                            </>
                          ) : (
                            <NavLink
                              className="navmenu"
                              onClick={() => humberHandle()}
                              to={item.to}
                              state={{ from: item.angka }}
                            >
                              {item.name}
                              {item.megamenu === true ? <BiCaretDown /> : ""}
                            </NavLink>
                          )}

                          {item.megamenu === true ? (
                            <ContentDrop
                              isDropdown={dropdown}
                              itemName={item.name}
                            >
                              <div className="megamenu">
                                {item.megamenuItem &&
                                  item.megamenuItem.map((item, i) => (
                                    <ul key={i} className="content_name">
                                      <li className="megamenu_item header_megamenu">
                                        {item.name}
                                      </li>
                                      {item.sub &&
                                        item.sub.map((item, i) => (
                                          <li key={i} className="megamenu_item">
                                            <div className="megamenu_link">
                                              <a
                                                className="link"
                                                href={item.to}
                                              >
                                                {item.judul}
                                              </a>
                                            </div>
                                          </li>
                                        ))}
                                    </ul>
                                  ))}
                              </div>
                            </ContentDrop>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
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
          <div className="header__logo">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "grey" };
              }}
            >
              <img alt="logo_header" src={logoSite} className="logo__img" />
            </NavLink>
            <ThemeSwitcher />
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
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "grey" };
              }}
            >
              <img alt="logo_header" src={logoSite} className="logo__img" />
            </NavLink>
            <ThemeSwitcher />
          </div>
        </div>
      </HeaderContainer>
    </HeaderSite>
  );
};

export default Header;
