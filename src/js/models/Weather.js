import axios from 'axios'

export default class Weather{
    constructor(location){
        this.location = location;
    }

    async getWeatherInfo(){
        try{
            const weatherInfo = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.location.city},${this.location.country}&appid=1b4dfacb44c818e86aaa6eb96e4a3983`);
            this.humidity = weatherInfo.data.main.humidity ;
            this.pressure = weatherInfo.data.main.pressure;
            this.temp = weatherInfo.data.main.temp;
            this.temp_max = weatherInfo.data.main.temp_max;
            this.temp_min = weatherInfo.data.main.temp_min;
            this.weatherMain = weatherInfo.data.weather[0].main;
            this.weatherDesc = weatherInfo.data.weather[0].description;
            this.weatherIcon = weatherInfo.data.weather[0].icon;
        } catch(error){
            alert('Error fetching weather data')
        }
    }

    // formatWeatherInfo(){
    //     this.humidity = weatherInfo.data.main.humidity + 'atm';
    // }
}