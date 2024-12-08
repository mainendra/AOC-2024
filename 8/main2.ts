const input = Deno.readTextFileSync("input.txt").trim();
// const input = Deno.readTextFileSync("test.txt").trim();

const grid = input.split('\n').map(line => line.trim().split(''));

const totalRows = grid.length;
const totalColms = grid[0].length; // assuming n x n grid

const isInbound = (r: number, c: number) => {
    return (r >= 0 && r < totalRows && c >= 0 && c < totalColms);
};

const positions: {[key in string]: number[][]}= {};

grid.forEach((row, r) => {
    row.forEach((ele, c) => {
        if (ele === '.') return;
        positions[ele] = positions[ele] || [];
        positions[ele].push([r,c]);
    });
});

const antidots = new Set<string>();

Object.values(positions).forEach((pos) => {
    for (let i = 0; i < pos.length - 1; i++) {
        for (let j = i + 1; j < pos.length; j++) {
            const rd = pos[j][0] - pos[i][0];
            const cd = pos[j][1] - pos[i][1];

            let a1 = [pos[j][0] - rd, pos[j][1] - cd];
            while (isInbound(a1[0], a1[1])) {
                antidots.add(`${a1[0]}-${a1[1]}`);
                a1 = [a1[0] - rd, a1[1] - cd];
            }
            let a2 = [pos[i][0] + rd, pos[i][1] + cd];
            while (isInbound(a2[0], a2[1])) {
                antidots.add(`${a2[0]}-${a2[1]}`);
                a2 = [a2[0] + rd, a2[1] + cd];
            }
        }
    }
});

console.log(antidots.size);
