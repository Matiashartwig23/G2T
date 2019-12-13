class Calculator {
    display = document.getElementsByName('screen')[0];
    stack = [];

    clear() {
        // clears the screen
        this.display.value = '0';
    };

    enter() {
        this.stack.push(this.display.value)
        this.clear()
    };

    numberHandle(number) {
        if(this.display.value === "0"){
            this.display.value = ""
        }
        this.display.value += String(number)
    };

    operatorHandle(operator) {
        var value1 = parseInt(this.stack.pop());
        var value2 = parseInt(this.stack.pop());

        if(operator === "*") {
            this.display.value = String(value1*value2);
        }else if(operator === "/"){
            this.display.value = String(value1/value2);
        }else if(operator === "+"){
            this.display.value = String(value1+value2);
        }else if(operator === "-"){
            this.display.value = String(value1-value2);
        }
    };

    calculate() {
        document.addEventListener('click', (event) => {
            const {
                target
            } = event;

            if (target.classList.contains('number')) {
                this.numberHandle(target.value);
            } else if (target.classList.contains('operator')) {
                this.operatorHandle(target.value);
            } else if (target.classList.contains('equal')) {
                this.enter();
            } else if (target.classList.contains('clear')) {
                this.clear();
            }
        });
    };
}

document.addEventListener('DOMContentLoaded', function () {
    Calculator = new Calculator();
    Calculator.clear();
    Calculator.calculate();
});
