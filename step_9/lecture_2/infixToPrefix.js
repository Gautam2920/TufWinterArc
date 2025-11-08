function toPostfix(expression) {
    const precedence = (op) => {
        if (op === '^') return 3;
        if (op === '*' || op === '/') return 2;
        if (op === '+' || op === '-') return 1;
        return 0;
    };

    const isRightAssociative = (op) => op === '^';

    let stack = [];
    let result = '';

    for (let ch of expression) {
        if (/[a-z0-9]/.test(ch)) {
            result += ch;
        } else if (ch === '(') {
            stack.push(ch);
        } else if (ch === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop();
        } else {
            while (
                stack.length &&
                precedence(stack[stack.length - 1]) > 0 &&
                (precedence(stack[stack.length - 1]) > precedence(ch) ||
                    (precedence(stack[stack.length - 1]) === precedence(ch) &&
                        !isRightAssociative(ch)))
            ) {
                result += stack.pop();
            }
            stack.push(ch);
        }
    }

    while (stack.length) result += stack.pop();

    return result;
}
