import EditDestination from '@/components/EditDestination';
import { destinationDetail } from '@/lib/api';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const destiationDetailPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const destination = await destinationDetail(id);
    const { _id, country, destinationName, price, duration, imageUrl, departureDate, description } = destination;
    // console.log(destination);
    return (
        <div className='container mx-auto my-2'>
            <div>
                <div className='mt-10 flex justify-between items-center mb-1'>
                    <Link href="/all-destinations" className='flex items-center gap-2'> <FaArrowLeft></FaArrowLeft> Back to destination</Link>
                    <div className='flex gap-2 items-center'>
                        
                        <EditDestination destination={destination}></EditDestination>

                        <Button className="p-2 rounded-none cursor-pointer" variant='danger-soft'>Cancel</Button>
                    </div>
                </div>
                <div className='aspect-[2/1] relative' >
                    <Image
                        alt={destinationName}
                        src={imageUrl}
                        fill
                        sizes=''
                        className='object-cover max-w-7xl mx-auto'
                    >
                    
                    </Image>
                </div>
                <div className='flex justify-between gap-3 items-center my-3'>
                    <small className='text-gray-500 text-base font-bold flex items-center gap-1'> <IoLocationOutline /> {country}</small>
                    <div>${price}</div>
                </div>
                <div>
                    {destinationName}
                </div>
                <div>
                    <h1>{duration}</h1>
                    <p>{description}</p>

                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default destiationDetailPage;