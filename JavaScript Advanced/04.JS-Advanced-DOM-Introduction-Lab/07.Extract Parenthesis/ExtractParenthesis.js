function extract(content) {
    const text = document.getElementById(`content`).textContent;
    const regExp = /\(([^\)]+)\)/g;
    let match = regExp.exec(text);
    let result=''

    while (match != null) {
        result+=match[1] + '; ';
        match = regExp.exec(text);
    }

    return result;
}