

var num1;
var num2;
var operator;
var currentEntry = '0';

updateScreen(0);

$("button").on("click", function () {
    var pressedButtonAnimation = $(this).attr("id");
    animate(pressedButtonAnimation);
    var pressedButton = $(this).html();
    console.log(pressedButton);


    if (pressedButton === "c") {
        num1, num2, operator, currentEntry = '0';
    }

    else if (pressedButton === ".") {
        currentEntry += pressedButton;
    }
    else if (pressedButton === "+" || pressedButton === "-" || pressedButton === "*" || pressedButton === "/") {
        num1 = currentEntry;
        operator = pressedButton;
        currentEntry = operator;

    } else if (pressedButton === "=") {
        //run calculation 
        currentEntry = operation(num1, num2, operator);

    } else if (isNumber(pressedButton)) {
        if (currentEntry === '0') {
            currentEntry = pressedButton;
        } else if (currentEntry.includes("+") || currentEntry.includes("-") || currentEntry.includes("*") || currentEntry.includes("/")) {
            num2 = pressedButton;
            currentEntry = num2;
        }
        else {
            currentEntry += pressedButton;
        }
    }
    updateScreen(currentEntry);

});


$(document).keydown(function (button) {
    var pressedButton = button.key
    console.log(pressedButton.key);


    if (pressedButton === "c") {
        num1, num2, operator, currentEntry = '0';
    }

    else if (pressedButton === ".") {
        currentEntry += pressedButton;
    }
    else if (pressedButton === "+" || pressedButton === "-" || pressedButton === "*" || pressedButton === "/") {
        num1 = currentEntry;
        operator = pressedButton;
        currentEntry = operator;

    } else if (pressedButton === "=" || pressedButton === "Enter") {
        //run calculation 
        currentEntry = operation(num1, num2, operator);
        num1 = currentEntry;
    } else if (isNumber(pressedButton)) {
        if (currentEntry === '0') {
            currentEntry = pressedButton;
        } else if (currentEntry.includes("+") || currentEntry.includes("-") || currentEntry.includes("*") || currentEntry.includes("/")) {
            num2 = pressedButton;
            currentEntry = num2;
        }
        else {
            currentEntry += pressedButton;
        }
    }
    updateScreen(currentEntry);

});



function animate(button) {
    $("#" + button).addClass("pressed");

    setTimeout(function () {
        $("#" + button).removeClass("pressed");
    }, 200);
}


function updateScreen(displayValue) {
    var displayValue = displayValue.toString();
    $(".calculator-screen").html(displayValue);
}

function isNumber(value) {
    return !isNaN(value);
}


function operation(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
}
