import { fetchData } from './fetchData';

async function handleSubmit(event) {

    event.preventDefault()
    const url = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    const data = await fetchData(url);
    document.getElementById('results').innerHTML = data;
}

export { handleSubmit }
