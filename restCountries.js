const restCountriesAPI = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displyData(data))
}
const displyData = countries =>{
    const countriesContainer = document.getElementById('show-data');
   countries.forEach(countrie =>{
    console.log(countrie);
    const countriesDiv = document.createElement('div');
    countriesDiv.innerHTML = `
        <h3>Name: ${countrie.name}</h3>
        <p>Capital: ${countrie.capital ? countrie.capital : 'no capital'}</p>
    `;
    countriesContainer.appendChild(countriesDiv);
   });
    

}
restCountriesAPI();