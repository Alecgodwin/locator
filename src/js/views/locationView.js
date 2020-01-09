
import {elements} from './base';


const createOtherInfo = (location) => {
    // const entry = Object.keys(location)
    const entry = ['ip', 'city',  'currency', 'country_calling_code', 'utc_offset' ]
    const entryCorrect = ['ip', 'city', 'currency', 'country calling code', 'Time zone' ]


    let markup = [];
     entry.forEach((el, i) => {
         const formatData = data => {
             if (el === 'ip'){
                return `Your device ip address is ${data}`
             } else if( el === 'city'){
                 return `You Stay in <strong>${data}</strong> ${location['region_code']}, ${location['country_name']}`
             } else if( el === 'utc_offset'){
                 let time = new Date()
                 return time
             }
             else {
                 return `your current ${entryCorrect[i]} is ${data}`
             }
         }
        markup.push(`<li class="list-group-item"> ${formatData(location[el]) }</li>`)  
    })
    // console.log(markup)
    
    return markup

}


export const renderOtherInfo = (location) => {
    const liItems = createOtherInfo(location).join(' ')
    elements.moreInfo.insertAdjacentHTML('beforeend', liItems)
}




export const createScript = (location) => {
    
    
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxnb2R3aW4iLCJhIjoiY2sza2Q0ZjN6MDF2MjNtdDVnNzZrZG02YSJ9.5HsRUUvajcueywL5NBujSQ';
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', //'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: [location.latitude, location.longitude], // starting position
        zoom: 3// starting zoom
        });

        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    
}