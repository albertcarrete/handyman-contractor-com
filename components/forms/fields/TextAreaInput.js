export default function TextAreaInput({
  input,
  label,
  meta,
  required,
  placeholder,
}) {
  return (
    <div
      className={`form__group col-span-2 ${
        meta.error && meta.touched ? "form__group--error" : ""
      }`}
    >
      {" "}
      <label>
        {label}
        {required ? "*" : ""}
      </label>
      <textarea className="h-100px" {...input} placeholder={placeholder} />
      {meta.error && meta.touched && (
        <span className="form__error-message">{meta.error}</span>
      )}
    </div>
  );
}
