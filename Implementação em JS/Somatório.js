function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Exemplo de uso:
console.log(sum([1, 2, 3, 4])); // 10