function NnumbersSum(N) {
    if (N <= 0) return 0;
    return N + this.NnumbersSum(N - 1)
}