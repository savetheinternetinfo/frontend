import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import config from "../config";

import { useStateValue } from "../contexts/StateContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [{ translation }] = useStateValue();
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [response, setResponse] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const ContactFormSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(0, translation.contactform_empty_field)
      .required(translation.contactform_required_info),
    lastname: Yup.string()
      .min(0, translation.contactform_empty_field)
      .required(translation.contactform_required_info),
    email: Yup.string()
      .email(translation.contactform_inccorect_email2)
      .required(translation.contactform_required_info),
    message: Yup.string()
      .min(0, translation.contactform_empty_message)
      .required(translation.contactform_empty_message)
  });

  useEffect(() => {
    ReactDOM.render(
      <ReCAPTCHA
        onChange={handleRecaptchaChange}
        sitekey={config.tokens.recaptcha}
      />,
      document.getElementById("recaptcha")
    );
  }, []);

  function handleRecaptchaChange(value) {
    setRecaptchaValue(value);
  }

  function handleFormSubmission(value) {
    const postObj = {
      ...value,
      reCAPTCHA_VAL: recaptchaValue
    };
    axios
      .post(config.api.contact, postObj)
      .then(function({ data }) {
        if (data.valid && data.send) {
          setIsSubmitted("success");
        } else {
          setResponse(data.error);
          setIsSubmitted("error");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div className="container mx-auto flex justify-center">
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "", message: "" }}
        validationSchema={ContactFormSchema}
        onSubmit={values => {
          handleFormSubmission(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full max-w-md">
            <h1 className="mb-8">{translation.contactform_title}</h1>
            <div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="contact-first-name"
                  >
                    {translation.contactform_firstname}
                  </label>
                  <Field
                    name="firstname"
                    className="mb-3 appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    placeholder={translation.contactform_firstname}
                    type="text"
                  />
                  {errors.firstname && touched.firstname ? (
                    <div>{errors.firstname}</div>
                  ) : null}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="contact-last-name"
                  >
                    {translation.contactform_lastname}
                  </label>
                  <Field
                    name="lastname"
                    className="mb-3 appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    placeholder={translation.contactform_lastname}
                    type="text"
                  />
                  {errors.lastname && touched.lastname ? (
                    <div>{errors.lastname}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="contact-email"
                  >
                    {translation.contactform_email}*
                  </label>
                  <Field
                    name="email"
                    className="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    placeholder={translation.contactform_your_email_placeholder}
                    type="email"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  <p className="text-red text-xs italic" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="contact-message"
                  >
                    {translation.contactform_message}*
                  </label>
                  <Field
                    name="message"
                    component="textarea"
                    className="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    rows="10"
                    placeholder={
                      translation.contactform_your_message_placeholder
                    }
                  />
                  {errors.message && touched.message ? (
                    <div>{errors.message}</div>
                  ) : null}
                  <p className="text-red text-xs italic" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <div id="recaptcha" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  {Object.keys(touched).length > 0 &&
                  Object.keys(errors).length === 0 ? (
                    <button
                      className={`bezier px-4 py-3 border border-1 text-base rounded-sm border-orange bg-transparent shadow m-2 text-orange hover:bg-orange hover:text-blue-dark cursor-pointer focus:outline-none select-none`}
                      type="submit"
                    >
                      {translation.contactform_submit}
                    </button>
                  ) : (
                    <button
                      className={`bezier px-4 py-3 border border-1 text-base rounded-sm border-orange bg-transparent shadow m-2 text-orange cursor-pointer focus:outline-none select-none cursor-not-allowed`}
                      type="submit"
                      disabled
                    >
                      {translation.contactform_submit}
                    </button>
                  )}

                  <p className="text-xs italic mt-2">
                    {translation.contactform_required_info}
                  </p>

                  {(function() {
                    switch (isSubmitted) {
                      case null:
                        return;
                      case "success":
                        return (
                          <div className="bg-green-lightest border-t-4 border-green rounded-b text-green-darkest px-4 py-3 shadow-md">
                            <div className="flex">
                              <div className="py-1">
                                <i className="fa fa-info text-xl text-green mr-4" />
                              </div>
                              <div>
                                <p className="font-bold">
                                  {translation.contactform_send_header}
                                </p>
                                <p className="text-sm">
                                  {translation.contactform_send_info}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      case "error":
                        return (
                          <div className="bg-red-lightest border-t-4 border-red rounded-b text-red-darkest px-4 py-3 shadow-md mb-6">
                            <div className="flex">
                              <div className="py-1">
                                <i className="fa fa-exclamation text-xl text-red mr-4" />
                              </div>
                              <div>
                                <p className="font-bold">
                                  {translation.contactform_error_header}
                                </p>
                                <p className="text-sm">{response}</p>
                              </div>
                            </div>
                          </div>
                        );
                      default:
                        return null;
                    }
                  })()}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
