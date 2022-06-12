function attachEventsListeners() {
    const days=document.getElementById('days');
    const hours=document.getElementById('hours');
    const minutes=document.getElementById('minutes');
    const seconds=document.getElementById('seconds');

    //Event propagation with parent main
    const mainParent=document.querySelector('main');
    //const dayBtn=document.getElementById('daysBtn');
    mainParent.addEventListener('click',onDayClick);

    function onDayClick(event) {
        days.value=Number(days.value);
        hours.value=Number(hours.value);
        minutes.value=Number(minutes.value);
        seconds.value=Number(seconds.value);
        if (event.target.id=='daysBtn') {
            hours.value=days.value*24;
            minutes.value=days.value*1440;
            seconds.value=days.value*86400;
        } else if(event.target.id=='hoursBtn') {
            days.value=hours.value/24;
            minutes.value=hours.value*60;
            seconds.value=hours.value*60*60;
        } else if(event.target.id=='minutesBtn') {
            days.value=minutes.value/60/24;
            hours.value=minutes.value/60;
            seconds.value=minutes.value*60;
        } else if(event.target.id=='secondsBtn') {
            days.value=seconds.value/60/60/24;
            hours.value=seconds.value/60/60;
            minutes.value=seconds.value/60;
        } 

    }
}