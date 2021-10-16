const date = document.querySelector(".date");
const menuContent = document.querySelector(".hidden");

const mainBtn = document.querySelector(".main_button");
const menuBtn = document.querySelector(".hamburger");

const current = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  // second: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  weekday: "long",
};

// to use the users browser language
const locale = navigator.language;

// setting the date and time using internationalisation method
// date.innerHTML = new Intl.DateTimeFormat(locale, options).format(current);

// another way of formatting the date and time
// setInterval(() => {
//   const currentTime = new Date();
//   const day = currentTime.getDay();
//   const hour = currentTime.getHours();
//   const minute = currentTime.getMinutes();
//   const second = `${currentTime.getSeconds()}`.padStart(2, 0);
//   date.innerHTML = `${hour}:${minute}:${second}`;
// }, 1000);

// Menu Button
let counter = 0;
menuBtn.addEventListener("click", () => {
  counter++;
  counter % 2 == 0 ? menuContent.classList.add("hidden") : menuContent.classList.remove("hidden");
});

// Main Button

const option = {
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
setInterval(() => {
  const currentTime = new Date();
  date.innerHTML = new Intl.DateTimeFormat("en-IN", option).format(currentTime);
}, 1000);
