let username = prompt("Lütfen isminizi giriniz");
let usernameDOM = document.querySelector("#myName");
usernameDOM.innerHTML = username;

let showTime = () => {
  let clockSelection = document.querySelector("#myClock");
  let date;
  date = new Date();
  let day = date.getDay();
  if (day == 0) {
    day = "Pazar";
  }
  if (day == 1) {
    day = "Pazartesi";
  }
  if (day == 2) {
    day = "Salı";
  }
  if (day == 3) {
    day = "Çarşamba";
  }
  if (day == 4) {
    day = "Perşembe";
  }
  if (day == 5) {
    day = "Cuma";
  }
  if (day == 6) {
    day = "Cumartesi";
  }
  clockSelection.innerHTML = ` ${date.toLocaleDateString("tr-TR")} ${day}`;
};

let Clock = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  text = `${hour} : ${minute} :  ${second} `;
  document.querySelector("#time").innerText = text;
  let t = setTimeout(Clock, 1000);
};

showTime();
Clock();
