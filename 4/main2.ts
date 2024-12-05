const input = Deno.readTextFileSync("input.txt").trim();
// const input = Deno.readTextFileSync("test.txt").trim();

const matrix: string[][] = [];

input.split('\n').forEach(line => {
    const row = line.trim().split('');
    matrix.push(row);
});

const rows = matrix.length;
const colms = matrix[0].length;

let total = 0;

for (let r = 1; r < rows - 1; r++) { // rows
    for (let c = 1; c < colms - 1; c++) {
        if (matrix[r][c] !== 'A') continue;

        const s1 = matrix[r-1][c-1] + matrix[r][c] + matrix[r+1][c+1];
        const s2 = matrix[r-1][c+1] + matrix[r][c] + matrix[r+1][c-1];

        if ((s1 === 'MAS' || s1 === 'SAM') && (s2 === 'MAS' || s2 === 'SAM')) total++;
    }
}

console.log(total);
