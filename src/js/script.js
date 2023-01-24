// TASK 1 //
function user(text){
  alert(`Ваше ім'я: ${text}`);
}
const userName = prompt("Введіть ваше ім'я:");
user(userName);
// =============================================================== //
// TASK 2 //
const userYear = new Date().getFullYear();
const userAge = prompt("Введіть ваш рік народження!");
if(userAge <= 0){
  alert("Ви ввели невірні дані!")
}else{
  alert(`Ваш вік: ${userYear - userAge} років`);
}
// =============================================================== //
// TASK 3 //
const squareSide = prompt ("Введіть довжину сторони квадрату:");
if (squareSide <= 0){
    alert("Ви ввели невірні дані!")
}else{
    alert(`Периметр квадрата ${squareSide * 4} см`);
}
// =============================================================== //
// TASK 4 //
const sircleSide = prompt ("Введіть радіус кола:");
if (sircleSide <= 0){
    alert("Ви ввели невірні дані!")
}else{
    alert(`Площа кола ${sircleSide * sircleSide * Math.PI.toFixed(2)}`);
}
// =============================================================== //
// TASK 5 //
const getDistance = prompt("Введіть дистанцію в км:");
const getTime = prompt("Введіть час маршруту в год.:");
if (getDistance <= 0, getTime <= 0){
    alert("Введіть коректні дані!")
}else{
    alert(`Вам потрібно їхати зі швидкістю ${(getDistance / getTime).toFixed(2)} км, щоб дістатися вчасно`);
}
// =============================================================== //
// TASK 6 //
const dollar = 40.20;
const euro = 41.30;
const currencyConversion = prompt("Введіть суму в доларах:");
if (currencyConversion <= 0){
    alert("Введіть коректні дані!")
}else{
    alert(`Ваша сума в євро ${(currencyConversion * dollar / euro).toFixed(2)}`);
}
// =============================================================== //
// TASK 7 //
const userGb = 1024;
const filesMb = 820;
const countFlesh = prompt("Введіть обсяг флешки у ГБ:");
if (countFlesh <= 0){
    alert("Введіть коректні дані!")
}else{
    alert(`Файлів вміститься на флешку ${(countFlesh * userGb / filesMb).toFixed(0)}`);
}
// =============================================================== //
// TASK 8 //
const userMoney = prompt("Введіть вашу суму в гаманці:");
const chocoPrice = prompt("Введіть ціну одної шоколадки:");
const amountChoco = Math.floor(userMoney / chocoPrice)
if (userMoney<=0 || chocoPrice<=0){
    alert("Недостатньо коштів!")
}else{
    alert(`Ви можете купити ${amountChoco} шоколадок, ваша решта ${userMoney - (amountChoco * chocoPrice)}`);
}
// =============================================================== //
// TASK 9 //
const palinder = prompt("Введіть тризначне число:")
if(palinder <= 100 || palinder > 999){
  alert("Ви ввели невірні дані")
}else{
  alert(`Ваш паліндр: ${palinder.split('').reverse().join('')}`);
}
// =============================================================== //
// TASK 10 //
const evenOdd = prompt("Введіть ціле число:")
if(evenOdd % 2 == 0){
  alert("Парне число!")
}else if(evenOdd % 2 !=0){
  alert("Непарне число")
}