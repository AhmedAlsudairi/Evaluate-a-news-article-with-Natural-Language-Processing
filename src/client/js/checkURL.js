import { validateURL } from './validateURL';
function checkURL(event) {

    const url = event.target.value
    const valid = validateURL(url);

    const errMessage = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    if (valid) {
        errMessage.innerHTML = '';
        submitBtn.removeAttribute('disabled');
    } else {
        errMessage.innerHTML = 'The URL is invalid'
        submitBtn.setAttribute('disabled', 'true');
    }

}

export { checkURL }
