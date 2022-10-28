const api = {
    key: 'f6bd974493f672ad5d7f5fa056b33557',
    apiurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        getNatija(searchBox.value)
        console.log(searchBox.value);
    }
}
function getNatija(query) {
    fetch(`${api.apiurl}weather?q=${query}&units=metric&APPID=${api.key}`).then(
        (weather) => {
            return weather.json();
        }
    ).then(displayNatija) 
}

const displayNatija = (weather) => {
    console.log(weather);

    let city = document.querySelector('.location .shahar');
    city.innerHTML = `${weather.name} ${weather.sys.country}`;

    let now = new Date()
    let sana = document.querySelector('.location .sana');
    sana.innerHTML = sanaBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}°C`  ;

    let weather1 = document.querySelector('.weather');
    weather1.innerHTML = weather.weather[0].main;

    let highLow = document.querySelector('.high-low');
    highLow.innerHTML = `${weather.main.temp_min}°C  / ${weather.main.temp_max}°C `
}   

function sanaBuilder(s) {
    let oylar = [
    'January',
    'February',
    'March', 
    'April', 
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];

    let kunlar = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    let kun = kunlar[s.getDay()];
    let sana = s.getDate();
    let oy = oylar[s.getMonth()];
    let yil = s.getFullYear();
    
    return `${kun} ${sana} ${oy} ${yil}`
}