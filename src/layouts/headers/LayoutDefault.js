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
    /*  {
      label: intl.formatMessage({ id: "menu.team" }),
      link: "/team",
    }, */
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
       {/* <div className="mil-frame-top">
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
        </div> */}
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
           {/*    <div className="col-xl-7">
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
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* menu */}

      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame */}
      <div className={`mil-frame ${toggle ? "mil-active" : ""}`}>
        <div className="mil-frame-top">
          <Link href={AppData.header.logo.link} className="mil-logo">
            {AppData.header.logo.symbol}
          </Link>
          <div className="flex flex-row">
            <div className="language-switcher-2">
              <LanguageSwitcher />
            </div>
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
