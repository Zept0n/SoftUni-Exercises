function extractText() {
    const items=Array.from(document.querySelectorAll('#items li'));
    let result=items.map((e)=>e.textContent).join("\n");
    const textArea=document.getElementById(`result`);
    textArea.value=result;
}