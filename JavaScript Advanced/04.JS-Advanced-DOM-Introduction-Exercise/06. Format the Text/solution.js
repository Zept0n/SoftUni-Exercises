function solve() {
    let text = document.getElementById('input').value;
    let output=document.getElementById('output');
    let sentences = text.split(/[\.\?\!]+/).filter((element)=>element.length>=1);
    let string='';
    let count=0;
    output.innerHTML='';
    for (let index = 0; index < sentences.length; index++) {
        string+=sentences[index]+". ";
        count++;
        if (count===3||index===sentences.length-1) {
            output.innerHTML+=`<p>${string}</p>`
            /* let p=document.createElement('p');
            p.textContent=string;
            output.appendChild(p); */
            string='';
            count=0;
        }
    }
}