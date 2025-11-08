const fs = require("fs");

const filename = process.argv[2];
const text = process.argv[3];

fs.writeFileSync(filename, text);

console.log("The file has been saved!");

const content = fs.readFileSync(filename, "utf-8");
console.log(content);
