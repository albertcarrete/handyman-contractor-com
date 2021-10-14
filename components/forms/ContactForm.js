import { useState } from "react";
import { Form, Field } from "react-final-form";
import Link from "next/link";
import { useRouter } from "next/router";

import ReCAPTCHA from "react-google-recaptcha";
import { validateRecaptcha } from "../../lib/recaptcha";
import axios from "axios";
import TextInput from "./fields/TextInput";
import EmailInput from "./fields/EmailInput";
import PhoneInput from "./fields/PhoneInput";
import SelectInput from "./fields/SelectInput";
import TextAreaInput from "./fields/TextAreaInput";
import { isEmpty } from "../../utils/objectHelpers";
import ZipCodeInput from "./fields/ZipCodeInput";

import {
  required,
  phoneValidation,
  emailValidator,
  composeValidators,
} from "./Validators";

import InlineForm from "../forms/InlineForm";

export default function ContactForm(props) {
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [redirect, setRedirect] = useState("");
  const [buttonText, setButtonText] = useState("Submit Information");
  const router = useRouter();

  // async function verifyRecaptcha(humanKey) {
  //     try {
  //       if (!humanKey) {
  //         throw "No human key";
  //       }
  //       let result = await props.verifyRecaptcha(humanKey);
  //       result ? setIsRecaptchaValid(true) : setIsRecaptchaValid(false);
  //     } catch (err) {
  //       setIsRecaptchaValid(false);
  //     }
  //   }
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
    <div className="">
      <div className="flex justify-end"></div>
      <div className="font-body bg-white px-4 py-10 md:p-10 rounded-md">
        <Form
          onSubmit={async (e, form) => {
            try {
              setButtonText("Sending...");
              setFormErrorMessage("");
              const formData = new FormData();
              for (var key in e) {
                formData.append(key, e[key]);
              }
              //   await axios({
              //     url:
              //       "https://getform.io/f/4a0a4270-e374-46c6-ba6a-301ddb4ef090",
              //     method: "post",
              //     config: {
              //       headers: { "Content-Type": "multipart/form-data" },
              //     },
              //     data: formData,
              //   });
              await axios.post(
                `https://getform.io/f/${process.env.NEXT_PUBLIC_GET_FORM_KEY_CONTACT}`,
                formData,
                {
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                }
              );
              router.push("/contact/confirmation");
              setButtonText("Send Request");
            } catch (err) {
              console.log(err);
              setFormErrorMessage(
                "Something went wrong please call us at 1-877-241-2490"
              );
              setButtonText("Send Request");
            }
          }}
          render={({ handleSubmit, submitting, errors }) => (
            <form
              className="form grid grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              <Field
                name="Name"
                label="Name"
                placeholder="Your name"
                validate={required}
                component={TextInput}
                required
              />
              <Field
                name="Email"
                label="Email"
                component={EmailInput}
                validate={composeValidators(required, emailValidator)}
                placeholder="Your email"
                required
              />
              <Field
                name="Phone"
                label="Phone"
                validate={composeValidators(required, phoneValidation)}
                component={PhoneInput}
                required
              />
              <Field
                name="Zipcode"
                label="Zip Code"
                component={ZipCodeInput}
                validate={composeValidators(required)}
                placeholder="5 digit zip code"
                required
              />
              <Field
                name="Message"
                label="Message"
                validate={required}
                component={TextAreaInput}
                placeholder="How can we help you today?"
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
              <div>
                <button
                  type="submit"
                  className={`button button--black`}
                  disabled={submitting || !isRecaptchaValid || !isEmpty(errors)}
                >
                  {buttonText}
                </button>
                <p className="text-red-500 font-body">{formErrorMessage}</p>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}
