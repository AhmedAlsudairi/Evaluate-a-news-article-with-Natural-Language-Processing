function validateURL(url) {

    let valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);

return valid;
}

export { validateURL }
