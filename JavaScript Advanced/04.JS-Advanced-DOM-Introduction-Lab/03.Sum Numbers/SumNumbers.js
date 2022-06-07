function calc() {
    const firstElement=document.getElementById(`num1`)
    const secondElement=document.getElementById(`num2`)
    let sum=document.getElementById(`sum`);
    sum.value=Number(firstElement.value) + Number(secondElement.value);
}
