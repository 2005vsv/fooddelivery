import React from 'react'
import axios from 'axios'

export const foodapi=async()=>{
    const base_url='https://food-deli-ri6z.vercel.app/api/dishes';
    
    try{
        const {data}=await axios.get(base_url);
        return data;
        

    }catch(err){
        return err;
    }

}
