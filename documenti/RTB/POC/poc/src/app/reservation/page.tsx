import React from 'react';
import Search from '@/app/ui/reservation/search';
import Table from '@/app/ui/reservation/table';

export default function Page(
    {
        query,
    }: {
        query: string;
    }) {
    console.log('ok');
    return (
        <div>
            <div>
                <h1>Prenota un tavolo</h1>
            </div>
            <div>
                <h2>Ristoranti</h2>
                <p>Seleziona data, ora di arrivo, città e tipologia di cucina per ricercare un ristorante</p>
                <Search />
            </div>
            <Table query={query} />
        </div>
    );
};