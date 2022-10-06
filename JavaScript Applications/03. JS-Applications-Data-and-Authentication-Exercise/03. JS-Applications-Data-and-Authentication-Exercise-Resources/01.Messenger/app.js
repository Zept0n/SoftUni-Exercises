function attachEvents() {
    const url='http://localhost:3030/jsonstore/messenger';
    const sendBtn=document.getElementById('submit')
    const refreshBtn=document.getElementById('refresh')

    const textArea=document.getElementById('messages');
    const authorName=document.getElementsByName('author')[0];
    const message=document.getElementsByName('content')[0];

    //console.log(authorName,message)

    refreshBtn.addEventListener('click',onRefresh);
    sendBtn.addEventListener('click',onSend);

    async function onRefresh() {
        const responce=await fetch(url);
        const data=await responce.json();

        const allMessages=Object.entries(data);

        let resultString='';
        for (let [id,{author,content}] of allMessages){
            resultString+=`${author}: ${content}\n`;
        }

        textArea.textContent=resultString;
    }

    async function onSend() {
        if (authorName.value!=''&&message.value!='') {
            const responce=await fetch(url,{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    author: authorName.value,
                    content: message.value,
                })
            });
            authorName.value='';
            message.value='';
            onRefresh();
            console.log(await responce.json());
        }
    }

}

attachEvents();