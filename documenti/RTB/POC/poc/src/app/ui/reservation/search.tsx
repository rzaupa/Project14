'use client';
import React, { useState } from 'react';
import { getCities, getCuisines, getFilteredRestaurants } from '@/app/lib/data';
import { Restaurant } from '@/app/lib/definitions';

export default function Search() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [city, setCity] = useState('');
    const [cuisine, setCuisine] = useState('');

    const cuisines = getCuisines();
    const cities = getCities();

    return (
        <div className="mb-4">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 p-2 w-full mb-2"
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 p-2 w-full mb-2"
                />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Città"
                    className="border border-gray-300 p-2 w-full mb-2"
                    list="citySuggestions"
                />
                <datalist id="citySuggestions">
                    {cities.map((city) => (
                        <option key={city} value={city} />
                    ))}
                </datalist>
                <select
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className="border border-gray-300 p-2 w-full mb-2"
                >
                    <option value="">Seleziona la tipologia di cucina</option>
                    {cuisines.map((cuisine) => (
                        <option key={cuisine} value={cuisine}>{cuisine}</option>
                    ))}
                </select>
                <button
                    onClick={() => {
                        setDate('');
                        setTime('');
                        setCity('');
                        setCuisine('');
                    }}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                    Reset
                </button>
            </form>
            <RestaurantTable restaurants={getFilteredRestaurants({ date, time, city, cuisine })} />
        </div>
    );
}

export function RestaurantTable({restaurants}: {restaurants: Restaurant[]}) {
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Indirizzo</th>
                        <th>Città</th>
                        <th>Cucina</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map((restaurant) => (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.address}</td>
                            <td>{restaurant.city}</td>
                            <td>{restaurant.cuisine}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}