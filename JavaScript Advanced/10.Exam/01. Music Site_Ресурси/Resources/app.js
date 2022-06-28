window.addEventListener('load', solve);

function solve() {
    const genre=document.getElementById('genre');
    const name=document.getElementById('name');
    const author=document.getElementById('author');
    const date=document.getElementById('date');
    const addBtn=document.getElementById('add-btn');
    const likes=document.querySelector('#total-likes div p');
    const collection=document.querySelector('.all-hits-container');
    const savedCollection=document.querySelector('.saved-container');

    //console.log(genre,name,author,date,addBtn,likes,collection,savedCollection);

    addBtn.addEventListener('click',onAdd) 

    function onAdd(ev) {
        ev.preventDefault();
        const genreValue=genre.value;
        const nameValue=name.value;
        const authorValue=author.value;
        const dateValue=date.value;

        //checking if taken values are empty, if empty dont do anything
        if ([genreValue,nameValue,authorValue,dateValue].some((element) => element == '')) {
            return;
        }

        //clearing input fields

        genre.value='';
        name.value='';
        author.value='';
        date.value='';

        //creating elements

        const div=document.createElement('div');
        div.classList.add('hits-info');
        const img=document.createElement('img');
        img.src='./static/img/img.png';

        const h21=createEl('h2',`Genre: ${genreValue}`);
        const h22=createEl('h2',`Name: ${nameValue}`);
        const h23=createEl('h2',`Author: ${authorValue}`);
        const h3=createEl('h3',`Date: ${dateValue}`);
        const saveBtn=createEl('button','Save song','save-btn');
        const likeBtn=createEl('button','Like song','like-btn');
        const deleteBtn=createEl('button','Delete','delete-btn');

        div.appendChild(img);
        div.appendChild(h21);
        div.appendChild(h22);
        div.appendChild(h23);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        collection.appendChild(div);

        saveBtn.addEventListener('click',onSave);
        likeBtn.addEventListener('click',onLike);
        deleteBtn.addEventListener('click',onDelete);

        function onSave() {
            savedCollection.appendChild(div);
            saveBtn.remove();
            likeBtn.remove();
        }

        function onLike() {
            likeBtn.setAttribute('disabled','');
            likeBtn.removeEventListener('click',onLike);

            let [_,likesNumber]=likes.textContent.split(": ")
            likesNumber=Number(likesNumber)+1;
            likes.textContent=`Total Likes: ${likesNumber}`;
        }

        function onDelete(ev) {
            ev.target.parentNode.remove();
        }

    }

    function createEl(type, textContent, classType) {
        const element = document.createElement(type);
        if (textContent != undefined) {
            element.textContent = textContent
        }
        if (classType != undefined) {
            element.classList.add(classType);
        }
        return element;
    }
}


Unexpected error: expected 
'<imgsrc="./static/img/img.png"><h2>Genre:Pop</h2><h2>Name:PondeReplay</h2><h2>Author:Rihanna</h2><h2>Date:26.11.2009</h2><buttonclass="save-btn">Savesong</button><buttonclass="like-btn">Likesong</button><buttonclass="delete-btn">Delete</button>'
'<imgsrc="./static/img/img.png"><h2>Genre:Pop</h2><h2>Name:PondeReplay</h2><h2>Author:Rihanna</h2><h3>Date:26.11.2009</h3><buttonclass="save-btn">Savesong</button><buttonclass="like-btn">Likesong</button><buttonclass="delete-btn">Delete</button>'