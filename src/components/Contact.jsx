import React from "react";
import { useStateValue } from "../contexts/StateContext";

function Contact() {
  const [{ translation }] = useStateValue();

  return (
    <div className="container mx-auto flex justify-center">
      <form className="w-full max-w-md">
        <h1 className="mb-8" id="contact-form">
          {translation.contactform_title}
        </h1>
        <div id="innerForm">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="contact-first-name"
              >
                {translation.contactform_firstname}
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                placeholder={translation.contactform_firstname}
                id="contact-first-name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="contact-last-name"
              >
                {translation.contactform_lastname}
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                placeholder={translation.contactform_lastname}
                id="contact-last-name"
                type="text"
              />
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
              <input
                className="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                placeholder={translation.contactform_your_email_placeholder}
                id="contact-email"
                type="email"
              />
              <p
                className="text-red text-xs italic"
                id="contact-email-errormsg"
              />
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
              <textarea
                className="appearance-none block w-full bg-grey-lighter border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                rows="10"
                placeholder={translation.contactform_your_message_placeholder}
                id="contact-message"
              />
              <p
                className="text-red text-xs italic"
                id="contact-message-errormsg"
              />
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
                type="button"
                id="send"
              >
                {translation.contactform_submit}
              </button>
              <p className="text-xs italic mt-2">
                {translation.contactform_required_info}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
