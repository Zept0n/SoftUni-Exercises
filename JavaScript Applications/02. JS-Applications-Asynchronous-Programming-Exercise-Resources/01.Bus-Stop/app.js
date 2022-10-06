async function getInfo() {
    const stopNameElement = document.getElementById(`stopName`);
    const timetableElement = document.getElementById('buses');

    const stopID = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`

    try {
        timetableElement.innerHTML=''; //replaceChildren();
        const res = await fetch(url);
        if (res.status!=200) {
            stopNameElement.textContent='Error';
            throw new Error('Error');
        }
        const data = await res.json();
        
        stopNameElement.textContent=`${data.name}`;
        
        const buses=Object.entries(data.buses);

        for (let [key,time] of buses) {
            const li=document.createElement('li');
            li.textContent=`Bus ${key} arrives in ${time} minutes`
            timetableElement.append(li);
        }

    } catch (err) {
        stopNameElement.textContent='Error';
    }   


}