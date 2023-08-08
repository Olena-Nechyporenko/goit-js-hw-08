import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")

form.addEventListener("input", throttle(onInput, 500))

function onInput(evt) {
    console.dir(evt.target.name)
    const inputValue = evt.target.value
    const obj = {
        email: inputValue,
        message: inputValue
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
    
}
