const input = Deno.readTextFileSync("input.txt").trim();

let totalSafeLevels = 0;

const isSafe = (levels: number[]) => {
    let inc: boolean = levels[1] - levels[0] > 0;
    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1];
        const currInc = diff > 0;
        if (inc !== currInc || diff > 3 || diff < -3 || diff === 0) {
            return false;
        }
        inc = currInc;
    }
    return true;
};

input.split('\n').forEach(line => {
    const result = line.trim().split(/\s+/).map(r => +r);
    if (isSafe(result)) {
        totalSafeLevels++;
    }
});

console.log(`Total safe levels: ${totalSafeLevels}`);
