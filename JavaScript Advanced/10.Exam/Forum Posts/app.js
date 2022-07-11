window.addEventListener("load", solve);

function solve() {
    //TODO ...
    const review = document.getElementById('review-list');
    const published = document.getElementById('published-list');

    const title = document.getElementById('post-title');
    const category = document.getElementById('post-category');
    const content = document.getElementById(`post-content`);


    const publishButton = document.getElementById('publish-btn');
    const clearButton = document.getElementById('clear-btn');
    publishButton.addEventListener('click', onPublish);
    clearButton.addEventListener('click', onClear);


    function onPublish(event) {
        event.preventDefault();
        const titleValue=title.value;
        const categoryValue=category.value;
        const contentValue=content.value;

        if(titleValue==''||categoryValue==''||contentValue=='') {
            return;
        }

        const li=document.createElement('li');
        li.classList.add('rpost');
        const article=document.createElement('article');
        const h4=document.createElement('h4');
        h4.textContent=titleValue;
        const p1=document.createElement('p');
        p1.textContent=`Category: ${categoryValue}`;
        const p2=document.createElement('p');
        p2.textContent=`Content: ${contentValue}`;

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        li.appendChild(article);

        //buttons
        const editButton=document.createElement('button');
        editButton.classList.add('action-btn');
        editButton.classList.add('edit');
        editButton.textContent='Edit';

        const approveButton=document.createElement('button');
        approveButton.classList.add('action-btn');
        approveButton.classList.add('approve');
        approveButton.textContent='Approve';

        li.appendChild(editButton);
        li.appendChild(approveButton);

        review.appendChild(li);

        editButton.addEventListener('click',edit);
        approveButton.addEventListener('click',approve);

        title.value='';
        category.value='';
        content.value='';

        function edit() {
            title.value=titleValue;
            category.value=categoryValue;
            content.value=contentValue;
            review.removeChild(li);
        }
        function approve() {
            published.appendChild(li);
            editButton.removeEventListener('click',edit);
            approveButton.removeEventListener('click',approve);
            li.removeChild(editButton);
            li.removeChild(approveButton);
        }
    }
    function onClear() {
        published.innerHTML='';
    }


    const createPost = {
        title: () => document.getElementById("post-title"),
        category: () => document.getElementById("post-category"),
        content: () => document.getElementById("post-content"),
        addBtn: () => document.getElementById("publish-btn")
    }

  createPost.title().value = 'Exam completion'
  createPost.category().value = 'Exam'
  createPost.content().value = 'On the 06.04.2022 there will be exam that includes this problem'


}
