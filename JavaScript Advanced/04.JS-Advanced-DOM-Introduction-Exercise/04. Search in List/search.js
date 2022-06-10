function search() {
   const towns = Array.from(document.querySelectorAll(`#towns li`));
   const input = document.getElementById(`searchText`).value;
   const result= document.getElementById('result');
   let matches=0;
   for (let index = 0; index < towns.length; index++) {
      towns[index].style.fontWeight = 'normal';
      towns[index].style.textDecoration = 'none';
   }

   for (let town of towns) {
      let text=town.textContent;
      if (text.match(input)) {
         matches++;
         town.style.fontWeight='bold';
         town.style.textDecoration='underline';
      }
   }

   /* const pattern = new RegExp(input, 'g');
   let match = pattern.exec(towns[0].textContent);
   for (let index = 1; index < towns.length; index++) {
      let town = towns[index].textContent;
      match = pattern.exec(town);
      if (match != null) {
         matches++;
         console.log(town);
         towns[index].style.fontWeight = 'bold';
         towns[index].style.textDecoration = 'underline'
      }
   } */
   result.textContent=`${matches} matches found`

}
