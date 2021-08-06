const openWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const countryCode = 'us';
const apiKey = '710ce5115e1bf7f0431571fdcd110447';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    const zipCode = '27960'
    const url = openWeatherBaseUrl + '&zip=' + zipCode + ',' + countryCode + '&appid=' + apiKey;
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.main.temp + '&deg;C'
    })
}

export { handleSubmit }
