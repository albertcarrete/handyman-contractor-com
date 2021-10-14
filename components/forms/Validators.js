export const required = (value) => (value ? undefined : "Required");
export const phoneValidation = (value) =>
  value.length > 10 ? undefined : "Enter a 10 digit phone number";

export const phoneValidator = (value) => {
  var pattern = new RegExp(/^[0-9\b]+$/);

  if (!pattern.test(value)) {
    return "Please enter only numbers.";
  } else if (value.length != 10) {
    return "Please enter a valid phone number.";
  }
  return undefined;
};
export const emailValidator = (value) => {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  if (pattern.test(value)) {
    return undefined;
  }
  return "Enter a valid email";
};
export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
