function solve() {
    const recipient=document.getElementById('recipientName');
    const title=document.getElementById('title');
    const message=document.getElementById('message');
    const addBtn=document.getElementById('add');
    const resetBtn=document.getElementById('reset');
    const mailList=document.getElementById('list');
    const sendList=document.querySelector('.sent-list');
    const deletedList=document.querySelector('.delete-list');

    //console.log(recipient,title,message,addBtn,resetBtn,mailList,sendList,deletedList);

    addBtn.addEventListener('click',add);
    resetBtn.addEventListener('click',reset);

    function add(ev) {
        ev.preventDefault();
        const titleValue=title.value;
        const recipientValue=recipient.value;
        const messageValue=message.value;
        title.value='';
        recipient.value='';
        message.value='';

        if(titleValue==''||recipientValue==''||messageValue=='') {
            return;
        }

        const li=document.createElement('li');
        const h41=document.createElement('h4');
        const h42=document.createElement('h4');
        const span=document.createElement('span');
        const div=document.createElement('div');
        const sendBtn=document.createElement('button');
        const deleteBtn=document.createElement('button');

        h41.textContent=`Title: ${titleValue}`;
        h42.textContent=`Recipient Name: ${recipientValue}`;
        span.textContent=messageValue;
        div.classList.add('list-action');
        sendBtn.setAttribute('type','submit');
        sendBtn.textContent='Send';
        deleteBtn.textContent='Delete';
        deleteBtn.setAttribute('type','submit');
        sendBtn.id='send';
        deleteBtn.id='delete';

        li.appendChild(h41);
        li.appendChild(h42);
        li.appendChild(span);
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        li.appendChild(div);
        mailList.appendChild(li);

        sendBtn.addEventListener('click',onSend);
        deleteBtn.addEventListener('click',onDelete);

        function onSend() {
            //console.log('send works');
            mailList.removeChild(li);
            const sendLi=document.createElement('li');
            const span2=document.createElement('span');
            const span3=document.createElement('span');
            const div2=document.createElement('div');
            const deleteBtn2=document.createElement('button');

            span2.textContent=`To: ${recipientValue}`;
            span3.textContent=`Title: ${titleValue}`;
            div2.classList.add('btn');
            deleteBtn2.setAttribute('type','submit');
            deleteBtn2.classList.add('delete');
            deleteBtn2.textContent='Delete';

            sendLi.appendChild(span2);
            sendLi.appendChild(span3);
            div2.appendChild(deleteBtn2);
            sendLi.appendChild(div2);
            sendList.appendChild(sendLi);

            sendBtn.removeEventListener('click',onSend);
            deleteBtn.removeEventListener('click',onDelete);

            deleteBtn2.addEventListener('click',onDelete);

        }

        function onDelete(event){
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
            const delLi=document.createElement('li');
            const delSpan1=document.createElement('span');
            const delSpan2=document.createElement('span');
            delSpan1.textContent=`To: ${recipientValue}`;
            delSpan2.textContent=`Title: ${titleValue}`;
            delLi.appendChild(delSpan1);
            delLi.appendChild(delSpan2);
            deletedList.appendChild(delLi);
        }

    }

    function reset(ev) {
        ev.preventDefault();
        title.value='';
        recipient.value='';
        message.value='';

    }

}
solve()