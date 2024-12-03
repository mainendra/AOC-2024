const input = Deno.readTextFileSync("input.txt").trim();

const mulRegEx = /mul\((\d+),(\d+)\)/;
const dontRegEx = /don\'t\(\)/;
const doRegEx = /do\(\)/;
const matchRegEx = /(mul\(\d+,\d+\))|(don\'t\(\))|(do\(\))/g;
let result = 0;
let enabled = true;
input.split('\n').forEach(line => {
    line.trim().matchAll(matchRegEx).forEach(lineMatch => {
        if (dontRegEx.test(lineMatch[0])) {
            enabled = false;
        } else if (doRegEx.test(lineMatch[0])) {
            enabled = true;
        } else if (enabled) {
            const match = lineMatch[0].match(mulRegEx);
            result += match ? ((+match[1]) * (+match[2])) : 0;
        }

    });
});

console.log(result);
