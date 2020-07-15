import{validateURL} from './validateURL';
function checkURL(event) {

    // check what text was put into the form field
    let url = event.target.value
    let valid = validateURL(url);

    let errMessage = document.getElementById('message');
    let submitBtn = document.getElementById('submitBtn');
    if(valid){
        errMessage.innerHTML='';
        submitBtn.removeAttribute('disabled');
    }else{
        errMessage.innerHTML='The URL is invalid'
        submitBtn.setAttribute('disabled','true');
    }

}

export { checkURL }
