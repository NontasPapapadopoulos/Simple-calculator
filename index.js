var num1;
var num2 = "";
var operator;
var currentEntry = '0';
var result = 0;
updateScreen(0);

$("button").on("click", function () {
    var pressedButton = $(this).html();

    if (isNumber(pressedButton)) {
        if (currentEntry === '0') {
            currentEntry = pressedButton;
            updateScreen(currentEntry);
        } else {
            currentEntry += pressedButton;
            updateScreen(currentEntry);
        }
    }


    else if (pressedButton === "C") {
        num1, num2, operator, currentEntry = '0';
        result = 0;
        updateScreen(0);
    }

    else if (pressedButton === ".") {
        currentEntry += pressedButton;
        updateScreen(currentEntry);
    }
    else if (pressedButton === "+" || pressedButton === "-" || pressedButton === "*" || pressedButton === "/") {
        num1 = currentEntry;
        currentEntry = "0";
        operator = pressedButton;

        updateScreen(operator);

    }
    else if (pressedButton === "^2") {
        currentEntry = Math.pow(currentEntry, 2);
        updateScreen(currentEntry);
    }

    else if (pressedButton === "sqrt") {
        var sqrt = Math.sqrt(currentEntry, 2);
        currentEntry = sqrt.toPrecision(4);
        updateScreen(currentEntry);
    }

    else if (pressedButton === "=") {

        num2 = currentEntry;
        //run calculation 
        currentEntry = operation(num1, num2, operator);
        updateScreen(currentEntry);
        num1 = currentEntry;

    }


});


$(document).keydown(function (button) {
    var pressedButton = button.key
    console.log(pressedButton.key);


    if (pressedButton === "c") {
        num1 = "0";
        num2 = "0";
        operator = "";
        currentEntry = '0';
        updateScreen(currentEntry);
    }

    else if (pressedButton === ".") {
        currentEntry += pressedButton;
        updateScreen(currentEntry);
    }
    else if (pressedButton === "+" || pressedButton === "-" || pressedButton === "*" || pressedButton === "/") {
        num1 = currentEntry;
        operator = pressedButton;
        currentEntry = "0";
        updateScreen(operator);


    } else if (pressedButton === "=" || pressedButton === "Enter") {

        num2 = currentEntry;
        //run calculation 
        currentEntry = operation(num1, num2, operator);
        updateScreen(currentEntry);
        num1 = currentEntry;
    } else if (isNumber(pressedButton)) {
        if (currentEntry === '0') {
            currentEntry = pressedButton;
            updateScreen(currentEntry);
        }
        else {
            currentEntry += pressedButton;
            updateScreen(currentEntry);
        }
    }


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
    if (operator === "/") return (num1 / num2).toPrecision(4);
}
