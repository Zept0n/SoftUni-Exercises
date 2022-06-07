function colorize() {
    const elements=Array.from(document.querySelectorAll(`table tr`));
    for (let index=1;index<elements.length;index+=2) {
        elements[index].style.background='teal';
    }
}