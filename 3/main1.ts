const input = Deno.readTextFileSync("input.txt").trim();

const mulRegEx = /mul\((\d+),(\d+)\)/g;
let result = 0;

input.split('\n').forEach(line => {
    line.trim().matchAll(mulRegEx).forEach(lineMatch => {
        result += (+lineMatch[1]) * (+lineMatch[2]);
    });
});

console.log(result);
