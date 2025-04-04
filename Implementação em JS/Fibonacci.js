function fibonacci(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Exemplo de uso:
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]