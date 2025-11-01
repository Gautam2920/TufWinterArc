function graphColoring(edges, m, n) {
    const graph = Array.from({ length: n }, () => Array(n).fill(0));

    for (const [u, v] of edges) {
        graph[u][v] = 1;
        graph[v][u] = 1;
    }

    const colors = new Array(n).fill(0);

    function isSafe(node, color) {
        for (let i = 0; i < n; i++) {
            if (graph[node][i] === 1 && colors[i] === color) return false;
        }
        return true;
    }

    function solve(node) {
        if (node === n) return true;

        for (let c = 1; c <= m; c++) {
            if (isSafe(node, c)) {
                colors[node] = c;
                if (solve(node + 1)) return true;
                colors[node] = 0;
            }
        }
        return false;
    }

    return solve(0);
}
