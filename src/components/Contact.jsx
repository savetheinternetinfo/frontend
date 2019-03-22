import React from "react";
import { useStateValue } from "../contexts/StateContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Contact() {
  const [{ translation }] = useStateValue();

  const ContactFormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(0, translation.contactform_empty_field)
      .required(translation.contactform_required_info),
    lastName: Yup.string()
      .min(0, translation.contactform_empty_field)
      .required(translation.contactform_required_info),
    email: Yup.string()
      .email(translation.contactform_inccorect_email2)
      .required(translation.contactform_required_info),
    message: Yup.string()
      .min(0, translation.contactform_empty_message)
      .required(translation.contactform_empty_message)
  });

  return (
    <div className="container mx-auto flex justify-center">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
        validationSchema={ContactFormSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
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
                    name="firstName"
                    className="mb-3 appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    placeholder={translation.contactform_firstname}
                    type="text"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
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
                    name="lastName"
                    className="mb-3 appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    placeholder={translation.contactform_lastname}
                    type="text"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
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
                  <div
                    className="g-recaptcha"
                    data-sitekey="<%= recaptcha_sitekey %>"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <button
                    className="bezier px-4 py-3 border border-1 text-base rounded-sm border-orange bg-transparent shadow m-2 text-orange hover:bg-orange hover:text-blue-dark cursor-pointer focus:outline-none select-none"
                    type="submit"
                  >
                    {translation.contactform_submit}
                  </button>
                  <p className="text-xs italic mt-2">
                    {translation.contactform_required_info}
                  </p>
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
