function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    gradient.addEventListener('mousemove', moveMs);
    const result=document.getElementById(`result`);
    console.log(gradient.clientWidth)

    function moveMs(event) {
        result.textContent=Math.floor(event.offsetX/300*100)+"%"
    }
}


