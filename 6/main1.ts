const input = Deno.readTextFileSync("input.txt").trim();
// const input = Deno.readTextFileSync("test.txt").trim();
const matrix: string[][] = [];

let guardPos = [0,0];

input.split('\n').forEach((line, rIndex) => {
    const chars = line.trim().split('');
    const tmpGuardIndex = chars.indexOf('^');
    if (tmpGuardIndex >= 0) {
        guardPos = [rIndex, tmpGuardIndex];
    }

    matrix.push(chars);
});

matrix[guardPos[0]][guardPos[1]] = 'X'; // start position

const totalRows = matrix.length;
const totalColms = matrix[0].length;

const dir = [-1, 0]; // start dir up

while((guardPos[0] > 0 && guardPos[0] < totalRows - 1) && (guardPos[1] > 0 && guardPos[1] < totalColms - 1)) {
    const tmpRow = guardPos[0] + dir[0];
    const tmpCol = guardPos[1] + dir[1];
    if (matrix[tmpRow][tmpCol] === '#') {
        [dir[0],dir[1]] = [dir[1], -1 * dir[0]]; // rotate 90 deg right
    } else {
        guardPos = [tmpRow, tmpCol];
        matrix[tmpRow][tmpCol] = 'X'; // for debug
    }
}

// Total positions
let count = 0;
matrix.forEach(row => {
    row.forEach(ele => {
        if (ele === 'X') {
            count++;
        }
    });
});
console.log(count);
