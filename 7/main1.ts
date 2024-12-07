const input = Deno.readTextFileSync("input.txt").trim();
// const input = Deno.readTextFileSync("test.txt").trim();

let total = 0;
const hasPermutation = (params1: number[], result1: number): boolean => {
    if (params1.length <= 2) {
        const min = params1.reduce((r, v) => r + v, 0);
        const max = params1.reduce((r, v) => r * v, 1);

        return (result1 === min || result1 === max);
    }

    return ((hasPermutation([params1[0] + params1[1], ...params1.slice(2)], result1)) ||
        (hasPermutation([params1[0] * params1[1], ...params1.slice(2)], result1)));
};
input.split('\n').forEach(line => {
    const splitVal = line.trim().split(':').map(v => v.trim());

    const result: number = +splitVal[0];
    const params: number[] = splitVal[1].split(' ').map(v => +v.trim());

    if (hasPermutation(params, result)) {
        total += result;
    }
});
console.log(total);
