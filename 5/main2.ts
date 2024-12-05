const input = Deno.readTextFileSync("input.txt").trim();
// const input = Deno.readTextFileSync("test.txt").trim();

const order: string[] = [];

let total = 0;

input.split('\n').forEach(line => {
    line = line.trim();

    // sequence
    if (line.includes('|')) {
        order.push(line);
    } else if (line) {
        const pages = line.split(',');
        let valid = true;
        for (let i = 0; i < pages.length - 1; i++) {
            for (let j = i + 1; j < pages.length; j++) {
                if (!order.includes(pages[i] + '|' + pages[j])) {
                    valid = false;
                    // swap values
                    [pages[i],pages[j]] = [pages[j],pages[i]];
                }
            }
        }
        if (!valid) {
            // middle page number
            const index = Math.ceil((pages.length -1) / 2); // 0 index
            total += +pages[index];
        }
    }
});

console.log(total);
