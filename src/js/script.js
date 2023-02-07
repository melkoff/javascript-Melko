// TASK 1 //
const age = Number(prompt('Введіть ваш вік: '));

let someYear = [];

if (age >= 0) {
  if (age < 12) {
    alert("Вітаю ви дитина віком від 0 до 12 років!");
  } else if (age >= 12 && age < 18) {
    alert("Вітаю ви підліток віком від 12 до 18 років!");
  } else if (age >= 18 && age < 60) {
    alert("Вітаю ви дорослий віком від 18 до 60 років!");
  } else if (age >= 60) {
    alert("Вітаю ви пенсіонер віком від 60 років!");
  }
} else {
  (alert("Ви ввели не вірні дані, спробуйте ще раз!"));
  window.location.reload();
}
// =============================================================== //
// TASK 2 //
const numberFromZeroToNine = Number(prompt("Введіть число від 0 до 9: "));

let someNumber = [];

if (someNumber) {
  if (numberFromZeroToNine >= 0) {
    if (numberFromZeroToNine == 0) {
      confirm("Спробуйте ще раз!");
      window.location.reload();
    } else if (numberFromZeroToNine >= 10) {
      confirm("До 9 будь ласка, спробуйте ще раз!");
      window.location.reload();
    } else if (numberFromZeroToNine == 1) {
      alert("Ваш символ: !");
    } else if (numberFromZeroToNine == 2) {
      alert("Ваш символ: @");
    } else if (numberFromZeroToNine == 3) {
      alert("Ваш символ: #");
    } else if (numberFromZeroToNine == 4) {
      alert("Ваш символ: $");
    } else if (numberFromZeroToNine == 5) {
      alert("Ваш символ: %");
    } else if (numberFromZeroToNine == 6) {
      alert("Ваш символ: ^");
    } else if (numberFromZeroToNine == 7) {
      alert("Ваш символ: &");
    } else if (numberFromZeroToNine == 8) {
      alert("Ваш символ: *");
    } else if (numberFromZeroToNine == 9) {
      alert("Ваш символ: (")
    }
    else {
      (alert("Спробуйте ще раз!"));
      window.location.reload();
    }
  }
}
// =============================================================== //
// TASK 3 //
const SAME_NUMBER = prompt("Введіть тризначне число:");
if (SAME_NUMBER > 99 && SAME_NUMBER < 1000) {
  if (
    SAME_NUMBER[0] == SAME_NUMBER[1] ||
    SAME_NUMBER[0] == SAME_NUMBER[2] ||
    SAME_NUMBER[1] == SAME_NUMBER[2]
  ) {
    alert (`У вас є однакові цифри! ${SAME_NUMBER.slice('')}`)
  } else {
    alert ("У вас немає однакових цифр!")
  }
} else {
  (alert("Спробуйте ще раз!"));
  window.location.reload();
}
// =============================================================== //
// TASK 4 //
const LEAP_YEAR = prompt("Введіть рік і дізнайтеся високосний він, чи ні!");
if (LEAP_YEAR > 0){
  if (LEAP_YEAR % 4 == 0 && LEAP_YEAR % 100 !=0){
    alert(`${LEAP_YEAR} є високосним роком`);
  } else {
    alert(`${LEAP_YEAR} не є високосним роком`);
  }
} else {
  (alert("Спробуйте ще раз!"));
  window.location.reload();
}
// =============================================================== //
// TASK 5 //
const FIVE_DIGIT = Number(prompt('Введіть пятизначне число, та подивіться чи є воно паліндромом:'));
const LAST_INDEX = String(FIVE_DIGIT).length - 2 + 1;
for (let i = 0; i < String(FIVE_DIGIT).length / 5; i) {
   if (String(FIVE_DIGIT).length == 5) {
      if (String(FIVE_DIGIT)[i] == String(FIVE_DIGIT)[LAST_INDEX - i]) {
         alert(`${FIVE_DIGIT} є паліндромом!`);
         break;
      } else {
         alert(`${FIVE_DIGIT} не є паліндромом!`);
         break;
      }
   } else {
      (alert("Ви ввели не вірні дані, спробуйте ще раз!"));
      window.location.reload();
      break;
   }
}
// =============================================================== //
// TASK 6 //
const USER_MONEY = Number(prompt('Введіть суму доларів (USD) яку хочете поміняти'));
if (USER_MONEY > 0) {
  const CHANGES_MONEY = prompt('Впишіть валюту для конвертації: EUR, UAH або AZN');
  if (CHANGES_MONEY == "EUR") {
    alert(`Ваша сума: ${(USER_MONEY * 0.91)} EUR`)
  } else if (CHANGES_MONEY == "UAH") {
    alert(`Ваша сума: ${(USER_MONEY * 40.2).toFixed(2)} UAH`)
  } else if (CHANGES_MONEY == "AZN") {
    alert(`Ваша сума: ${(USER_MONEY * 1.70).toFixed(2)} AZN`)
  } else {
    alert('Введіть корректні дані!');
    window.location.reload();
  }
} else {
  alert('Спробуйте ще раз!');
  window.location.reload();
}
// =============================================================== //
// TASK 7 //
const USER_SALE = Number(prompt('Введіть суму покупки:'));
let saleOne = USER_SALE - USER_SALE * 0.03;
let saleTwo = USER_SALE - USER_SALE * 0.05;
let saleThree = USER_SALE - USER_SALE * 0.07;
if  (USER_SALE >= 0) {
    if ( USER_SALE >= 200 && USER_SALE <= 300) {
        alert(`Ваша знижка 3%. Сума вашої оплати ${saleOne}`);
    } else if (USER_SALE <= 0){
        alert('Ви ввели невірне значення!');
    window.location.reload();
    } else if (USER_SALE >= 300 && USER_SALE <= 500){
        alert(`Ваша знижка 5%. Сума вашої оплати ${saleTwo}`);
    } else if (USER_SALE >= 500) {
        alert(`Ваша знижка 7%. Сума вашої оплати ${saleThree}`);
    } else{
        alert(`Знижки немає, сума вашої оплати: ${USER_SALE}`);
    }
} else {
    alert('Ви ввели невірні дані, спробуйте ще раз!');
    window.location.reload();
}
// =============================================================== //
// TASK 8 //
const SIRCLE_SIDE = Number(prompt(`Введіть довжину кола:`));
const SQUARE_SIDE = Number(prompt(`Введіть периметр квадрата:`));
let sideOfSircle = SIRCLE_SIDE * SIRCLE_SIDE * Math.PI;
let lengthSquare = SQUARE_SIDE * 4;
if (SIRCLE_SIDE >= 1 && SQUARE_SIDE >= 1) {
  if (sideOfSircle <= lengthSquare) {
    alert(`Коло поміститься у квадрат.`);
  } else{
    alert(`Коло не поміститься у квадрат.`);
  }
} else {
  alert("Ви ввели не вірні дані, спробуйте ще раз!");
  window.location.reload();
}
// =============================================================== //
// TASK 9 //
let counter = 0;
let firstQuestion = prompt(
   'Впишіть цифру, від 1 до 3 та натисніть "OK". \n Коли Україна стала незалежною? \n 1. У 1995 році \n 2. У 1999 році \n 3. У 1991 році'
);
if (firstQuestion == 3) {
   alert("Відповідь вірна!");
   counter = counter + 2;
} else if (firstQuestion == 1 || firstQuestion == 2) {
   alert(`Відповідь не вірна!`);
} else {
   alert("Ви ввели не вірні дані, спробуйте ще раз!");
   window.location.reload();
}
let secondQuestion = prompt(
   'Впишіть цифру, від 1 до 3 та натисніть "OK". \n Скільки місяців у році? \n 1. 9 місяців \n 2. 12 місяців \n 3. 7 місяців'
);
if (secondQuestion == 2) {
   alert("Відповідь вірна!");
   counter = counter + 2;
} else if (secondQuestion == 1 || secondQuestion == 3) {
   alert(`Відповідь не вірна!`);
} else {
   alert("Ви ввели не вірні дані, спробуйте ще раз!");
   window.location.reload();
}
let thirdQuestion = prompt(
   'Впишіть цифру, від 1 до 3 та натисніть "OK". \n Якого кольору прапор України? \n 1. Синьо-жовтий \n 2. Синьо-жовтий \n 3. Синьо-жовтий'
);
if (thirdQuestion == 1 || thirdQuestion == 2 || thirdQuestion == 3) {
   alert("Відповідь вірна!");
   counter = counter + 2;
} else {
   alert("Ви ввели не вірні дані, спробуйте ще раз!");
   window.location.reload();
}
alert(`Ви набрали ${counter} балів!`);
// // =============================================================== //
// TASK 10 //
// Я не розумію як його зробити!!!
// =============================================================== //