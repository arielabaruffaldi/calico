import Link from "next/link";
import { useState } from "react";
import AppData from "@data/app.json";
import { useRouter } from "next/router";

import BackToTop from "../back-to-top/Index";
import Pentagon from "@layouts/pentagon/Index";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";

import { useIntl } from "react-intl";

const DefaultHeader = ({ extraClass }) => {
  const intl = useIntl();
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const { asPath } = useRouter();

  const menuItems = [
    {
      label: intl.formatMessage({ id: "menu.home" }),
      link: "/",
    },
    {
      label: intl.formatMessage({ id: "menu.portfolio" }),
      link: "/projects",
    },
    {
      label: intl.formatMessage({ id: "menu.services" }),
      link: "/services",
    },
    {
      label: intl.formatMessage({ id: "menu.contact" }),
      link: "/contact",
    },
    {
      label: intl.formatMessage({ id: "menu.team" }),
      link: "/team",
    },
  ];

  menuItems.forEach((item, index) => {
    let s_class1 = "";

    if (
      (asPath.indexOf(item.link) != -1 && item.link != "/") ||
      asPath == item.link
    ) {
      s_class1 += " mil-active";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });


  return (
    <>
      {/* menu */}
      <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {/* frame clone */}
        <div className="mil-frame-top">
          <Link href={AppData.header.logo.link} className="mil-logo">
            {AppData.header.logo.symbol}
          </Link>
          <div className="flex flex-row gap-3">
            <LanguageSwitcher />
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
        {/* frame clone end */}
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    {navItems.map((item, key) => (
                      <li
                        className={item.classes}
                        key={`header-menu-item-${key}`}
                      >
                        <Link
                          href={item.link}
                          /* onClick={
                            item.children != 0
                              ? (e) => clickedMobileMenuItemParent(e)
                              : ""
                          } */
                        >
                          {item.label}
                        </Link>
                        {item?.children != 0 && (
                          <ul>
                            {item?.children?.map((subitem, key2) => (
                              <li
                                key={`header-submenu${key}-item-${key2}`}
                                className={
                                  (asPath.indexOf(subitem.link) != -1 &&
                                    subitem.link != "/") ||
                                  asPath == subitem.link
                                    ? "mil-active"
                                    : ""
                                }
                              >
                                <Link href={subitem.link}>{subitem.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="mil-menu-right-frame">
                  <div className="mil-animation-in">
                    <div className="mil-animation-frame">
                      <div
                        className="mil-animation mil-position-1 mil-scale"
                        data-value-1="2"
                        data-value-2="2"
                      >
                        <Pentagon />
                      </div>
                    </div>
                  </div>
                  <div className="mil-menu-right">
                    <div className="row">
                      <div className="col-lg-8 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Projects</h6>

                        <ul className="mil-menu-list">
                          <li>
                            <Link
                              href="/projects/project-1"
                              className="mil-light-soft"
                            >
                              Interior design studio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/projects/project-2"
                              className="mil-light-soft"
                            >
                              Home Security Camera
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/projects/project-3"
                              className="mil-light-soft"
                            >
                              Kemia Honest Skincare
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/projects/project-4"
                              className="mil-light-soft"
                            >
                              Cascade of Lava
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/projects/project-5"
                              className="mil-light-soft"
                            >
                              Air Pro by Molekule
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/projects/project-6"
                              className="mil-light-soft"
                            >
                              Tony's Chocolonely
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Useful links</h6>

                        <ul className="mil-menu-list">
                          <li>
                            <a href="#." className="mil-light-soft">
                              Cookie Policy
                            </a>
                          </li>
                          <li>
                            <a href="#." className="mil-light-soft">
                              Careers
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Canada</h6>

                        <p className="mil-light-soft mil-up">
                          71 South Los Carneros Road, California{" "}
                          <span className="mil-no-wrap">+51 174 705 812</span>
                        </p>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Germany</h6>

                        <p className="mil-light-soft">
                          Leehove 40, 2678 MC De Lier, Netherlands{" "}
                          <span className="mil-no-wrap">+31 174 705 811</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}

      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame */}
      <div className="mil-frame">
        <div className="mil-frame-top">
          <Link href={AppData.header.logo.link} className="mil-logo">
            {AppData.header.logo.symbol}
          </Link>
          <div className="flex flex-row gap-3">
            <LanguageSwitcher />
            <div
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </div>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page" />

          <BackToTop />
        </div>
      </div>
      {/* frame end */}
    </>
  );
};
export default DefaultHeader;
