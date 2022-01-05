import React, { useState } from 'react';
import DropdownRestaurant from './DropdownRestaurant'




export default function MakeReservation ({data}) {


    // console.log(data);
    // state for restaurant selection
    // const [restaurantChoice, setRestaurantChoice] = useState([])
    // const navigate = useNavigate()

    // console.log(restaurantChoice);

    return (
        <div>
            <DropdownRestaurant data={data} />
        </div>
    )

}

// (e) => setRestaurantChoice(e.target.value)