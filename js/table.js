
const renderTable = (tNode = tableNode, tabobj = table) => {
   const capt = `<caption style="width: 100%">${tabobj.title}</caption>`;
   const colNode = `<tr>${tabobj.columns
      .map((c) => `<th>${c}</th>`)
      .join(" ")}</tr>`;
   const rowsNode = tabobj.rows
      .map(
         (row) =>
            `<tr>${row
               .map(
                  (item, idx) =>
                     `<td data-cell="${tabobj.columns[idx]}">${item}</td>`
               )
               .join(" ")}<tr>`
      )
      .join(" ");

   tableNode.innerHTML = `${capt}${colNode}${rowsNode}`;
};
