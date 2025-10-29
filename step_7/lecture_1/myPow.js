function myPow(x, n) {
    if (n === 0) return 1.0;
    let pow = Math.abs(n);
    let res = 1.0;

    while (pow > 0) {
        if (pow % 2 === 1) res *= x;
        x *= x;
        pow = Math.floor(pow / 2);
    }

    return n < 0 ? 1 / res : res;
}