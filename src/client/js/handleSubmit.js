import {fetchData} from './fetchData';
async function  handleSubmit (event){
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    let data = await fetchData(url);
  
    console.log(data);
    document.getElementById('results').innerHTML = data;
    
    
}

export { handleSubmit }
