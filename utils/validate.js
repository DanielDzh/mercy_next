const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export class Validator {
  constructor(form, trans) {
    this.errors = [];
    this.trans = trans;
    this.form = form;
  }

  requiredField(field) {
    if (!this.form[field])
      this.errors.push({ field, message: this.trans("required-field") });
  }

  checkEmail(field = "email") {
    if (!EMAIL_REGEX.test(this.form[field]))
      this.errors.push({ field, message: this.trans("wrong-email") });
  }

  customValidations(condition, field = "email", message) {
    if (condition) this.errors.push({ field, message });
  }
}
