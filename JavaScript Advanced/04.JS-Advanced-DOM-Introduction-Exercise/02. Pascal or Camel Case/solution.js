function solve() {
    let text=document.getElementById('text').value;
    const convention=document.getElementById('naming-convention').value;
    let result=document.getElementById('result');
    if (convention==='Camel Case'||convention==='Pascal Case') {
      text=text.toLowerCase();
      text=text.split(" ").filter(Boolean);
      for (let index=0;index<text.length;index++) {
        let word=text[index].split("");
        word[0]=word[0].toUpperCase();
        word=word.join("");
        text[index]=word;
      }
      text=text.join("")
      console.log(text);
      if (convention==="Camel Case") {
        text = text.charAt(0).toLowerCase() + text.slice(1);
      } /* else if(convention==='Pascal Case') {

      } */

      result.textContent=text;
    } else {
      result.textContent="Error!"
    }
}