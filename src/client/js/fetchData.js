async function fetchData(url) {

  const res = await fetch('http://localhost:8081/test?text=' + url)
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

export { fetchData }
