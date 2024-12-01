const input = Deno.readTextFileSync("input.txt");

const col1: number[] = [];
const col2: number[] = [];

input.split('\n').forEach(line => {
    if (!line) return;

    const result = line.split(/\s+/);

    col1.push(+result[0]);
    col2.push(+result[1]);
});

const resultMap: Map<number, number> = new Map();

for(let i = 0; i < col2.length; i++) {
    resultMap.set(col2[i], (resultMap.get(col2[i]) ?? 0) + 1);
}

let result: number = 0;
for(let i = 0; i < col1.length; i++) {
    result += (col1[i] * (resultMap.get(col1[i]) ?? 0));
}

console.log(result);
