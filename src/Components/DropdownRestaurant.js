import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import TheStake from './Restaurants/TheStake'


export default function DropdownRestaurant ({ data }) {

    // state for restaurant selection
    // const [restaurantChoice, setRestaurantChoice] = useState([])
    const navigate = useNavigate()

    // useEffect(() =>{
    //     <Link to="/{restaurantChoice}">
    // }, restaurantChoice)

    return (
        <div>
            <nav>
                <select onChange={e => navigate('./Restaurants/TheStake')}>
                    <option value="which-restaurant">Where do you wanna eat?</option>
                        {data.map(d => ( 
                            <option key={d.id}>{d.restaurant}</option>
                            ))}
                </select>
            </nav>  
            
            <TheStake data={data} />
                        
        </div>
    )
}