import axios from 'axios';

export default class Location{
    constructor(){
       
    }

    async getLocation(){
        try{
            const result = await axios(`https://ipapi.co/json/`);
            this.location = result.data;  
        } catch(error){
            alert('Location not found')
        }    
    }
}