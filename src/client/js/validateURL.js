function validateURL(url) {

    const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);

    return valid;
}

export { validateURL }
