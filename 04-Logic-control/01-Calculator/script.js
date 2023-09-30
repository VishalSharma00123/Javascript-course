if (true) {
    console.log('This is true');
}

const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        default:
            result = 'Error'

    }
    console.log(result);//15
}
calculator(3, 5, '+');//15