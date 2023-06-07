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
}

updateTimeDate();
setInterval(updateTimeDate, 1000);