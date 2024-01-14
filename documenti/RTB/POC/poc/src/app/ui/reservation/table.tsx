import { Restaurant } from '@/app/lib/definitions';
import { getFilteredRestaurants } from '@/app/lib/data';

export default function RestaurantsTable({ query }: { query: string }) {
    /*const restaurants = getFilteredRestaurants();*/
    console.log('ok');

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
                    {/*restaurants.map((restaurant) => (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.address}</td>
                            <td>{restaurant.city}</td>
                            <td>{restaurant.cuisine}</td>
                        </tr>
                    ))}*/}
                </tbody>
            </table>
        </div>
    );
}