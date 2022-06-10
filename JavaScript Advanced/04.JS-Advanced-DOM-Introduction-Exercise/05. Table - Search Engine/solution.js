function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //Select rows
      let rows = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchFieldValue = document.getElementById('searchField').value;
      for (let index = 0; index < rows.length; index++) {
         rows[index].classList.remove("select");
      }

      for (let index = 0; index < rows.length; index++) {
         //Select the given column
         let columns = Array.from(rows[index].children)
         for (let colNum = 0; colNum < columns.length; colNum++) {
            let text = columns[colNum].textContent;
            if (text.match(searchFieldValue)) {
               rows[index].classList.add("select");
            }
         }
         //let columnText=column.textContent;

      }

   }
}