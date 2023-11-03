let n = prompt("enter the number of rows")
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string =string+ "*";
  }
  string=string+ "\n";
}
console.log(string);