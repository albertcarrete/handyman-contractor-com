import React from "react";

export default function EmailInput({
  input,
  placeholder,
  label,
  meta,
  required,
}) {
  return (
    <div
      className={`form__group ${
        meta.error && meta.touched ? "form__group--error" : ""
      }`}
    >
      {" "}
      <label>
        {label}
        {required ? "*" : ""}
      </label>
      <input placeholder={placeholder} {...input} type="email" className="" />
      {meta.error && meta.touched && (
        <span className="form__error-message">{meta.error}</span>
      )}
    </div>
  );
}
