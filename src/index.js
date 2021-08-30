module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let open = [];
    let close = [];
    let closeIndex;
    let openIndex;
    bracketsConfig.forEach(item => {
        open.push(item[0]);
        close.push(item[1]);
    })

    let arrayOfBrackets = str.split('');
    for (let i = 0; i < arrayOfBrackets.length; i++) {
        openIndex = open.indexOf(arrayOfBrackets[i]);
        closeIndex = close.indexOf(arrayOfBrackets[i]);
        if ((openIndex === -1) && (closeIndex === -1)) return false;

        if ((stack.length === 0) && (openIndex !== closeIndex && closeIndex !== -1)) return false;

        if (closeIndex !== -1 && stack.includes(closeIndex)) {
            if (closeIndex === stack[stack.length - 1]) stack.pop(); else return false;

        } else if (openIndex !== -1 && (openIndex !== closeIndex || !stack.includes(openIndex))) {
            stack.push(openIndex);
        }
    }
    if(stack.length > 0) return false;

    return true;
}