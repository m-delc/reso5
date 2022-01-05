import React, { useState } from 'react';

export default function TheStake ({ data }) {

    // const [restaurantChoice, setRestaurantChoice] = useState('The Stake')

    return (
        <div>
            <nav>
                <select>
                    <option value="choose-time">Choose a time!</option>
                    {data.map(d => (
                       <option key={d.id}>{d.time}</option>
                    ))}
                </select>
            </nav>
        </div>
    )
}