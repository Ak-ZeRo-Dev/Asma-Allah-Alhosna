import { names } from "./names.js";
const table = document.getElementById("names");
const colNums = 6;
for (let i = 0; i < names.length; i += colNums) {
  const row = document.createElement("tr");
  for (let j = i; j < i + colNums && j < names.length; j++) {
    const ele = names[j];
    const col = document.createElement("td");
    const link = document.createElement("a");
    link.textContent = ele.name;
    link.href = ele.description;
    col.appendChild(link);
    row.appendChild(col);
  }
  table.appendChild(row);
}
