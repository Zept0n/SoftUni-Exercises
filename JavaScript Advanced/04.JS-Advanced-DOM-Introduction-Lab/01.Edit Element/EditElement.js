function editElement(element,match,replacer) {
    /* const text=element.textContent;
    let result=text.split(match).join(replacer);
    element.textContent=result; */

    const text=element.textContent;
    const pattern=new RegExp(match,'g');
    const result=text.replace(pattern,replacer);
    element.textContent=result;
}