function palindromeCheck(s) {
    const str = s.toString();

    const reversed = str.split('').reverse().join('');
    return str === reversed;
}