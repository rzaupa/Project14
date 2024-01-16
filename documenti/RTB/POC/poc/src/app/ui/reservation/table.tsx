import { getFilteredRestaurants } from '@/app/lib/data';
import { useSearchParams } from 'next/navigation';


export default function RestaurantsTable() {
    const searchParams = useSearchParams();
    const date = searchParams.get('date');
    const time = searchParams.get('time');
    const city = searchParams.get('city');
    const cuisine = searchParams.get('cuisine');
    const parms = { date, time, city, cuisine };
    const restaurants = getFilteredRestaurants(parms);

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