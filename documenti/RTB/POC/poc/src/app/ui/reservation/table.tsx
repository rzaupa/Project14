import { getFilteredRestaurants } from '@/app/lib/data';
import { useSearchParams } from 'next/navigation';


export default function RestaurantsTable({ parms }: { parms: string }) {
    const searchParams = useSearchParams();
    const param = searchParams.get('city');
    console.log(param);
    /*const restaurants = getFilteredRestaurants(parms);*/

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