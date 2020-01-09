import {elements} from './base';



const createWeatherResults = weather => {
    const dataInfo = ['humidity', 'pressure', 'temp', 'weatherMain', 'weatherDesc'];
    const dataInfoFull = ['Humidity', 'Pressure', 'Temperature', 'Weather condition', 'Weather description']
    let markup = []
    dataInfo.forEach((el, i) => {
        const formatData = (data) => {
            if(el === 'temp'){
                return `${(parseInt(data) - 273)} degree celcius`

            } else if(el === 'humidity'){
                return `${data} %`
            } else if(el === 'pressure'){
                return `${Math.round(data * 0.75006)} mmhg`
            } else {
                return data
            }
        }

        markup.push( `
            <li class="list-group-item">${dataInfoFull[i]} : ${formatData(weather[el])} </li>
        `);
    })
   return markup 
   
}

export const renderWeatherResults = weather => {
    let liItems = createWeatherResults(weather).join('');
    elements.moreInfo.insertAdjacentHTML("beforeend", liItems)
}

