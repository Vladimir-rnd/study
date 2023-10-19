let screen = document.querySelector(".calc-screen");

let buttons = Array.from(
  document.querySelectorAll(".btn-clear, .btn-figure, .btn-operation, .btn-backspace, .btn-equals, .btn-point, .btn-zero"));

let memoryValue = 0;
let stopButton = false;
document.getElementById("MR").style.opacity = 0.8;
document.getElementById("equals").style.opacity = 0.7;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    switch (value) {
      case "C":
        screen.innerText = "0";
        document.getElementById("equals").style.opacity = 0.7;
        stopButton = false;
        break;
      case "MC":
        memoryValue = 0;
        document.getElementById("MR").style.opacity = 0.8;
        stopButton = false;
        break;
      case "MR":
        if (memoryValue != 0) {
          screen.innerText = memoryValue;
          if (document.getElementById("equals").style.opacity != 1) {
            document.getElementById("equals").style.opacity = 1;
          }
        }
        stopButton = true;
        break;
      case "M+":
        if (Number(screen.innerText)) {
          memoryValue += screen.innerText;
          if (document.getElementById("MR").style.opacity != 1) {
            document.getElementById("MR").style.opacity = 1;
          }
        }
        else {
          screen.innerText = "Ошибка: попытка добавить в память нечисловое значение" + ex.passedText;
          setTimeout(() => { screen.innerText = "0"; }, 1000);
        }
        stopButton = true;
        break;
      case "M-":
        if (Number(screen.innerText)) {
          memoryValue -= screen.innerText;
        }
        else {
          screen.innerText = "Ошибка: попытка вычесть из памяти нечисловое значение" + ex.passedText;
          setTimeout(() => { screen.innerText = "0"; }, 1000);
        }
        stopButton = true;
        break;
      case "BS":
        screen.innerText = screen.innerText.slice(0, -1);
        if (screen.innerText == "") {
          screen.innerText = "0"
          document.getElementById("equals").style.opacity = 0.7;
        }
        stopButton = false; //уже надоело копипастить эту строку, наверняка можно сделать через какое-то общее свойство
        break;
      case "–":
        screen.innerText += "-";
        stopButton = false;
        break;
      case "×":
        screen.innerText += "*";
        stopButton = false;
        break;
      case "÷":
        screen.innerText += "/";
        stopButton = false;
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText).toFixed(2); //eval  - устаревший
        } catch (ex) {
          screen.innerText = "Ошибка: " + ex.passedText;
          setTimeout(() => { screen.innerText = "0"; }, 1000);
        }
        stopButton = true;
        break;
      default:
        if (screen.innerText === "0" && value !== "."
          || stopButton == true) {
          screen.innerText = value;
        }
        else {
          screen.innerText += value;
        }
        if (screen.innerText == "0") {
          document.getElementById("equals").style.opacity = 0.7;
        }
        else if (document.getElementById("equals").style.opacity != 1) {
          document.getElementById("equals").style.opacity = 1;
        }
        stopButton = false;
    }
  }
  );
});