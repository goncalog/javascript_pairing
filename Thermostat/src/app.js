function updateTemperature() {
  temperature.innerHTML = thermostat.temperature;
}

function updateEnergyUsage() {
  currentEnergyUsage.innerHTML = thermostat.currentEnergyUsage();
}

let thermostat = new Thermostat();

let temperature = document.getElementById("temperature");
updateTemperature();
let currentEnergyUsage = document.getElementById("energy-usage");
updateEnergyUsage();

let upButton = document.getElementById("up");
upButton.addEventListener('click', function(e) {
  thermostat.up();
  updateTemperature();
  updateEnergyUsage();
});

let downButton = document.getElementById("down");
downButton.addEventListener('click', function(e) {
  thermostat.down();
  updateTemperature();
  updateEnergyUsage();
});

let onButton = document.getElementById("on");
onButton.addEventListener('click', function(e) {
  thermostat.turnPowerSavingOn();
  onButton.classList.remove('selected');
  onButton.classList.add('selected');
  offButton.classList.remove('selected');
});

let offButton = document.getElementById("off");
offButton.addEventListener('click', function(e) {
  thermostat.turnPowerSavingOff();
  offButton.classList.remove('selected');
  offButton.classList.add('selected');
  onButton.classList.remove('selected');
});

let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', function(e) {
  thermostat.reset();
  updateTemperature();
  updateEnergyUsage();
});

let weatherButton = document.getElementById("weather");
weatherButton.addEventListener('click', function(e) {
   
  let city = document.getElementById("city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      let temp = Math.round((response.main.temp - 273.15) * 10) / 10;
      currentTemperature.innerHTML = `Current temperature in ${city} is ${temp} degrees`;
    });
});

let currentTemperature = document.getElementById("current-temperature");