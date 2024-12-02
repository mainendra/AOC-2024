const input = Deno.readTextFileSync("input.txt").trim();

const col1: number[] = [];
const col2: number[] = [];

input.split('\n').forEach(line => {
    const result = line.split(/\s+/);

    col1.push(+result[0]);
    col2.push(+result[1]);
});

// Sort arrays
col1.sort();
col2.sort();

let totalDistance = 0;
for(let i = 0; i < col1.length; i++) {
    totalDistance += Math.abs(col1[i] - col2[i]);
}

console.log(`Distance: ${totalDistance}`);
