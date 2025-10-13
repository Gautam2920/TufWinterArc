function isPalindrome(n) {
    if (n < 0) return false;

    const str = n.toString();

    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

