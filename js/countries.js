const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries()
const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries');
    countriesContainer.classList.add('grid-3')
    countries.forEach(country =>  {
        console.log(country)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="country shadow">
                <div class="row">
                <div class="col-4">
                    <img class="img-fluid" src="${country.flags.png}">
                </div>
                    <p class="col-8 my-auto">${country.name.common} (${country.cca2})</p>
                </div>
                <div class="row mt-3">
                    <small>Official Name: ${country.name.official}</small>
                    <small>Capital: ${country.capital}</small>
                    <small>Population: ${country.population}</small>
                    <small>Region: ${country.region}</small>
                    <small>Time Zones: ${country.timezones[0]}</small>
                    <div class="map-btn mt-3">
                    <a href="${country.maps.googleMaps}" target="_blank">See on Map</a></div>
                </div>
            </div>
        `;
        countriesContainer.appendChild(div);
    })
}