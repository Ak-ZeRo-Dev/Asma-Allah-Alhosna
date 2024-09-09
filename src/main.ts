import { names } from "./names";

const table = document.getElementById("names") as HTMLTableElement;

const colNums: number = 6;

for (let i: number = 0; i < names.length; i += colNums) {
  const row: HTMLTableRowElement = document.createElement("tr");
  for (let j = i; j < i + colNums && j < names.length; j++) {
    const ele: INames = names[j];

    const col: HTMLTableCellElement = document.createElement("td");
    const link: HTMLAnchorElement = document.createElement("a");

    link.textContent = ele.name;
    link.href = ele.description;

    col.appendChild(link);
    row.appendChild(col);
  }

  table.appendChild(row);
}
