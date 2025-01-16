import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import AppData from "@data/app.json";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useIntl } from "react-intl";

const Contact = () => {
  const intl = useIntl();
  return (
    <Layouts>
      <PageBanner
        pageTitle={intl.formatMessage({ id: "pages.contact.title" })}
        breadTitle={intl.formatMessage({ id: "menu.contact" })}
        anchorLabel={intl.formatMessage({ id: "pages.contact.button" })}
        anchorLink={"#contact"}
        paddingBottom={1}
        align={"center"}
      />

      {/* map */}
      {/* <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div> */}
      {/* map end */}

      {/* contact form */}
      <section id="contact">
        <div className="container mil-p-120-90">
          <h3
            className="text-3xl font-medium mil-center mil-up mil-mb-120"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "pages.contact.subtitle" }),
            }}
          />

          <Formik
            initialValues={{ email: "", name: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const form = document.getElementById("contactForm");
              const status = document.getElementById("contactFormStatus");
              const data = new FormData();

              data.append("name", values.name);
              data.append("email", values.email);
              data.append("message", values.message);

              fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                  Accept: "application/json",
                },
              })
                .then((response) => {
                  if (response.ok) {
                    status.innerHTML = "Thanks for your submission!";
                    form.reset();
                  } else {
                    response.json().then((data) => {
                      if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                          .map((error) => error["message"])
                          .join(", ");
                      } else {
                        status.innerHTML =
                          "Oops! There was a problem submitting your form";
                      }
                    });
                  }
                })
                .catch((error) => {
                  status.innerHTML =
                    "Oops! There was a problem submitting your form";
                });

              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                id="contactForm"
                action={AppData.settings.formspreeURL}
                className="row align-items-center"
              >
                <div className="col-lg-6 mil-up">
                  <input
                    type="text"
                    placeholder={intl.formatMessage({
                      id: "pages.contact.name",
                    })}
                    name="name"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="mb-5 p-4"
                  />
                </div>
                <div className="col-lg-6 mil-up">
                  <input
                    type="email"
                    placeholder={intl.formatMessage({
                      id: "pages.contact.email",
                    })}
                    name="email"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="mb-5 p-4"
                  />
                </div>
                <div className="col-lg-12 mil-up">
                  <textarea
                    placeholder={intl.formatMessage({
                      id: "pages.contact.message",
                    })}
                    name="message"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="mb-4 p-4"
                  />
                </div>
                <div className="col-lg-8">
                  {/*  <p className="mil-up mil-mb-30">
                    <span className="mil-accent">*</span> We promise not to
                    disclose your personal information to third parties.
                  </p> */}
                </div>
                <div className="col-lg-4">
                  <div className="mil-adaptive-right mil-up mil-mb-30">
                    <button
                      type="submit"
                      className="mil-button mil-arrow-place"
                    >
                      <span>
                        {intl.formatMessage({ id: "pages.contact.button" })}
                      </span>
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
                <div className="form-status" id="contactFormStatus" />
              </form>
            )}
          </Formik>
        </div>
      </section>
      {/* contact form end */}
    </Layouts>
  );
};
export default Contact;

export async function getStaticProps({ locale }) {
  const messages = require(`../locales/${locale}.json`);

  return {
    props: {
      messages,
    },
  };
}
