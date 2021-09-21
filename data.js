const API_KEY = `d97936f4380e824cb0958e9d6bce8c9c`;

const searchTemp = () => {
    const city = document.getElementById('search-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}
const  setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemp = temp => {
    setInnerText('city', temp.name);
    setInnerText('temp', temp.main.temp);
    setInnerText('weather', temp.weather[0].main);
    console.log(temp);
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
}