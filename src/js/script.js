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

// =============================================================== //