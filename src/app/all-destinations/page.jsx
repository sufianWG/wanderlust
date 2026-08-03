import DestinationCard from '@/components/DestinationCard';
import { allDestinations } from '@/lib/api';
import React from 'react';

const AllDestinationsPage = async() => {
    const destinations = await allDestinations();
    // console.log(destinations);
    return (
        <div className='container mx-auto my-5'>
            <h1 className='text-2xl font-bold p-5'>Destinations</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    destinations.map(destination =>  <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default AllDestinationsPage;