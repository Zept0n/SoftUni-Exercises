function create(words) {
   const result=document.getElementById('content');
   for (let index=0;index<words.length;index++) {
      let paragraph=document.createElement('p');
      paragraph.textContent=words[index];
      paragraph.style.display='none';
      let div=document.createElement('div');
      div.appendChild(paragraph);
      result.appendChild(div);
      div.addEventListener('click',onClick);
   }
   function onClick(ev) {
      ev.target.firstChild.style.display="";
   }
}