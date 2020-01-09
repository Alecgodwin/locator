import Location from './models/Location';
import Weather from './models/Weather';
import * as locationView from './views/locationView';
import * as weatherView from './views/weatherView';
import {elements, renderLoader, clearLoader, clearContent, renderBody} from './views/base'


let state = {};
let locale;


// first function to be run on load event
const initLocale = async() => {
    state.location = new Location();
    locale = state.location

    // prepare ui for changes
    renderLoader(elements.bodyContent);

    //await location results
     await locale.getLocation();

     clearLoader();
     locationView.createScript(locale.location)
     renderBody(locale.location)
     
}


const getLoca = async () => {
   
    // render loation results
        clearContent();
        
        locationView.renderOtherInfo(locale.location)
        
    // locationView.renderOtherInfo(state.location.location)
        console.log()
}

window.r = state;
// console.log(locale.location)
const getWeather = async () => {
    try{
        
       
        if(!state.weather){
            //create new weather object and save it to state.weather
            state.weather = new Weather(locale.location);
        
            // prepare ui for changes
            clearContent();
            renderLoader(elements.moreInfo);
            
            // await the result
            await state.weather.getWeatherInfo();

            console.log(state.weather)
            // state.weather.formatWeatherInfo()
            // console.log(state.weather)
            // render results 
            clearLoader();
            weatherView.renderWeatherResults(state.weather)
        } else {
            clearContent();
            weatherView.renderWeatherResults(state.weather)
        }
        
       

    }catch(error){
        alert(error)
    }
}

// deterrmine what to display on load event

const defaultDisplay = async () => {
    initLocale().then(() => {
        if(window.location.hash){
            if(window.location.hash.replace('#', '') === 'Weather'){
                getWeather();
                changeLinks()
            }
            else if(window.location.hash.replace('#', '') === 'Location'){
                getLoca();
            }
        } else{
            window.location.hash = '#Location'
             getLoca();
             changeLinks()
        }
        
        
    });
}

window.addEventListener('load', defaultDisplay)


// document.getElementById('weather').addEventListener('click', getWeather);


// determine display on hashchange event
console.log(window.location.hash)
window.addEventListener('hashchange', () => {
    if(window.location.hash.replace('#', '') === 'Weather'){
        getWeather();
        changeLinks()
    } else if (window.location.hash.replace('#', '') === 'Location'){
        getLoca();
        changeLinks()
    }
})
// console.log(hashName);

//change link color 

const changeLinks = () => {
    const hashAddress = window.location.hash; 
    let mainLinks = Array.from(document.querySelectorAll('.list-group-item'))
    let activeLink = document.querySelector(`[href='${hashAddress}']`)
    // if link is active don't do anything

    //else remove the active class then add it to active link
    mainLinks.forEach(el => el.classList.remove('active'))


    activeLink.classList.add('active')


}