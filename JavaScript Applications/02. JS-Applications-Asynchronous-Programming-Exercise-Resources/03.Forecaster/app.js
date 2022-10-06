function attachEvents() {
    const getWeatherBtn = document.getElementById('submit');
    const locationInput = document.getElementById('location');
    const forecastDisplay = document.getElementById('forecast');
    const current=document.getElementById('current');
    getWeatherBtn.addEventListener('click', draw);
    async function getLocationId() {
        try {
            const locationValue = locationInput.value;
            const url = 'http://localhost:3030/jsonstore/forecaster/locations'
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            for (let index = 0; index < data.length; index++) {
                const currentCity = data[index];
                if (locationValue == currentCity.name) {
                    return currentCity.code;
                } else if (index == data.length - 1) {
                    throw new Error('City not found!');
                }
            }
        } catch (error) {
            console.log('City not Found!')
        }
    }
    async function draw() {
        const locationID = await getLocationId();
        const url = `http://localhost:3030/jsonstore/forecaster/today/${locationID}`
        const url2 = `http://localhost:3030/jsonstore/forecaster/upcoming/${locationID}`

        const res = await fetch(url);
        const today = await res.json();
        const res2 = await fetch(url2);
        const upcoming = await res2.json();

        const weatherSymbols={
        Sunny:'☀',
        'Partly sunny':'⛅',
        Overcast:'☁',
        Rain:'☂',
        Degrees:'°'
        }
        console.log(today,upcoming);
        //document.getElementById("myDIV").style.display = "none"; 
        forecastDisplay.style.display = 'block';
        const divForecasts=createEl('div',undefined,'forecasts');
        const symbol=createEl('span',weatherSymbols[today.forecast.condition],'condition');
        divForecasts.append(symbol);
        symbol.classList.add('symbol');
        const conditionSpan=createEl('span',undefined,'condition');
        conditionSpan.append(createEl('span',today.name,'forecast-data'));
        conditionSpan.append(createEl('span',`${today.forecast.low}${weatherSymbols.Degrees}/${today.forecast.high}${weatherSymbols.Degrees}`,'forecast-data'));
        conditionSpan.append(createEl('span',today.forecast.condition,'forecast-data'));
        divForecasts.append(conditionSpan);
        current.append(divForecasts);
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

attachEvents();