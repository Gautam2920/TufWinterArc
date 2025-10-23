function maxDepth(s) {
    let depth = 0,
        maxDepth = 0;
    for (const ch of s) {
        if (ch === "(") {
            depth++;
            maxDepth = Math.max(maxDepth, depth);
        } else if (ch === ")") {
            depth--;
        }
    }
    return maxDepth;
}