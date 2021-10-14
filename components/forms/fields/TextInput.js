export default function TextInput({
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
      <label className="block">
        {label}
        {required ? "*" : ""}
      </label>
      <input placeholder={placeholder} {...input} type="text" />
      {meta.error && meta.touched && (
        <span className="form__error-message">{meta.error}</span>
      )}
    </div>
  );
}
