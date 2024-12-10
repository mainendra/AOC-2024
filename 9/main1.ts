const input = Deno.readTextFileSync("input.txt").trim();
// const input = Deno.readTextFileSync("test.txt").trim();

const grid = input.split('').map(ele => +ele);

const blocks: (string | number)[] = [];

let id = 0;
grid.forEach((ele, index) => {
    let result: string | number = '.';
    if (index % 2 === 0) { // file block
        result = id;
        id++
    }
    for (let i = 0; i < ele; i++) {
        blocks.push(result);
    }
});

let freeSpaceIndex = blocks.findIndex(ele => ele === '.');
let lastFileIndex = blocks.findLastIndex(ele => ele !== '.');

while(freeSpaceIndex < lastFileIndex) {
    if (blocks[freeSpaceIndex] === '.' && blocks[lastFileIndex] !== '.') {
        [blocks[freeSpaceIndex], blocks[lastFileIndex]] = [blocks[lastFileIndex], blocks[freeSpaceIndex]]; // swap elements
    }

    if (blocks[freeSpaceIndex] !== '.') freeSpaceIndex++;
    if (blocks[lastFileIndex] === '.') lastFileIndex--;
}

let total = 0;
for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === '.') break;

    total += (i * (blocks[i] as number));
}

console.log(total);
