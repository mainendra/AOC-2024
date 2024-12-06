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

function loops(matrix: string[][], guardPos: number[]): boolean {
    const totalRows = matrix.length;
    const totalColms = matrix[0].length;

    const dir = [-1, 0]; // start dir up
    const positions = new Set<string>();
    positions.add(`${guardPos[0]}-${guardPos[1]}-${dir[0]}-${dir[1]}`);

    while((guardPos[0] > 0 && guardPos[0] < totalRows - 1) && (guardPos[1] > 0 && guardPos[1] < totalColms - 1)) {
        const tmpRow = guardPos[0] + dir[0];
        const tmpCol = guardPos[1] + dir[1];
        if (matrix[tmpRow][tmpCol] === '#') {
            [dir[0],dir[1]] = [dir[1], -1 * dir[0]]; // rotate 90 deg right
        } else {
            guardPos = [tmpRow, tmpCol];
            const pos = `${guardPos[0]}-${guardPos[1]}-${dir[0]}-${dir[1]}`;

            if (positions.has(pos)) return true;

            positions.add(pos);
        }
    }
    return false;
}

let loopCount = 0;
matrix.forEach((row, rIndex) => {
    row.forEach((ele, cIndex) => {
        if (ele === '.') {
            matrix[rIndex][cIndex] = '#';
            if (loops(matrix, guardPos)) {
                loopCount++;
            }
            matrix[rIndex][cIndex] = '.';
        };
    });
});

console.log(loopCount);
