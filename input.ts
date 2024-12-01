import "jsr:@std/dotenv/load";

const session = Deno.env.get("session");

const day = Deno.args[0] || (new Date()).getDate();
const year = Deno.args[1] || (new Date()).getFullYear();

console.log(`Day: ${day}, Year: ${year}`);


const requestOptions = {
  method: 'GET',
  headers: new Headers({
    "Cookie": `session=${session}`
  })
};

const url = `https://adventofcode.com/${year}/day/${day}/input`;

console.log(url);

fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => {
    Deno.writeTextFile("./input.txt", result);
  })
  .catch(error => console.log('error', error));
