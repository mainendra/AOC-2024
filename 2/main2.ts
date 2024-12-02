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

function removeElementAtIndex<T>(array: T[], index: number) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

const isPartiallySafe = (levels: number[]) => {
    for (let i = 0; i < levels.length; i++) {
        if (isSafe(removeElementAtIndex(levels, i))) {
            return true;
        }
    }
    return false;
};

input.split('\n').forEach(line => {
    const result = line.trim().split(/\s+/).map(r => +r);
    if (isSafe(result) || isPartiallySafe(result)) {
        totalSafeLevels++;
    }
});

console.log(`Total safe levels: ${totalSafeLevels}`);
