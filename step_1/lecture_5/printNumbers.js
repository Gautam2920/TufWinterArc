function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    this.printNumbers(n, current + 1);
}
