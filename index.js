

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
        currentEntry = '0';
    }

    else if (pressedButton === ".") {
        currentEntry += pressedButton;
    }
    else if (pressedButton === "+" || pressedButton === "-" || pressedButton === "*" || pressedButton === "/") {
        num1 = currentEntry;
        operator = pressedButton;
        currentEntry = '0';

    } else if (pressedButton === "=") {
        num2 = currentEntry;
        //run calculation 
        currentEntry = operation(num1, num2, operator);
        num1 = currentEntry;
    } else if (isNumber(pressedButton)) {
        if (currentEntry === '0') {
            currentEntry = pressedButton;
        } else {
            currentEntry += pressedButton;
        }
    }
    updateScreen(currentEntry);

});


$(document).keydown(function (button) {
    var pressedButton = button.key
    console.log(pressedButton.key);


    if (pressedButton === "c") {
        currentEntry = '0';
    }

    else if (pressedButton === ".") {
        currentEntry += pressedButton;
    }
    else if (pressedButton === "+" || pressedButton === "-" || pressedButton === "*" || pressedButton === "/") {
        num1 = currentEntry;
        operator = pressedButton;
        currentEntry = '0';

    } else if (pressedButton === "=" || pressedButton === "Enter") {
        num2 = currentEntry;
        //run calculation 
        currentEntry = operation(num1, num2, operator);
        num1 = currentEntry;
    } else if (isNumber(pressedButton)) {
        if (currentEntry === '0') {
            currentEntry = pressedButton;
        } else {
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
