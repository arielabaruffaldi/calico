import PageBannerDark from "@components/PageBannerDark";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";
import { useIntl } from "react-intl";

const Services = (props) => {
  const intl = useIntl();
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-dark-bg">
        <PageBannerDark
          pageTitle={intl.formatMessage({ id: "page.services.title" })}
          breadTitle={"Services"}
          anchorLabel={intl.formatMessage({ id: "page.services.button" })}
          anchorLink={"#services"}
        />

        {/* services */}
        <section id="services">
          <div className="mi-invert-fix">
            <div className="container mil-p-120-60">
              <div className="row">
                <div className="col-lg-5">
                  <div className="mil-lines-place mil-light">
                    <LinesIcon />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    {props.services.map((item, key) => (
                      <div
                        className="col-md-6 col-lg-6"
                        key={`services-item-${key}`}
                      >
                        <h4
                          className="font-medium text-3xl mil-muted mil-up mil-mb-30"
                          dangerouslySetInnerHTML={{
                            __html: intl.formatMessage({
                              id: item.preview_title,
                            }),
                          }}
                        />
                        <p className="mil-descr mil-light-soft mil-up mil-mb-30">
                          {intl.formatMessage({
                            id: item.short,
                          })}
                        </p>
                        <ul className="mil-service-list mil-light mil-mb-30">
                          {item.list.items
                            .slice(0, 4)
                            .map((list_item, list_key) => (
                              <li
                                className="mil-up"
                                key={`services-item-${key}-list-${list_key}`}
                              >
                                {intl.formatMessage({
                                  id: list_item.label,
                                })}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* services end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Services;

export async function getStaticProps({ locale }) {
  const allServices = getSortedServicesData();
  const messages = require(`../locales/${locale}.json`);

  return {
    props: {
      services: allServices,
      messages,
    },
  };
}
