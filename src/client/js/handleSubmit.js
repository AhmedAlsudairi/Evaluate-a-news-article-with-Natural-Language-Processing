import { fetchData } from './fetchData';

async function handleSubmit(event) {

    event.preventDefault()
    const url = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    const data = await fetchData(url);

    document.getElementById('polarity').innerHTML += data.polarity;
    document.getElementById('subjectivity').innerHTML += data.subjectivity;
    document.getElementById('text').innerHTML += data.text;
    document.getElementById('polarity_confidence').innerHTML += data.polarity_confidence;
    document.getElementById('subjectivity_confidence').innerHTML += data.subjectivity_confidence;
}

export { handleSubmit }
