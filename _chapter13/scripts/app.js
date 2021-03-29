const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim(); // --> get city value
  cityForm.reset();

  forecast
    .updateCity(city) // -----------------> update the UI with new city
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  // ------------- set LS
  localStorage.setItem("city", city);
});

// -------------------------------funcs

const updateUI = (data) => {
  const cityDetails = data.cityDetails;
  const weather = data.weather;

  //const { cityDetails, weather } = data; //----> destructiv method

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
  `;

  // update the night/day & icon img
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  // ternary operator ?
  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);

  // remove the d-none class
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

//------------------checking LS
if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
