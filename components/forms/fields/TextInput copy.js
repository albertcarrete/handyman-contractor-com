import React from "react";

export default ({ input, meta, required }) => {
  return (
    <div
      className={`bb-form__input-group ${
        meta.error && meta.touched ? "bb-form__input-group--error" : ""
      }`}
    >
      <label>
        {input.name}
        {required ? "*" : ""}
      </label>
      <input {...input} type="text" />
      {meta.error && meta.touched && (
        <span className="bb-error">{meta.error}</span>
      )}
    </div>
  );
};
