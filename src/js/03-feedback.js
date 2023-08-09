import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")

form.addEventListener("input", throttle(onInput, 500))
form.addEventListener("submit", onSubmit)

const {email, message} = form.elements

function onInput(evt) {
    const obj = {
        email: email.value.trim(),
        message: message.value.trim()
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}
pageReload()

function onSubmit (evt) {
  evt.preventDefaul()
  const saveStorage = localStorage.getItem("feedback-form-state")
  const parsedSaveStorage = JSON.parse(saveStorage)
  console.log(saveStorage)
  localStorage.removeItem("feedback-form-state")
  form.reset()
}

function pageReload () {
    if(localStorage.getItem("feedback-form-state")) {
        email.value = localStorage.getItem("feedback-form-state").email || "";
        message.value = localStorage.getItem("feedback-form-state").message || "";
    }
}