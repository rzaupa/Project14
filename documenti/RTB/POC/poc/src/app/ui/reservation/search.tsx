'use client';
import React, { useState } from 'react';
import { getCities, getCuisines } from '@/app/lib/data';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    function handleSearch(date: string, time: string, city: string, cuisine: string) {
        const params = new URLSearchParams(searchParams);
        if (date) {
            params.set('date', date);
        } else {
            params.delete('date');
        }
        if (time) {
            params.set('time', time);
        } else {
            params.delete('time');
        }
        if (city) {
            params.set('city', city);
        } else {
            params.delete('city');
        }
        if (cuisine) {
            params.set('cuisine', cuisine);
        } else {
            params.delete('cuisine');
        }
        replace(`${pathname}?${params.toString()}`);
    }
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
                    onChange={(e) => {
                        setDate(e.target.value);
                        handleSearch(e.target.value, time, city, cuisine);
                    }}
                    className="border border-gray-300 p-2 w-full mb-2"
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => {
                        setTime(e.target.value);
                        handleSearch(date, e.target.value, city, cuisine);
                    }}
                    className="border border-gray-300 p-2 w-full mb-2"
                />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                        handleSearch(date, time, e.target.value, cuisine);
                    }}
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
                    onChange={(e) => {
                        setCuisine(e.target.value);
                        handleSearch(date, time, city, e.target.value);
                    }}
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
                        handleSearch('', '', '', '');
                    }}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                    Reset
                </button>
            </form>
        </div>
    );
}