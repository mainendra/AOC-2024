const input = Deno.readTextFileSync("input.txt").trim();
// const input = Deno.readTextFileSync("test.txt").trim();

const matrix: string[][] = [];

input.split('\n').forEach(line => {
    const row = line.trim().split('');
    matrix.push(row);
});

const XMAS = 'XMAS';
const rows = matrix.length;
const colms = matrix[0].length;

let total = 0;

for (let c = 0; c < colms; c++) {
    for (let r = 0; r < rows; r++) {
        if (matrix[r][c] !== 'X') continue;

        // left
        if (matrix[r][c] + matrix[r][c-1] + matrix[r][c-2] + matrix[r][c-3] === XMAS) total++;
        // right
        if (matrix[r][c] + matrix[r][c+1] + matrix[r][c+2] + matrix[r][c+3] === XMAS) total++;
        // up
        if (matrix[r][c] + matrix[r-1]?.[c] + matrix[r-2]?.[c] + matrix[r-3]?.[c] === XMAS) total++;
        // down
        if (matrix[r][c] + matrix[r+1]?.[c] + matrix[r+2]?.[c] + matrix[r+3]?.[c] === XMAS) total++;
        // upLeft
        if (matrix[r][c] + matrix[r-1]?.[c-1] + matrix[r-2]?.[c-2] + matrix[r-3]?.[c-3] === XMAS) total++;
        // upRight
        if (matrix[r][c] + matrix[r-1]?.[c+1] + matrix[r-2]?.[c+2] + matrix[r-3]?.[c+3] === XMAS) total++;
        // downLeft
        if (matrix[r][c] + matrix[r+1]?.[c-1] + matrix[r+2]?.[c-2] + matrix[r+3]?.[c-3] === XMAS) total++;
        // downRight
        if (matrix[r][c] + matrix[r+1]?.[c+1] + matrix[r+2]?.[c+2] + matrix[r+3]?.[c+3] === XMAS) total++;
    }
}

console.log(total);
