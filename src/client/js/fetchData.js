async function fetchData(url) {

  const res = await fetch('http://localhost:8081/test?text=' + url)
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

export { fetchData }
