import LinesIcon from "@layouts/svg-icons/Lines";
import { useIntl } from "react-intl";

const AboutSection = () => {
  const intl = useIntl();

  return (
    <>
      {/* about */}
      <section id="about">
        <div className="container mil-p-120-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="mil-mb-90">
                <h2
                  className="font-medium mil-up mil-mb-60"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "page.about.title" }),
                  }}
                />
                <div
                  className="mil-text mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({
                      id: "page.about.description",
                    }),
                  }}
                />

                <div className="hidden md:block mil-about-quote">
                  <div className="mil-avatar mil-up">
                  </div>
                  <h6
                    className="mil-quote mil-up"
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "page.about.description",
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mil-about-photo mil-mb-90">
                <div className="mil-lines-place">
                  <LinesIcon />
                </div>
                <div
                  className="mil-up mil-img-frame"
                  style={{ paddingBottom: "160%" }}
                >
                  <img
                    src="/img/photo/1.jpg"
                    alt="about"
                    className="mil-scale"
                    data-value-1="1"
                    data-value-2="1.2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
    </>
  );
};

export default AboutSection;
