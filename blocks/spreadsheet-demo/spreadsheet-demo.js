export default async function decorate(block) {
  let dataArray = [];
  await fetch("/helix-default.json?limit=5")
    .then((res) => res.json())
    .then((res) => {
      dataArray = res.data;
    });

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th>Key</th><th>Value 1</th><th>Value 2</th>`;
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  dataArray.forEach((item) => {
    const row = document.createElement("tr");

    const keyCell = document.createElement("td");
    keyCell.textContent = item.Key;
    row.appendChild(keyCell);

    const valueCell1 = document.createElement("td");
    valueCell1.textContent = item.Value;
    row.appendChild(valueCell1);

    const valueCell2 = document.createElement("td");
    valueCell2.textContent = item.value2;
    row.appendChild(valueCell2);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  block.appendChild(table);
}
