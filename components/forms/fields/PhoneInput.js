export default function PhoneInput({ input, label, meta, required }) {
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
        placeholder="(888) 888-8888"
        onChange={(e) => {
          const onlyNums = e.target.value.replace(/[^0-9]/g, "");
          if (onlyNums.length < 10) {
            input.onChange(onlyNums);
          } else if (onlyNums.length === 10) {
            const number = onlyNums.replace(
              /(\d{3})(\d{3})(\d{4})/,
              "($1) $2-$3"
            );
            input.onChange(number);
          }
        }}
      />
      {meta.error && meta.touched && (
        <span className="form__error-message">{meta.error}</span>
      )}
    </div>
  );
}
