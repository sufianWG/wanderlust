import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { GrStatusGood } from 'react-icons/gr';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DeleteBooking from './DeleteBooking';

const MyBookingCard = ({booking}) => {
    const {_id, destinationName, departureDate, price, destinationImg} = booking;
    return (
        <div>
            <Card className='rounded-none grid grid-cols-3 gap-2 border shadow'>
                <div className=''>
                        <Image
                        alt={destinationName}
                        src={destinationImg}
                        width={350}
                        height={175}
                        className='object-cover'
                        >
                        </Image>
                    </div>
                <div className='flex flex-col gap-2'>
                    <Chip className='text-base bg-green-200 flex items-center p-1'><GrStatusGood /> Confirmed</Chip>
                    <h1 className='text-2xl font-bold'> {destinationName}</h1>
                    <small className='text-muted flex items-center gap-2'> <IoCalendarNumberOutline /> Departure: {new Date(departureDate).toLocaleString(
                        "en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        }
                    )}</small>
                    <small className='text-muted'>Booking ID: {_id}</small>
                    <h3 className='text-2xl text-cyan-500 font-bold'>${price}</h3>
                </div>
                <div className='flex gap-3 items-end justify-end'>
                    <DeleteBooking booking={booking}></DeleteBooking>
                    <Button variant='primary' className={'flex items-center justify-center gap-2'}> <FaEye></FaEye> View</Button>
                </div>
            </Card>
        </div>
    );
};

export default MyBookingCard;