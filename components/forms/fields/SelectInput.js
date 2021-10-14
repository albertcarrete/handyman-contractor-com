import React from "react";

export default function SelectInput({
  input,
  meta,
  required,
  defaultOption,
  options,
}) {
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
      <select {...input} className="select-css">
        {defaultOption && (
          <option value={defaultOption.value} disabled>
            {defaultOption.key}
          </option>
        )}
        {options.map((option, optionIndex) => {
          return (
            <option key={optionIndex} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </select>
      {meta.error && meta.touched && (
        <span className="bb-error">{meta.error}</span>
      )}
    </div>
  );
}
