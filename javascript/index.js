function updateTimeDate (){
let cartagenaElement = document.querySelector("#cartagena");
let cartagenaTimeElement = cartagenaElement.querySelector(".time");
let cartagenaDateElement = cartagenaElement.querySelector(".date");
let cartagenaCurrent = moment().tz("America/Bogota");

cartagenaTimeElement.innerHTML = cartagenaCurrent.format("h:mm:ss [<small>]A[</small>]");
cartagenaDateElement.innerHTML = cartagenaCurrent.format("dddd, MMMM Do YYYY");

let nanjingElement = document.querySelector("#nanjing");
let nanjingTimeElement = nanjingElement.querySelector(".time");
let nanjingDateElement = nanjingElement.querySelector(".date");
let nanjingCurrent = moment().tz("Asia/Chongqing");

nanjingTimeElement.innerHTML = nanjingCurrent.format("h:mm:ss [<small>]A[</small>]");
nanjingDateElement.innerHTML = nanjingCurrent.format("dddd, MMMM Do YYYY");

let romeElement = document.querySelector("#rome");
let romeTimeElement = romeElement.querySelector(".time");
let romeDateElement = romeElement.querySelector(".date");
let romeCurrent = moment().tz("Europe/Rome");

romeTimeElement.innerHTML = romeCurrent.format("h:mm:ss [<small>]A[</small>]");
romeDateElement.innerHTML = romeCurrent.format("dddd, MMMM Do YYYY");

}

function updateCity (event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
     
    cityTimeZone = moment.tz.guess();  
      
    }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityInformation = moment().tz(cityTimeZone);

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
            <div>
            <h2>${cityName}</h2>
            <div class="date">${cityInformation.format("dddd, MMMM Do YYYY")}</div>
        </div>
            <div class="time">${cityInformation.format("h:mm:ss")} <small>${cityInformation.format("A")}</small></div>
        </div>
        <div class="link"><a href="/">Homepage</a></div>
    `;
    
}

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);

updateTimeDate();
setInterval(updateTimeDate, 1000);


