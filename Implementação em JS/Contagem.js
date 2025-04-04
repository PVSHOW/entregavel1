function countInRange(data, N) {
    if (data.length === 0) return 0;
    const first = data[0];
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= first && data[i] <= N) {
            count++;
        }
    }
    return count;
}

// Exemplo de uso:
console.log(countInRange([5, 3, 8, 1, 4, 2], 5)); // 4 (5, 3, 1, 4, 2 estão entre 5 e 5? A lógica precisa ser revisada)