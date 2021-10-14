import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import TextInput from "./fields/TextInput";
import EmailInput from "./fields/EmailInput";
import PhoneInput from "./fields/PhoneInput";
import ZipCodeInput from "./fields/ZipCodeInput";
import TextAreaInput from "./fields/TextAreaInput";
import axios from "axios";
import { isEmpty } from "../../utils/objectHelpers";
import { validateRecaptcha } from "../../lib/recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

import {
  required,
  phoneValidation,
  emailValidator,
  composeValidators,
} from "./Validators";

export default function InlineForm() {
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [redirect, setRedirect] = useState("");
  const [buttonText, setButtonText] = useState("Send Information");
  const router = useRouter();

  async function verifyRecaptcha(humanKey) {
    try {
      if (!humanKey) {
        throw "No human key";
      }
      let result = await validateRecaptcha(humanKey);
      result ? setIsRecaptchaValid(true) : setIsRecaptchaValid(false);
    } catch (err) {
      console.log("error verification");
      setIsRecaptchaValid(false);
    }
  }

  return (
    <Form
      onSubmit={async (e, form) => {
        try {
          const formData = new FormData();
          for (var key in e) {
            formData.append(key, e[key]);
          }
          await axios.post(
            `https://getform.io/f/${process.env.NEXT_PUBLIC_GET_FORM_KEY_CONTACT}`,
            formData,
            {
              headers: {
                "content-type": "multipart/form-data",
              },
            }
          );
          setIsRecaptchaValid(false);
          form.restart();
          router.push(`/contact/confirmation`);
        } catch (err) {
          console.log(err);
        }
      }}
      render={({ handleSubmit, submitting, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="form form--white z-20 relative"
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Field
              name="name"
              label="Name"
              validate={required}
              component={TextInput}
              placeholder="Full name"
              required
            />
            <Field
              name="phone"
              label="Phone"
              validate={composeValidators(required, phoneValidation)}
              component={PhoneInput}
              placeholder="(888) 888-8888"
              required
            />
            <Field
              name="email"
              label="Email"
              validate={composeValidators(required, emailValidator)}
              component={EmailInput}
              placeholder="Your email"
              required
            />
            <Field
              name="zipcode"
              label="Zip Code"
              component={ZipCodeInput}
              validate={composeValidators(required)}
              placeholder="5 digit zip code"
              required
            />
            <Field
              name="message"
              label="Message"
              component={TextAreaInput}
              validate={composeValidators(required)}
              placeholder="Briefly describe how we can help"
              required
            />
            <div className="bb-form__input-group col-span-2">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={async (e) => {
                  await verifyRecaptcha(e);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="button button--large button--bright-teal flex-none mr-2 w-full md:w-auto"
            disabled={submitting || !isRecaptchaValid || !isEmpty(errors)}
          >
            Submit Information
          </button>
        </form>
      )}
    />
  );
}
