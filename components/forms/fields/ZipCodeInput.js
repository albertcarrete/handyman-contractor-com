export default function ZipCodeInput({
  label,
  placeholder,
  input,
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
      <input
        {...input}
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          const onlyNums = e.target.value.replace(/[^0-9]/g, "");
          if (onlyNums.length < 6) {
            input.onChange(onlyNums);
          }
        }}
      />
      {meta.error && meta.touched && (
        <span className="form__error-message">{meta.error}</span>
      )}
    </div>
  );
}
