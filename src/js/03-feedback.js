import throttle from "lodash.throttle";
const STORAGE_MESSAGE = "feedback-form-state";
const STORAGE_EMAIL = "email-state";

const refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
  email: document.querySelector(".feedback-form input"),
};

const formData = {};

refs.form.addEventListener("submit", onSubmitForm);
refs.textarea.addEventListener("input", throttle(onTextAreaInput, 500));
refs.email.addEventListener("input", throttle(onEmailValue, 500));

refs.form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
});

savedValueMessage();
savedEmailValue();
saveResultat(formData);

function onSubmitForm(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_MESSAGE);
  localStorage.removeItem(STORAGE_EMAIL);
}

function saveResultat(event) {
  console.log(formData);
}

function onTextAreaInput(event) {
  const message = event.target.value;

  localStorage.setItem(STORAGE_MESSAGE, message);
}

function savedValueMessage() {
  const savedMessage = localStorage.getItem(STORAGE_MESSAGE);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

function onEmailValue(event) {
  const curretEmailValue = event.target.value;

  localStorage.setItem(STORAGE_EMAIL, curretEmailValue);
}

function savedEmailValue() {
  const savedEmail = localStorage.getItem(STORAGE_EMAIL);

  if (savedEmail) {
    refs.email.value = savedEmail;
  }
}
