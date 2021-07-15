const [a, b, ...rest] = process.argv;
console.log(rest.reduce((a, v) => a + Number(v), 0));