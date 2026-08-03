import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';

const DestinationCard = ({ destination }) => {
    const { country, destinationName, price, duration, imageUrl } = destination;
    // console.log("country: ", country, "destinationName: ", destinationName, "price: ", price, "duration: ", duration );
    // console.log(imageUrl);
    return (
        <div>
            <Card className='p-3 rounded-xl shadow'>
                <div className='relative'>
                    <div>
                        <div className='p-3 rounded-xl aspect-[2/1.2]'>
                            <Image
                                src={imageUrl}
                                alt={destinationName}
                                fill
                                sizes=''
                                className='rounded-xl object-cover'
                            />
                        </div>
                        <div className='absolute top-2 right-2 '>
                            <Chip className='flex justify-center items-center gap-2 p-2 bg-amber-50/60 text-base rounded-md'> <FaStar></FaStar>4.5</Chip>
                        </div>
                    </div>
                </div>
                <div>
                    <small className='text-gray-500 text-base font-bold flex items-center gap-1'> <IoLocationOutline /> {country}</small>
                </div>
                <div>
                    <div>
                        <h2 className='text-lg font-bold'>{destinationName}</h2>
                        <h3>${price}</h3>
                    </div>
                    <small className='flex items-center text-base text-gray-500 gap-1'><CiCalendarDate /> {duration}</small>
                </div>
                <Link href={`/all-destinations`}>
                    <Button variant='outline'>BOOK NOW <GoArrowUpRight /> </Button>
                </Link>
            </Card>
        </div>
    );
};

export default DestinationCard;