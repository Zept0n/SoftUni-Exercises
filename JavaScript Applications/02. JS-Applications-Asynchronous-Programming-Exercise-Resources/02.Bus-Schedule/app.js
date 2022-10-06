function solve() {
    const busStopDisplay=document.getElementById('info');
    const departBtn=document.getElementById('depart');
    const arriveBtn=document.getElementById('arrive');

    let stop={
        next:'depot'
    }
    async function depart() {
        try {
            const url=`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        const res=await fetch(url);
        if (res.status!=200) {
            throw new Error('Error');
        }
        const data=await res.json();
        stop=data;
        departBtn.disabled=true;
        arriveBtn.disabled=false;
        busStopDisplay.textContent=`Next stop ${stop.name}`;
        }
        catch(error) {
            departBtn.disabled=true;
            arriveBtn.disabled=true;
            busStopDisplay.textContent=`Error`;
        }
    }

    function arrive() {
        departBtn.disabled=false;
        arriveBtn.disabled=true;
        busStopDisplay.textContent=`Arriving at ${stop.name}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();