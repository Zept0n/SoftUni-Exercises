function getArticleGenerator(articles) {

    const content=document.getElementById('content');
    function showNext() {
        let next=articles.shift();
        if (next===undefined) {
            return;
        }
        let article=document.createElement('article');
        article.textContent=next;
        content.appendChild(article);
    }
    return showNext;
}
