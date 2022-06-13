function encodeAndDecodeMessages() {
    const encodeBtn=document.querySelectorAll('button')[0];
    const decodeBtn=document.querySelectorAll('button')[1];
    const message=document.querySelectorAll('textarea')[0];
    const receivedMessage=document.querySelectorAll('textarea')[1];
    encodeBtn.addEventListener('click',encodeSend);
    decodeBtn.addEventListener('click',decodeRead);

    function encodeSend() {
        let messageValue=message.value;
        let encryptedMessage='';
        for (let index=0;index<messageValue.length;index++) {
            let newAscii=messageValue.charCodeAt(index)+1;
            encryptedMessage+=String.fromCharCode(newAscii);
        }
        message.value='';
        receivedMessage.value=encryptedMessage;
    }

    function decodeRead() {
        let receivedMessageValue=receivedMessage.value;
        let decryptedMessage='';
        for (let index=0;index<receivedMessageValue.length;index++) {
            let newAscii=receivedMessageValue.charCodeAt(index)-1;
            decryptedMessage+=String.fromCharCode(newAscii);
        }
        receivedMessage.value=decryptedMessage;
    }
}